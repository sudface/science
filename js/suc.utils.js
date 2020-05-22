var SUCUtils = {
	formatNumber: function (toUnit, fromUnit, value) {
		return SUCUtils.formatNumberSymbol(toUnit, fromUnit, value, true);
	},

	formatNumberSymbol: function(toUnit, fromUnit, number, showSymbol) {
		var value = SUCUtils.fromNormal(toUnit, SUCUtils.toNormal(fromUnit, number));
		var scientific = SUCUtils.getOffset(toUnit) == 0 && SUCUtils.getOffset(fromUnit) == 0;
		if (isNaN(value)) {
			return "Not a Number";
		}
		return SUCUtils.applyNumberFormat(value, scientific) +(showSymbol ? (" " + toUnit.symbol) : "");
	},
			  
	toNormal: function (unit, number) {
		return number * parseFloat(unit.scale, 10) + SUCUtils.getOffset(unit);
	},
					
	fromNormal: function (unit, number) {
		return (number - SUCUtils.getOffset(unit)) / parseFloat(unit.scale, 10);
	},
					
	getOffset: function(unit) {
		var offset = parseFloat(unit.offset, 10);
		return isNaN(offset) ? 0 : offset;
	},
			  
	applyNumberFormat: function (number, scientific) {
		var scientificDigits = number < 0 ? 9 : 8;
		var normalDigits = 3;
		var sigDigits = scientific ? scientificDigits : normalDigits;
		var value = SUCUtils.toScientific(number, sigDigits);
		if ((number < 999999999  && number > 0.0000009) || !scientific) {
			return SUCUtils.toSigDigits(number, sigDigits);
		}
		return SUCUtils.toScientific(number, 9);
	},
			  
	toScientific: function (num, sigDigs) {
		//convert any number to scientific notation with specified significant digits
		//e.g. .012345 -> 1.2345e-2 -- but 6.34e0 is displayed "6.34"
		//requires function toSigDigits()
				
		//find exponent using logarithm
		//e.g. log10(150) = 2.18 -- round down to 2 using floor()
		var powerTen = Math.floor(Math.log(Math.abs(num)) / Math.LN10);
		if (num == 0) powerTen = 0; //handle zero glitch			
			//find mantissa (e.g. "3.47" is mantissa of 34700)
			var tenToPower = Math.pow(10, powerTen);
			
		var mantissa = num / tenToPower;
						
		//force significant digits in mantissa
		//e.g. 5 -> 5.00, 7.1 -> 7.10, 4.2791 -> 4.28
						
		var output = new String(SUCUtils.toSigDigits(mantissa, sigDigs));
		//if exponent is zero, don't include e
		if (powerTen != 0) {
			output += "e" + String(powerTen);
		}
		return(output);
	},
					
	toSigDigits: function (num, sigDigs) {
		//eliminate undesired decimal places
		//e.g. 1.234 to 3 sig digits (1.23) -> multiply by 100, round if off, divide by 100
		var tenToPower = Math.pow(10, sigDigs - 1);
		var cropped = Math.round(num * tenToPower) / tenToPower;
				
		//create string so we can find length of number
		var output = new String(cropped);
				
		//add decimal point if missing
		if (output.length == 1 && sigDigs > 1) { //e.g. 5 -> 5.
			output = output.concat(".0");
		}
				
		//force correct number of zeroes
		//e.g. if sigDigs = 4, then length will end up 5 including decimal
		//so if current length is 3 (e.g. "6.2") then add two zeros
		return (output);
	},
	
	findDimension: function (dimension) {
		var dim = null;
		$.each(SUCDATA.items, function(key, value) {
			var id = value.key;
			if (id === dimension) {
				dim = value;
			}
		});
		return dim;
	},
	
	findUnit: function (dim, unitkey) {
		var unit = null;
		$.each(dim.units, function(key, value) {
			var id = value.unit_key;
			if (id === unitkey) {
				unit = value;
			}
		});
		return unit;
	},
	
	sortUnitsByName: function (unit1, unit2) {
		var aName = unit1.unit_name.toLowerCase();
		var bName = unit2.unit_name.toLowerCase(); 
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	},
	
	sortUnitsByNumber: function (unit1, unit2) {
		var aName = parseFloat(unit1.scale, 10);
		var bName = parseFloat(unit2.scale, 10); 
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	}
};
