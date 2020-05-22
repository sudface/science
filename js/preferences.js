var Prefs = {
		
	quizPreferencs: function () {
		var prefs = {};
		if (localStorage.quizPrefs) {
			prefs = JSON.parse(localStorage.quizPrefs);
		}
		this._addItemsToArray(prefs, {
			"remember": true, 
			"autoSelection": 0, 
			"prefSelection": 0
		});
		return prefs;
	},
	
	saveQuizProperty: function (key, value) {
		var prefs = this.quizPreferencs();
		prefs[key] = value;
		localStorage.quizPrefs = JSON.stringify(prefs);
	},
	
	preferredUnit: function (dim) {
		var key = dim.defaultUnit,
		    units = {},
		    unit = null;
		if (localStorage.units) {
			units = JSON.parse(localStorage.units);
		}
		if (units[dim.key]) {
			key = units[dim.key];
		}
		jQuery.each(dim.units, function(index, value) {
			if (value.unit_key === key) {
				unit = value;
			}
		});
		return unit;
	},
	
	getGeneralPrefs: function () {
		var prefs = {};
		if (localStorage.generalPrefs) {
			prefs = JSON.parse(localStorage.generalPrefs);
		}
		this._addItemsToArray(prefs, {
			"theme": "trontastic"
		});
		return prefs;
	},
	
	saveGeneralProperty: function (key, value) {
		var prefs = this.getGeneralPrefs();
		prefs[key] = value;
		localStorage.generalPrefs = JSON.stringify(prefs);
	},
	
	setDefaultUnit: function (dim, unit) {
		var units = {};
		if (localStorage.units) {
			units = JSON.parse(localStorage.units);
		}
		units[dim.key] = unit.unit_key;
		localStorage.units = JSON.stringify(units);
	},
	
	_addItemsToArray: function (array, values) {
		var i;
		for(i in values) {
			if (array[i] === 'undefined' || array[i] == null) {
				array[i] = values[i];
			}
		}
	}
};
