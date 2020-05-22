var TableView = {
	stateOptions: null,
	stateValue: 0,
	currentOption: 'default',
	openFunction: null,
		
	init: function (openFunc) {
		var form = $('form')[0], self = this;
		this.openFunction = openFunc;
		$( "#search-not-found" ).dialog({
			modal: true,
			resizable: false,
			open: self.openFunction,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
		$("*[legend-type='state']").hide();
		
		$("#table-content").css('height', $(window).height() - 115);
		
		$( "#search-not-found" ).dialog('close');
		form.onsubmit = function() {
		  	self.findElement();
		  	return false;
		};
		
		$(".table-options-button-close").click(function (){
			self.toggleOptions();
		});
		this.initTableOptions();
		$("*[element-id]").click(function () {
			if (ptElements[$(this).attr("element-id")]) {
				self.showElement($(this).attr("element-id"));
			}
		});
		
		$("rect[legend-type='default']").on("mouseover", function () {
			self.legendMouseover(this);
		}).on("mouseout", function () {
			self.legendMouseout(this);
		});
		
		$(window).bind('resize', function () {
			var minHeight = 768 - ($(".table-options-button-close").find("span").hasClass("ui-icon-circle-triangle-s") ? 0 : 150),
			    height = $(window).height(), width = $(window).width();
			$("#table-content").css('height', (height > minHeight ? height : minHeight) - 115);
			$("#table-content").css('width', width > 1024 ? width : 1024);
		});
	},
	
	initTableOptions: function () {
		var center = $("<center />"), table = $("<table />").attr("width", 600), self = this,
		    tr, td, div, element;
		center.append(table);
		div = $("<div />");
		this.createRadioButton(div, "tabledefault", "tableviewoption", "Default", true, function () {
			self.stateOptions.hide();
			$("*[legend-type='state']").hide();
			self.currentOption = 'default';
			$("*[legend-type='default']").show();
			$.each(ptElements, function (key, value) {
				element = $("rect[element-id='" + key + "']");
				element.css("fill", element.attr('default-color'));
				element = $("text[element-id='" + key + "']");
				element.css("fill", 'black');
				element = $("text[element-text-node='true'][element-id='" + key + "']");
				element.text(element.attr('default-value'));
			});
		});
		this.createRadioButton(div, "tablestate", "tableviewoption", "State", false, function () {
			$("*[legend-type='default']").hide();
			$("*[legend-type='state']").show();
			self.currentOption = 'state';
			self.updateStateDisplay(null, {value: self.stateValue});
			self.stateOptions.show();
		});
		
		div.buttonset();
		td = $("<td />").append($("<label />").append("View Table As:"));
		tr = $("<tr />").append(td);
		td = $("<td />").append(div);
		tr.append(td);
		table.append(tr);
		td = $("<td />").attr("colspan", "2").append(this.createStateOptions());
		tr = $("<tr />").append(td);
		table.append(tr);
		$("#tableoptions").append(center);
	},
	
	createStateOptions: function () {
		var slider = $("<div />").css("width", 500).css("background", "white"), self = this, maximum = 0;
		
		$.each(ptElements, function (key, value) {
			if (value.physical.boilingpoint && parseFloat(value.physical.boilingpoint.value) > maximum) {
				maximum = parseFloat(value.physical.boilingpoint.value);
			}
		});
		maximum += 10;
		this.stateOptions = $("<div />").css("display", "none");
		this.stateOptions.append("<br/>").append(slider);
		slider.slider({max: maximum, slide: function (event, ui) {self.updateStateDisplay(event, ui);}});
		return this.stateOptions;
	},
	
	updateStateDisplay: function (event, ui) {
		var dim = ptUnits['temperature'],
			solid = $("*[legend-key='solid']").attr('default-color'),
			liquid = $("*[legend-key='liquid']").attr('default-color'),
			gas = $("*[legend-key='gas']").attr('default-color'),
			unknown = $("*[legend-key='unknown']").attr('default-color'),
			fillColor = '#BBBBBB', fromUnit = null, i, element, textElement, valueElement, meltingpoint, boilingpoint;
		this.stateValue = ui.value;
		for (i = 0; i < dim.units.length; i++) {
			if (dim.units[i].unit_key === 'degK') {
				fromUnit = dim.units[i];
				break;
			}
		}
		if (fromUnit) {
			$.each(ptUnits['temperature'].units, function () {
				$("text[legend-key='" + this.unit_key + "']").text(SUCUtils.formatNumberSymbol(this, fromUnit,ui.value, true));
			});
		}
		
		$.each(ptElements, function (key, value) {
			element = $("rect[element-id='" + key + "']");
			textElement = $("text[element-id='" + key + "']");
			valueElement = $("text[element-id='" + key + "'][element-text-node='true']");
			boilingpoint = value.physical.boilingpoint ? parseFloat(value.physical.boilingpoint.value) : NaN;
			meltingpoint = value.physical.meltingpoint.length > 0 ? parseFloat(value.physical.meltingpoint[0].value) : NaN;
			if (!isNaN(meltingpoint) && ui.value < meltingpoint) {
				element.css("fill", solid);
				textElement.css("fill", fillColor);
				valueElement.text('Solid');
			} else if (!isNaN(boilingpoint) && ui.value > boilingpoint) {
				element.css("fill", gas);
				textElement.css("fill", fillColor);
				valueElement.text('Gas');
			} else if (!isNaN(meltingpoint) && !isNaN(boilingpoint)) {
				element.css('fill', liquid);
				textElement.css("fill", fillColor);
				valueElement.text('Liquid');
			} else {
				element.css('fill', unknown);
				textElement.css("fill", 'black');
				valueElement.text('Unknown');
			}
		});
	},
	
	legendMouseover: function (element) {
		var key = $(element).attr("legend-key");
		$("rect[element-type='" + key + "']").css("opacity", 0.5);
		$(element).css("opacity", 0.5);
	},
	
	legendMouseout: function (element) {
		var key = $(element).attr("legend-key");
		$("rect[element-type='" + key + "']").css("opacity", 1);
		$(element).css("opacity", 1);
	},
	
	createRadioButton: function (div, id, name, text, selected, clickFunc) {
		var radio = $('<input type="radio" />'),
		    label = $('<label for="radio1">Choice 1</label>');
		radio.attr("name", name).attr("id", id).click(clickFunc);
		label.attr("for", id).text(text);
		if (selected) {
			radio.prop("checked", "checked");
		}
		div.append(radio).append(label);
	},
	
	showElement: function (id) {
		var self = this;
		if ($("#dialog")) {
            $("#dialog").remove();
        }
        var text = this.elementsHTML(ptElements[id]);
        var $dialog = $('<div id="dialog"></div>')
                          .html(text)
                          .dialog({
                                  autoOpen: false,
                                  modal: true,
                                  resizable: false,
                                  open: self.openFunction,
                                  width: 700,
                                  height: 520,
                                  title: ptElements[id].general.name
                                  });
        $("#dialog").parent().attr("id","elementdialog");
        $( "#elementtabs" ).tabs();
        $dialog.dialog('open');
        $('#ui-tab-dialog-close').append($("#elementdialog").find('a.ui-dialog-titlebar-close'));
        return false;
	},
	
	findElement: function () {
		var value = jQuery.trim($("#s").val()).toLowerCase(), id = null;
    	if (value && value !== '') {
           	var str = value;
        	str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			    return letter.toUpperCase();
			});
        	var element = ptElements[str];
        	if (element && !jQuery.isEmptyObject(element)) {
        		id = element.general.symbol;
        	} else {
        	    if (value.match(/\d+/g)) {
        	    	value = parseInt(value, 10);
        	    }
        		jQuery.each(ptElements, function (i, val) {
        			if (val.general.name.toLowerCase().indexOf(value) === 0 || val.general.number === value) {
        				id = val.general.symbol;
        			}
        		});
        	}
    	}
		if (id) {
    		TableView.showElement(id);
    	} else {
    		$( "#search-not-found" ).dialog('open');
    	}
    	$("#s").val("");
	},
	
	elementsHTML: function (data) {
	    var text = '<div id="elementtabs" width="100%" style="overflow:hidden;"><ul>'; 
	    text += '<li><a href="#elementtabs-1">General</a></li>';
	    text += '<li><a href="#elementtabs-2">Physical</a></li>';
	    text += '<li><a href="#elementtabs-3">Atomic</a></li>';
	    text += '<li><a href="#elementtabs-4">Misc</a></li>';
	    text += '<li id="ui-tab-dialog-close"></li></ul>';
	    text += this.generalInfo(data); 
	    text += this.physicalInfo(data); 
	    text += this.atomicInfo(data); 
	    text += this.miscInfo(data);
	    text += '</div>';	
	    return text;
	},
	
	generalInfo: function (data) {
		return '<div id="elementtabs-1" style="width: 100%;">' + 
	        '<div class="popup-content"><table class="column-data">' +
	        this.tableRow('Name', data.general.name) +
	        this.tableRow('Symbol', data.general.symbol) +
	        this.tableRow('Number', data.general.number) +
	        this.tableRow('Catagory', data.general.catagory.name) +
	        this.tableRow('Group', data.general.group) +
	        this.tableRow('Period', data.general.period) +
	        this.tableRow('Block', data.general.block) +
	        this.tableRowUnit('Standard Atomic Weight', data.general.atomicweight) +
	        this.tableRow('Electron Configuration', data.general.electronconfig) +
	        this.tableRow('Electrons Per Shell', data.general.electronspershell) +
	        this.tableRow('Year Discovered', data.general.yeardiscovered) +
			this.tableRowArray('Discovered By', data.general.discoveredby) +
	        '</table></div>' +
	        '</div>';
	},
	
	physicalInfo: function (data) {
		return '<div id="elementtabs-2" style="width: 100%;">' + 
	        '<div class="popup-content"><table class="column-data">' +
	        this.tableRow('Color', data.physical.color) +
	        this.tableRow('Phase', data.physical.phase) +
	        this.tableRowUnits('Density', data.physical.density) +
	        this.tableRowUnit('Liquid Density at M.P.', data.physical.liquiddensityatmp) +
	        this.tableRowUnit('Liquid Density at B.P.', data.physical.liquiddensityatbp) +
	        this.tableRowUnits('Melting Point', data.physical.meltingpoint) +
	        this.tableRowUnit('Boiling Point', data.physical.boilingpoint) +
	        this.tableRow('Triple Point', data.physical.triplepoint) +
	        this.tableRow('Critical Point', data.physical.criticalpoint) +
	        this.tableRowUnit('Superconduction Temperature', data.physical.supercontemp) +
	        this.tableRowUnit('Heat of Fusion', data.physical.heatoffusion) +
	        this.tableRowUnit('Heat of Vaporization', data.physical.heatofvaporization) +
	        this.tableRowUnits('Molar Heat Capacity', data.physical.molarheatcapacity) +
	        this.tableRowUnit('Specific Heat', data.physical.specificheat) +
	        this.vaporPressureTableRow('Vapor Pressure', data.physical.vaporpressure) +
	        '</table></div>' +
	        '</div>';
	},
	
	atomicInfo: function (data) {
		return '<div id="elementtabs-3" style="width: 100%;">' + 
	        '<div class="popup-content"><table class="column-data">' +
	        this.tableRow('Oxidation States', data.atomic.oxidationstates) +
	        this.tableRow('Electronegativity', data.atomic.electronegativity) +
	        this.tableRowUnit('Electron Affinity', data.atomic.electronaffinity) +
	        this.tableRow('Valence', data.atomic.valence) +
	        this.tableRowUnits('Ionization Energies', data.atomic.ionizationenergies) +
	        this.tableRowUnit('Covalent Radius', data.atomic.covalentradius) +
	        this.tableRowUnit('Calculated Radius', data.atomic.calculatedradius) +
	        this.tableRowUnit('Empirical Radius', data.atomic.empiricalradius) +
	        this.tableRowUnit('Atomic Radius', data.atomic.atomicradius) +
	        this.tableRowUnit('Van der Waals Radius', data.atomic.vanderwaalsradius) +
	        '</table></div>' +
	        '</div>';
	},
	
	miscInfo: function (data) {
		return '<div id="elementtabs-4" style="width: 100%;">' + 
	        '<div class="popup-content"><table class="column-data">' +
	        this.tableRow('Crystal Structure', data.misc.crystalstructure) +
	        this.tableRow('Magnetic Ordering', data.misc. magneticordering) +
	        this.tableRowUnits('Thermal Conductivity', data.misc.thermalconductivity) +
	        this.tableRowUnit('Electrical Conductivity', data.misc.electricalconductivity) +
	        this.tableRowUnit('Speed of Sound', data.misc.speedofsound) +
	        this.tableRowUnit('Young\'s Modulus', data.misc.youngmodulus) +
	        this.tableRowUnit('Shear Modulus', data.misc.shearmodulus) +
	        this.tableRowUnits('Bulk Modulus', data.misc.bulkmodulus) +
	        this.tableRow('Poisson Ratio', data.misc.poissonratio) +
	        this.tableRow('Mohs Hardness', data.misc.mohshardness) +
	        this.tableRowUnit('Vickers Hardness', data.misc.vickershardness) +
	        this.tableRowUnit('Brinell Hardness', data.misc.brinellhardness) +
			this.tableRowNumber('Reflectivity', data.misc.reflectivity) +
			this.tableRowNumber('Refractive Index', data.misc.refractiveindex) +
	        this.tableRow('CAS Registry Number', data.misc.casregistrynumber) +
	        this.tableRow('More Information', '<a href="http://en.' + data.misc.wikipedia['en'] + '" target="_blank">Wikipedia</a>') +
	        '</table></div>' +
	        '</div>';
	},
	
	tableRow: function (name, value) {
		return '<tr><td valign="top" class="ui-state-default">' + name + ':</td><td>' + (value ? value : 'N/A') + '</td></tr>'; 
	},
	
	tableRowArray: function (name, value) {
		var row = '<tr><td valign="top" class="ui-state-default">' + name + ':</td><td>';
		if (!value || value.length === 0) {
			row += 'N/A';
		} else {
			$.each(value, function (index) {
				row += value[index] + "<br/>";
			});
		}
		row += '</td></tr>';
		return row;
	},
	
	tableRowNumber: function (name, value) {
		var retVal = '<tr><td valign="top" class="ui-state-default">' + name + ':</td><td>';
		if (!value || jQuery.isEmptyObject(value)) {
			retVal += "N/A";
		} else {
			if (value.name) {
				retVal += value.name + ": ";
			}
			retVal += value.value;
			if (value.symbol) {
				retVal += " " + value.symbol;
			}
		}
		retVal += '</td></tr>';
		return retVal;
	},
	
	tableRowUnit: function (name, value) {
		return '<tr><td valign="top" class="ui-state-default">' + name + ':</td><td>' + this.unitDisplay(value) + '</td></tr>'; 
	},
	
	tableRowUnits: function (name, value) {
		var retVal = '<tr><td valign="top" class="ui-state-default">' + name + ':</td><td>',
		    self = this;
		if (value.length === 0) {
			retVal += 'N/A';
		} else {
			jQuery.each(value, function(i, unit) {
				retVal += self.unitDisplay(unit) + '<br />';
			});
		}
		retVal += '</td></tr>';
		return retVal;
	},
	
	unitDisplay: function (value) {
		var retVal = '',
		    fromUnit,
		    toUnit;
		if (jQuery.isEmptyObject(value)) {
			retVal = 'N/A';
		} else {
			fromUnit = this.findUnit(value);
			toUnit = Prefs.preferredUnit(ptUnits[value.dim]);
			if (value.prefix) {
				retVal += value.prefix;
			}
			if (value.name && value.name !== '') {
				retVal += value.name + ': ';
			}
			retVal += (value.proj ? "(" : "") + SUCUtils.formatNumberSymbol(toUnit, fromUnit,value.value, false) + (value.proj ? ")" : "");
			retVal += (value.moe ? ('±' + this.formatValue(SUCUtils.formatNumberSymbol(toUnit, fromUnit,value.moe, false)) + ' '): ' ');
			if (value.suffix) {
				retVal += value.suffix + ' ';
			}
			retVal += toUnit.symbol;
		}
		return retVal;		
	},
	
	vaporPressureTableRow: function (name, points) {
	    var retVal = '<tr style="color: white; font-weight:bold;"><td valign="top" class="ui-state-default">' + name + ':</td><td>';
	    if  (points && !jQuery.isEmptyObject(points)) {
	        for (var point in points) {
	            if (point !== '') {
	                retVal += "(" + point + ")<br />";
	            }
	            value = points[point];
		        retVal += '<table class="vapor-pressure"><tr>';
		        retVal += '<td>P (Pa)</td>';
		        for (var val in value) {
		            var num = parseFloat(val, 10);
		            retVal += '<td>' + (num / 1000 >= 1 ? ((num / 1000) + 'K') : val) + '</td>';
		        }
		        retVal += '</tr><tr>';
		        retVal += '<td>at T (K)</td>';
		        for (var val in value) {
		            retVal += '<td>' + value[val] + '</td>';
		        }
		        retVal += '</tr></table>';
	        }
	    } else { 
	        retVal+= 'N/A';
	    }
	    retVal + '</td></tr>';
	    return retVal; 
	},
	
	formatValue: function (value) {
		var num = parseFloat(value);
		if (num === Math.round(num)) {
			return Math.round(num);
		}
		return value;
	},
	
	findUnit: function (value) {
		var dimension = ptUnits[value.dim],
		    fromUnit = null;
		if (dimension) {
			jQuery.each(dimension.units, function(i, unit) {
				if (unit.unit_key === value.unit) {
					fromUnit = unit;
				}
			});
		}
		return fromUnit;
	},
	
	toggleOptions: function () {
		var button = $(".table-options-button-close").find("span");//ui-icon-circle-triangle-s
		if (button.hasClass("ui-icon-circle-triangle-s")) {
			$("#table-content").animate('slow', function () {
				$("#table-content").css('height', $(window).height() - 265);
			});
			$("#tableoptions").slideDown('slow', function() {
				button.removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");
			});
		} else {
			$("#tableoptions").slideUp('slow', function() {
				button.removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");
			});
			$("#table-content").animate('slow', function () {
				$("#table-content").css('height', $(window).height() - 115);
			});
		}
	}
};
