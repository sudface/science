var PreferenceView = {
	themes: {
		"trontastic": "Default", 
		"humanity": "Humanity", 
		"redmond": "Redmond", 
		"smoothness": "Smoothness"
	},
	defaultTheme: "trontastic",
		
	init: function () {
		var html = "<table class='column-data'>",
		    quizPrefs = Prefs.quizPreferencs(),
		    genPrefs = Prefs.getGeneralPrefs(),
		    currentTheme = this.themes[genPrefs.theme] ? genPrefs.theme : this.defaultTheme,
		    self = this;
    	
    	$(window).bind('resize', function () {
			self.resize();
		});
    	this.resize();
    	
    	$.each(this.themes, function (key, value) {
    		$('#general-pref-theme-value').append(
    			$("<option />").attr("value", key).text(value)
    			               .prop("selected", key === currentTheme ? "selected" : null)
    		);
    	});
    	$('#general-pref-theme-value').selectmenu({style: 'popup', width: 500,
            select: function(event, options) {
            	Prefs.saveGeneralProperty('theme', $(this).val());
            	self.changeTheme($(this).val());
            }
    	});
    	$('#general-pref-theme-value-menu').css("width", "500px");
		
		// setup quiz preferences
		$('#quiz-pref-remember-value').prop("checked", quizPrefs.remember ? "checked" : null).click(function () {
		    self.toggleQuizSelection((typeof $(this).attr("checked") !== "undefined"), true);
			$(this).button('option', 'label', (typeof $(this).attr("checked") !== "undefined") ? "On" : "Off");
		}).button({label: quizPrefs.remember ? "On" : "Off"});
		$("#quiz-pref-selection-value").find("option[value='" + quizPrefs.prefSelection + "']")
		                               .attr('selected','selected');
		$('#quiz-pref-selection-value').selectmenu({style: 'popup', width: 500,
            select: function(event, options) {self.saveQuizChange(event, options);}});
		$('#quiz-pref-selection-value-menu').css("width", "500px");
		self.toggleQuizSelection(quizPrefs.remember, false);
		
		// setup  unit preferences
		for (var dim in ptUnits) {
			html += "<tr><td>" + ptUnits[dim].name + ":</td>";
			html += "<td id=\"prefrow" + ptUnits[dim].key + "\"></td></tr>";
		}
		html += "</table>";
		jQuery("#unit-prefs").html(html);
		for (var dim in ptUnits) {
			this.createUnitDropdown(ptUnits[dim]);
		}
	},
	
	resize: function () {
		var height = $(window).height() - 115, 
	    	width = $(window).width(), tab = $("#prefs");
		tab.css('height', height > 768 ? height : 768)
		   .css('width', width > 1024 ? width : 1024)
		   .find("fieldset").css('width', (width > 1024 ? width : 1024) - 125);
	},
	
	tabSelected: function () {
		this.toggleQuizSelection(Prefs.quizPreferencs().remember, false);
	},
	
	changeTheme: function (theme, callback) {
		var color, self = this,
			currentTheme = this.themes[theme] ? theme : this.defaultTheme;
		$('link[href$="theme.css"]').attr('href','css/' + currentTheme + '/theme.css');
    	setTimeout(function () {
    		color = self.rgb2hex($("table").css("color"));
    		console.log(color);
            $("text[text-type='label']").css('fill', self.rgb2hex($("table").css("color")));
            if (callback) {
            	callback();
            }
    	}, 500);
	},
	
	createUnitDropdown: function (dim) {
		var row = jQuery("#prefrow" + dim.key),
		    self = this,
		    unit = Prefs.preferredUnit(dim),
		    element;
		row.html("<select id=\"pref" + dim.key +"\" width=\"500\"></select>");
		element = jQuery("#pref" + dim.key);
		jQuery.each(dim.units, function(key, value) {
			var name = value.unit_name + " | " + value.symbol + " | ", id = value.unit_key;
			element.append($('<option>', { "value" : id, "selected" : value.unit_key === unit.unit_key })
	               .text(name));
		});
		element.selectmenu({style: 'popup', width: 500,
			               select: function(event, options) {self.saveUnitChange(event, options);},
			               format: this.unitFormat});
		$('#' + element.attr('id') + '-menu').css("width", "500px");
	},
	
	toggleQuizSelection: function (value, save) {
		var dropdown = $("#quiz-pref-selection-dropdown");
		    display = $("#quiz-pref-selection-display"),
		    autoValue = Prefs.quizPreferencs().autoSelection,
		    name;
		if (value) {
			dropdown.hide();
			switch (autoValue) {
				case 0: name = "Name"; break;
				case 1: name = "Symbol"; break;
				case 2: name = "Atomic Number"; break;
				default: name = "Random";
			}
			display.html(name);
			display.show();
		} else {	
			dropdown.show();
			display.hide();
		}
		if (save) {
			Prefs.saveQuizProperty("remember", value);
		}
	},
	
	saveQuizChange: function (event, options) {
		Prefs.saveQuizProperty("prefSelection", options.value);
	},
	
	saveUnitChange: function (event, options) {
		var dim = ptUnits[event.target.id.substring(4)],
		    index = options.value;
		Prefs.setDefaultUnit(dim, dim.units[index]);
	},
	
	unitFormat: function (text) {
		var newText = text;
		//array of find replaces
		var findreps = [
			{find:/([^\|><]+) \| /, rep: '<span class="ui-selectmenu-item-header" style="display:inline-block;max-width:400px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">$1</span>'},
			{find:/([^\|><]+) \| /g, rep: '<span class="ui-unit-symbol ui-selectmenu-item-content">$1</span>'},
			{find:/(\s*\|\s*) /g, rep: ''},
		];
		
		for(var i in findreps){
			newText = newText.replace(findreps[i].find, findreps[i].rep);
		}
		return newText;
	},
	
	rgb2hex: function (rgb) {
	     if (rgb.search("rgb") == -1) {
	    	 return rgb;
	     } else {
	    	 rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
	         function hex(x) {
	        	 return ("0" + parseInt(x).toString(16)).slice(-2);
	         }
	         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
	     }
	}
};
