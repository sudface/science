
  
var ptUnits = {
	
		"density" : {
			key : "density", 
				name: "density"
			, defaultUnit: "gpercm3", units: [
				
						{unit_key: "gpercm3",
						unit_name: "gram per centimeter³",
						symbol: "g/cm³",
						scale: "1000",
						offset: "0"},
					
						{unit_key: "gperl",
						unit_name: "gram per liter",
						symbol: "g/L",
						scale: "1",
						offset: "0"},
					
						{unit_key: "gperml",
						unit_name: "gram per milliliter",
						symbol: "g/mL",
						scale: "1000",
						offset: "0"},
					
						{unit_key: "kgpercm3",
						unit_name: "kilogram per centimeter³",
						symbol: "kg/cm³",
						scale: "1000000",
						offset: "0"},
					
						{unit_key: "kgperl",
						unit_name: "kilogram per liter",
						symbol: "kg/L",
						scale: "1000",
						offset: "0"},
					
						{unit_key: "kgperm3",
						unit_name: "kilogram per meter³",
						symbol: "kg/m³",
						scale: "1",
						offset: "0"},
					
						{unit_key: "kgperml",
						unit_name: "kilogram per milliliter",
						symbol: "kg/mL",
						scale: "1000000",
						offset: "0"},
					
			]
		},
	
		"electricalconduct" : {
			key : "electricalconduct", 
				name: "electrical conductivity"
			, defaultUnit: "megasperm", units: [
				
						{unit_key: "megasperm",
						unit_name: "megasiemens per meter",
						symbol: "MS/m",
						scale: "1E6",
						offset: "0"},
					
						{unit_key: "mhopercm",
						unit_name: "mho per centimeter",
						symbol: "℧/cm",
						scale: "100",
						offset: "0"},
					
						{unit_key: "mhoperm",
						unit_name: "mho per meter",
						symbol: "℧/m",
						scale: "1",
						offset: "0"},
					
						{unit_key: "spercm",
						unit_name: "siemens per centimeter",
						symbol: "S/cm",
						scale: "100",
						offset: "0"},
					
						{unit_key: "sperkm",
						unit_name: "siemens per kilometer",
						symbol: "S/km",
						scale: "0.001",
						offset: "0"},
					
						{unit_key: "sperm",
						unit_name: "siemens per meter",
						symbol: "S/m",
						scale: "1",
						offset: "0"},
					
			]
		},
	
		"length" : {
			key : "length", 
				name: "length / distance"
			, defaultUnit: "pm", units: [
				
						{unit_key: "m",
						unit_name: "meter",
						symbol: "m",
						scale: "1",
						offset: "0"},
					
						{unit_key: "microm",
						unit_name: "micrometer",
						symbol: "µm",
						scale: "0.000001",
						offset: "0"},
					
						{unit_key: "mm",
						unit_name: "millimeter",
						symbol: "mm",
						scale: "0.001",
						offset: "0"},
					
						{unit_key: "nm",
						unit_name: "nanometer",
						symbol: "nm",
						scale: "0.000000001",
						offset: "0"},
					
						{unit_key: "pm",
						unit_name: "picometer",
						symbol: "pm",
						scale: "0.000000000001",
						offset: "0"},
					
			]
		},
	
		"mass" : {
			key : "mass", 
				name: "weight / mass"
			, defaultUnit: "g", units: [
				
						{unit_key: "g",
						unit_name: "gram",
						symbol: "g",
						scale: "0.001",
						offset: "0"},
					
						{unit_key: "mg",
						unit_name: "milligram",
						symbol: "mg",
						scale: "0.000001",
						offset: "0"},
					
			]
		},
	
		"molenergy" : {
			key : "molenergy", 
				name: "molar energy"
			, defaultUnit: "molKJ", units: [
				
						{unit_key: "molbtuiso",
						unit_name: "british thermal unit ISO/mole",
						symbol: "BTU ISO/mol",
						scale: "1.0545E3",
						offset: "0"},
					
						{unit_key: "molev",
						unit_name: "electronvolt/mole",
						symbol: "eV/mol",
						scale: "1.60217733E-19",
						offset: "0"},
					
						{unit_key: "molJ",
						unit_name: "Joule/mole",
						symbol: "J/mol",
						scale: "1",
						offset: "0"},
					
						{unit_key: "molKJ",
						unit_name: "kilojoule/mole",
						symbol: "kJ/mol",
						scale: "1000",
						offset: "0"},
					
			]
		},
	
		"molheatcap" : {
			key : "molheatcap", 
				name: "molar heat capacity"
			, defaultUnit: "jpermolk", units: [
				
						{unit_key: "calpermolk",
						unit_name: "calorie TH per mole kelvin",
						symbol: "cal/(mol⋅K)",
						scale: "4.184",
						offset: "0"},
					
						{unit_key: "jpermolk",
						unit_name: "joule per mole kelvin",
						symbol: "J/(mol·K)",
						scale: "1",
						offset: "0"},
					
			]
		},
	
		"molmass" : {
			key : "molmass", 
				name: "molar mass"
			, defaultUnit: "gpmol", units: [
				
						{unit_key: "amupmol",
						unit_name: "automic mass unit",
						symbol: "u",
						scale: "0.001",
						offset: "0"},
					
						{unit_key: "cgpmol",
						unit_name: "centigram/mole",
						symbol: "cg/mol",
						scale: "0.00001",
						offset: "0"},
					
						{unit_key: "gpmol",
						unit_name: "gram/mole",
						symbol: "g/mol",
						scale: "0.001",
						offset: "0"},
					
			]
		},
	
		"pressure" : {
			key : "pressure", 
				name: "pressure"
			, defaultUnit: "gigapa", units: [
				
						{unit_key: "gigapa",
						unit_name: "gigapascal",
						symbol: "GPa",
						scale: "1E9",
						offset: "0"},
					
						{unit_key: "kpa",
						unit_name: "kilopascal",
						symbol: "kPa",
						scale: "1E3",
						offset: "0"},
					
						{unit_key: "megapa",
						unit_name: "megapascal",
						symbol: "MPa",
						scale: "1E6",
						offset: "0"},
					
						{unit_key: "pa",
						unit_name: "pascal",
						symbol: "Pa",
						scale: "1",
						offset: "0"},
					
			]
		},
	
		"specificheat" : {
			key : "specificheat", 
				name: "specific heat"
			, defaultUnit: "jperkgk", units: [
				
						{unit_key: "jpergc",
						unit_name: "joule per gram celsius",
						symbol: "J/(g⋅°C)",
						scale: "1000",
						offset: "0"},
					
						{unit_key: "jperkgc",
						unit_name: "joule per kilogram celsius",
						symbol: "J/(kg⋅°C)",
						scale: "1",
						offset: "0"},
					
						{unit_key: "jperkgk",
						unit_name: "joule per kilogram kelvin",
						symbol: "J/(kg⋅K)",
						scale: "1",
						offset: "0"},
					
						{unit_key: "kjperkgc",
						unit_name: "kilojoule per kilogram celsius",
						symbol: "kJ/(kg⋅°C)",
						scale: "1000",
						offset: "0"},
					
						{unit_key: "kjperkgk",
						unit_name: "kilojoule per kilogram kelvin",
						symbol: "kJ/(kg⋅K)",
						scale: "1000",
						offset: "0"},
					
			]
		},
	
		"temperature" : {
			key : "temperature", 
				name: "temperature"
			, defaultUnit: "degK", units: [
				
						{unit_key: "degC",
						unit_name: "celsius",
						symbol: "°C",
						scale: "1",
						offset: "273.15"},
					
						{unit_key: "degF",
						unit_name: "fahrenheit",
						symbol: "°F",
						scale: "0.555555555555555555555556",
						offset: "255.37222222222222222222222"},
					
						{unit_key: "degK",
						unit_name: "kelvin",
						symbol: "K",
						scale: "1",
						offset: "0"},
					
			]
		},
	
		"velocity" : {
			key : "velocity", 
				name: "speed / velocity"
			, defaultUnit: "mpers", units: [
				
						{unit_key: "cmpers",
						unit_name: "centimeter per second",
						symbol: "cm/s",
						scale: "0.01",
						offset: "0"},
					
						{unit_key: "kmperh",
						unit_name: "kilometer per hour",
						symbol: "km/h",
						scale: "2.777777777777777778E-1",
						offset: "0"},
					
						{unit_key: "mpers",
						unit_name: "meter per second",
						symbol: "m/s",
						scale: "1",
						offset: "0"},
					
						{unit_key: "mileperh",
						unit_name: "mile per hour",
						symbol: "mph",
						scale: "0.44704",
						offset: "0"},
					
			]
		},
	
		"thermalconduct" : {
			key : "thermalconduct", 
				name: "thermal conductivity"
			, defaultUnit: "wpermperk", units: [
				
						{unit_key: "btuperhrftf",
						unit_name: "BTU per hour foot fahrenheit",
						symbol: "BTU/(hr·ft⋅°F)",
						scale: "1.730735",
						offset: "0"},
					
						{unit_key: "wpercmperk",
						unit_name: "watts per centimeter kelvin",
						symbol: "W/(cm⋅K)",
						scale: "100",
						offset: "0"},
					
						{unit_key: "wpermperk",
						unit_name: "watts per meter kelvin",
						symbol: "W/(m⋅K)",
						scale: "1",
						offset: "0"},
					
			]
		},
	
		"volume" : {
			key : "volume", 
				name: "volume"
			, defaultUnit: "liter", units: [
				
						{unit_key: "cm3",
						unit_name: "cubic centimeter",
						symbol: "cm³",
						scale: "0.000001",
						offset: "0"},
					
						{unit_key: "m3",
						unit_name: "cubic meter",
						symbol: "m³",
						scale: "1",
						offset: "0"},
					
						{unit_key: "liter",
						unit_name: "liter",
						symbol: "L",
						scale: "0.001",
						offset: "0"},
					
			]
		},
	
};  
  
  
var ptElements = {
    
            "H": {
	    
        "general": {
          "name": "Hydrogen",
          "symbol": "H",
          "number": 1,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "1",
          "period": "1",
          "block": "s",
          "atomicweight": 
		{value : '1.00794', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '1s',
          "electronspershell": "1",
          "yeardiscovered": "1766",
		  "discoveredby": ["Henry Cavendish",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.00008988', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '0.07', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": 
		{value : '0.07099', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '14.01', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '20.28', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '13.8033 K (-259 °C), 7.042 kPa',
          "criticalpoint": '32.97 K, 1.293 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.117', dim:'molenergy', unit: 'molKJ',prefix:'(H₂) '}
	,
          "heatofvaporization": 
		{value : '0.904', dim:'molenergy', unit: 'molKJ',prefix:'(H₂) '}
	,
          "specificheat": 
		{value : '14300', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '28.836', dim:'molheatcap', unit: 'jpermolk',prefix:'(H₂) '}
	,],
          "vaporpressure": {'': {'1': '','10': '','100': '','1000': '','10000': '15','100000': '20',},}},
  
        "atomic": {
          "oxidationstates": "1, -1  (amphoteric oxide)",
          "electronegativity": "2.20 ",
          "electronaffinity": 
		{value : '72.8', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '1312.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '31', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '53', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '25', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '120', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.1805', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '1310', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000132'}
	,
          "casregistrynumber": "1333-74-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Hydrogen',}
       }
  
            },
        
            "He": {
	    
        "general": {
          "name": "Helium",
          "symbol": "He",
          "number": 2,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "1",
          "block": "s",
          "atomicweight": 
		{value : '4.002602', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '1s<sup>2</sup>',
          "electronspershell": "2",
          "yeardiscovered": "1895",
		  "discoveredby": ["Sir William Ramsay",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.0001786', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '0.145', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '0.95', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4.22', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '5.19 K, 0.227 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.0138', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '0.0829', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '5193.1', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '','10': '','100': '1.23','1000': '1.67','10000': '2.48','100000': '4.21',},}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "0",
          "ionizationenergies": [
		{value : '2372.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '5250.5', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '28', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '31', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '140', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal close-packed",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.1513', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '972', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000035'}
	,
          "casregistrynumber": "7440-59-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Helium',}
       }
  
            },
        
            "Li": {
	    
        "general": {
          "name": "Lithium",
          "symbol": "Li",
          "number": 3,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "2",
          "block": "s",
          "atomicweight": 
		{value : '6.941', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>1</sup>',
          "electronspershell": "2, 1",
          "yeardiscovered": "1817",
		  "discoveredby": ["Johan August Arfvedson",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '0.534', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '0.512', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '453.69', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1615', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '3223 K, 67 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '3.00', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '147.1', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '3570', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.860', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '797','10': '885','100': '995','1000': '1144','10000': '1337','100000': '1610',},}},
  
        "atomic": {
          "oxidationstates": "+1, -1 (strongly basic oxide)",
          "electronegativity": "0.98",
          "electronaffinity": 
		{value : '59.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '520.2', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '7298.1', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '11815.0', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '128', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '167', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '152', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '182', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '84.8', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '11', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '6000', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '0.6',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '11', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '4.2', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '4.9', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-93-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Lithium',}
       }
  
            },
        
            "Be": {
	    
        "general": {
          "name": "Beryllium",
          "symbol": "Be",
          "number": 4,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "2",
          "block": "s",
          "atomicweight": 
		{value : '9.012182', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup>',
          "electronspershell": "2, 2",
          "yeardiscovered": "1797",
		  "discoveredby": ["Nicholas Louis Vauquelin",]
       },
  
        "physical": {
          "color": "steel gray",
          "phase": "solid",
          "density": [
		{value : '1.85', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '1.690', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1560', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2742', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '12.2', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '297', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '1820', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '16.443', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1462','10': '1608','100': '1791','1000': '2023','10000': '2327','100000': '2742',},}},
  
        "atomic": {
          "oxidationstates": "2, 1 (amphoteric oxide)",
          "electronegativity": "1.57",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '899.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1757.1', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '14848.7', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '96', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '112', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '105', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '112', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '153', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '200', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '25', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '12870', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '600', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '5.5',
          "vickershardness": 
		{value : '1670', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '130', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '132', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '287', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.032",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-41-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Beryllium',}
       }
  
            },
        
            "B": {
	    
        "general": {
          "name": "Boron",
          "symbol": "B",
          "number": 5,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "13",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '10.811', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>1</sup>',
          "electronspershell": "2, 3",
          "yeardiscovered": "1808",
		  "discoveredby": ["Joseph-Louis Gay-Lussac","Louis Jacques Thénard","Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "black/brown",
          "phase": "solid",
          "density": [
		{value : '2.460', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '2.08', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2349', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4200', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '50.2', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '480', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '1030', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '11.087', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2348','10': '2562','100': '2822','1000': '3141','10000': '3545','100000': '4072',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (mildly acidic oxide)",
          "electronegativity": "2.04",
          "electronaffinity": 
		{value : '26.7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '800.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2427.1', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3659.7', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '84', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '87', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '85', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '90', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '192', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "rhombohedral",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '27.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.0000000001', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '16200', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '9.3',
          "vickershardness": 
		{value : '49000', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '320', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-42-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Boron',}
       }
  
            },
        
            "C": {
	    
        "general": {
          "name": "Carbon",
          "symbol": "C",
          "number": 6,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "14",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '12.0107', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>2</sup>',
          "electronspershell": "2, 4",
          "yeardiscovered": "Unknown",
		  "discoveredby": ["Egyptians","Sumerians",]
       },
  
        "physical": {
          "color": "black",
          "phase": "solid",
          "density": [
		{value : '1.95', dim:'density', unit: 'gpercm3',moe:0.15,name:'amorphous'}
	,
		{value : '2.267', dim:'density', unit: 'gpercm3',name:'graphite'}
	,
		{value : '3.515', dim:'density', unit: 'gpercm3',name:'diamond'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '3773.15', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5100.15', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '4600 K (4327 °C), 10800 kPa',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '117', dim:'molenergy', unit: 'molKJ',name:'graphite'}
	,
          "heatofvaporization": 
		{value : '715', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '710', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '8.517', dim:'molheatcap', unit: 'jpermolk',name:'graphite'}
	,
		{value : '6.155', dim:'molheatcap', unit: 'jpermolk',name:'diamond'}
	,],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1, 0, -1, -2, -3, -4",
          "electronegativity": "2.55",
          "electronaffinity": 
		{value : '153.9', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '1086.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2352.6', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '4620.5', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '77', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '67', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '70', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '170', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "Hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '142', dim:'thermalconduct', unit: 'wpermperk',moe:23,name:'graphite'}
	,
		{value : '1600', dim:'thermalconduct', unit: 'wpermperk',moe:700,name:'diamond'}
	,],
          "electricalconductivity": 
		{value : '0.10', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '18350', dim:'velocity', unit: 'mpers',name:'diamond'}
	,
          "brinellhardness": null,
          "mohshardness": '1-2 (graphite), 10 (diamond)',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '442', dim:'pressure', unit: 'gigapa',name:'diamond'}
	,],
          "shearmodulus": 
		{value : '478', dim:'pressure', unit: 'gigapa',name:'diamond'}
	,
          "youngmodulus": 
		{value : '1050', dim:'pressure', unit: 'gigapa',name:'diamond'}
	,
          "poissonratio": "0.1 (diamond)",
		  "reflectivity": 
		{value : '27',symbol:'%'}
	,
		  "refractiveindex": 
		{value : '2.417',name:'Diamond'}
	,
          "casregistrynumber": "7440-44-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Carbon',}
       }
  
            },
        
            "N": {
	    
        "general": {
          "name": "Nitrogen",
          "symbol": "N",
          "number": 7,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "15",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '14.0067', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>3</sup>',
          "electronspershell": "2, 5",
          "yeardiscovered": "1772",
		  "discoveredby": ["Daniel Rutherford",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.001251', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '0.808', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '63.15', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '77.36', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '63.1526 K (-210 °C), 12.53 kPa',
          "criticalpoint": '126.19 K, 3.3978 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.72', dim:'molenergy', unit: 'molKJ',prefix:'(N₂) '}
	,
          "heatofvaporization": 
		{value : '5.56', dim:'molenergy', unit: 'molKJ',prefix:'(N₂) '}
	,
          "specificheat": 
		{value : '1040', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '29.124', dim:'molheatcap', unit: 'jpermolk',prefix:'(N₂) '}
	,],
          "vaporpressure": {'': {'1': '37','10': '41','100': '46','1000': '53','10000': '62','100000': '77',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, 1, -1, -2, -3 (strongly acidic oxide)",
          "electronegativity": "3.04",
          "electronaffinity": 
		{value : '7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '1402.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2856', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '4578.1', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '71', dim:'length', unit: 'pm',moe:1}
	,
          "calculatedradius": 
		{value : '56', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '65', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '155', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.02583', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '353', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000298'}
	,
          "casregistrynumber": "7727-37-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Nitrogen',}
       }
  
            },
        
            "O": {
	    
        "general": {
          "name": "Oxygen",
          "symbol": "O",
          "number": 8,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "16",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '15.9994', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>4</sup>',
          "electronspershell": "2, 6",
          "yeardiscovered": "1774",
		  "discoveredby": ["Joseph Priestley","Carl Wilhelm Scheele",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.001429', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '1.14', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '54.36', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '90.20', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '154.59 K, 5.043 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.444', dim:'molenergy', unit: 'molKJ',prefix:'(O₂) '}
	,
          "heatofvaporization": 
		{value : '6.82', dim:'molenergy', unit: 'molKJ',prefix:'(O₂) '}
	,
          "specificheat": 
		{value : '919', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '29.378', dim:'molheatcap', unit: 'jpermolk',prefix:'(O₂) '}
	,],
          "vaporpressure": {'': {'1': '','10': '','100': '','1000': '61','10000': '73','100000': '90',},}},
  
        "atomic": {
          "oxidationstates": "2, 1, -1, -2",
          "electronegativity": "3.44",
          "electronaffinity": 
		{value : '141', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '1313.9', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '3388.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '5300.5', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '66', dim:'length', unit: 'pm',moe:2}
	,
          "calculatedradius": 
		{value : '48', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '60', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '152', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '0.02658', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '330', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000271'}
	,
          "casregistrynumber": "7782-44-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Oxygen',}
       }
  
            },
        
            "F": {
	    
        "general": {
          "name": "Fluorine",
          "symbol": "F",
          "number": 9,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '18.9984032', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>5</sup>',
          "electronspershell": "2, 7",
          "yeardiscovered": "1886",
		  "discoveredby": ["Henri Moissan",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.001696', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '1.505', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '53.53', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '85.03', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '144.40 K, 5.215 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.26', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '6.51', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '824', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '825', dim:'molheatcap', unit: 'jpermolk',name:'C<sub>p</sub>'}
	,
		{value : '610', dim:'molheatcap', unit: 'jpermolk',name:'C<sub>v</sub>'}
	,],
          "vaporpressure": {'': {'1': '38','10': '44','100': '50','1000': '58','10000': '69','100000': '85',},}},
  
        "atomic": {
          "oxidationstates": "-1 (oxidizes oxygen)",
          "electronegativity": "3.98",
          "electronaffinity": 
		{value : '328', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '1681', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '3374', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '6147', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '64', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '42', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '50', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '135', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.02591', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000195'}
	,
          "casregistrynumber": "7782-41-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Fluorine',}
       }
  
            },
        
            "Ne": {
	    
        "general": {
          "name": "Neon",
          "symbol": "Ne",
          "number": 10,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "2",
          "block": "p",
          "atomicweight": 
		{value : '20.1797', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[He] 2s<sup>2</sup> 2p<sup>6</sup>',
          "electronspershell": "2, 8",
          "yeardiscovered": "1898",
		  "discoveredby": ["Sir William Ramsay","Morris W. Travers",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.0009002', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '1.207', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '24.56', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '27.07', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '24.5561 K (-249°C), 43 kPa',
          "criticalpoint": '44.4 K, 2.76 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.335', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '1.71', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '1030', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '12','10': '13','100': '15','1000': '18','10000': '21','100000': '27',},}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "0",
          "ionizationenergies": [
		{value : '2080.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '3952.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '6122', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '58', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '38', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '154', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.0491', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '435', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '654', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000067'}
	,
          "casregistrynumber": "7440-01-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Neon',}
       }
  
            },
        
            "Na": {
	    
        "general": {
          "name": "Sodium",
          "symbol": "Na",
          "number": 11,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "3",
          "block": "s",
          "atomicweight": 
		{value : '22.98976928', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>1</sup>',
          "electronspershell": "2,8,1",
          "yeardiscovered": "1807",
		  "discoveredby": ["Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "Silvery Metallic",
          "phase": "Solid",
          "density": [
		{value : '0.968', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '0.927', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '370.87', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1156', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '2573 K, 35 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.60', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '97.42', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '1230', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '28.230', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '554','10': '617','100': '697','1000': '802','10000': '946','100000': '1153',},}},
  
        "atomic": {
          "oxidationstates": "+1, -1 (strongly basic oxide)",
          "electronegativity": "0.93",
          "electronaffinity": 
		{value : '52.8', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '495.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '4562', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '6910.3', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '166', dim:'length', unit: 'pm',moe:9}
	,
          "calculatedradius": 
		{value : '190', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '186', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '227', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '142', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '21', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3200', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '0.69', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '0.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '6.3', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '3.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '10', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-23-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Sodium',}
       }
  
            },
        
            "Mg": {
	    
        "general": {
          "name": "Magnesium",
          "symbol": "Mg",
          "number": 12,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "3",
          "block": "s",
          "atomicweight": 
		{value : '24.3050', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup>',
          "electronspershell": "2, 8, 2",
          "yeardiscovered": "1755",
		  "discoveredby": ["Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "Silvery-White",
          "phase": "Solid",
          "density": [
		{value : '1.738', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '1.584', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '923', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1363', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '8.48', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '128', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '1020', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.869', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '701','10': '773','100': '861','1000': '971','10000': '1132','100000': '1361',},}},
  
        "atomic": {
          "oxidationstates": "2, 1 (strongly basic oxide)",
          "electronegativity": "1.31",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '737.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1450.7', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '7732.7', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '141', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '150', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '160', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '173', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '156', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '23', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4940', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '260', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '45', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '17', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '45', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.290",
		  "reflectivity": 
		{value : '74',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7439-95-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Magnesium',}
       }
  
            },
        
            "Al": {
	    
        "general": {
          "name": "Aluminium",
          "symbol": "Al",
          "number": 13,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "13",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '26.9815386', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>1</sup>',
          "electronspershell": "2, 8, 3",
          "yeardiscovered": "1825",
		  "discoveredby": ["Hans Christian Oersted",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '2.70', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '2.375', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '933.47', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2792', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.175', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '10.71', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '294.0', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '904', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.200', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1482','10': '1632','100': '1817','1000': '2054','10000': '2364','100000': '2790',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.61",
          "electronaffinity": 
		{value : '42.5', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '577.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1816.7', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2744.8', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '121', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '118', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '125', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '143', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '184', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '237', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '38', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5000', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '245', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.75',
          "vickershardness": 
		{value : '167', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '76', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '26', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '70', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.35",
		  "reflectivity": 
		{value : '71',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7429-90-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Aluminium',}
       }
  
            },
        
            "Si": {
	    
        "general": {
          "name": "Silicon",
          "symbol": "Si",
          "number": 14,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "14",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '28.0855', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>2</sup>',
          "electronspershell": "2, 8, 4",
          "yeardiscovered": "1824",
		  "discoveredby": ["Jons Jacob Berzelius",]
       },
  
        "physical": {
          "color": "grayish-black",
          "phase": "solid",
          "density": [
		{value : '2.3290', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '2.57', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1687', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3538', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '50.21', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '359', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '710', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '19.789', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1908','10': '2102','100': '2339','1000': '2636','10000': '3021','100000': '3537',},}},
  
        "atomic": {
          "oxidationstates": "4, 3 , 2 , 1, -1, -2, -3, -4 (amphoteric oxide)",
          "electronegativity": "1.90",
          "electronaffinity": 
		{value : '133.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '786.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1577.1', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3231.6', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '111', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '111', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '110', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '111', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '210', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "diamond cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '149', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.0010', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '8433', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '7',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '97.6', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '65.5', dim:'pressure', unit: 'gigapa',moe:14.5}
	,
          "youngmodulus": 
		{value : '159', dim:'pressure', unit: 'gigapa',moe:29}
	,
          "poissonratio": "0.064 - 0.28",
		  "reflectivity": 
		{value : '28',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-21-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Silicon',}
       }
  
            },
        
            "P": {
	    
        "general": {
          "name": "Phosphorus",
          "symbol": "P",
          "number": 15,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "15",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '30.973762', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>3</sup>',
          "electronspershell": "2, 8, 5",
          "yeardiscovered": "1669",
		  "discoveredby": ["Hennig Brand",]
       },
  
        "physical": {
          "color": "colorless, white, yellow, red, violet, black",
          "phase": "solid",
          "density": [
		{value : '1.823', dim:'density', unit: 'gpercm3',name:'white'}
	,
		{value : '2.27', dim:'density', unit: 'gpercm3',moe:0.07,name:'red'}
	,
		{value : '2.36', dim:'density', unit: 'gpercm3',name:'violet'}
	,
		{value : '2.69', dim:'density', unit: 'gpercm3',name:'black'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '317.35', dim:'temperature', unit: 'degK',name:'white'}
	,
		{value : '883.15', dim:'temperature', unit: 'degK',name:'black'}
	,],
          "boilingpoint": 
		{value : '553.2', dim:'temperature', unit: 'degK',name:'white'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '0.66', dim:'molenergy', unit: 'molKJ',name:'white'}
	,
          "heatofvaporization": 
		{value : '12.4', dim:'molenergy', unit: 'molKJ',name:'white'}
	,
          "specificheat": 
		{value : '769.7', dim:'specificheat', unit: 'jperkgk',name:'white'}
	,
          "molarheatcapacity": [
		{value : '23.824', dim:'molheatcap', unit: 'jpermolk',name:'white'}
	,],
          "vaporpressure": {'white': {'1': '279','10': '307','100': '342','1000': '388','10000': '453','100000': '549',},'red': {'1': '455','10': '489','100': '529','1000': '576','10000': '635','100000': '704',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, 1, -1, -2, -3 (mildly acidic oxide)",
          "electronegativity": "2.19",
          "electronaffinity": 
		{value : '72', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '1011.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1907', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2914.1', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '107', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '98', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '100', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '180', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "tetrahedra",
          "magneticordering": "(white, red, violet, black) diamagnetic",
          "thermalconductivity": [
		{value : '0.236', dim:'thermalconduct', unit: 'wpermperk',name:'white'}
	,
		{value : '12.1', dim:'thermalconduct', unit: 'wpermperk',name:'black'}
	,],
          "electricalconductivity": 
		{value : '10', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '5', dim:'pressure', unit: 'gigapa',name:'white'}
	,
		{value : '11', dim:'pressure', unit: 'gigapa',name:'red'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.001212'}
	,
          "casregistrynumber": "7723-14-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Phosphorus',}
       }
  
            },
        
            "S": {
	    
        "general": {
          "name": "Sulfur",
          "symbol": "S",
          "number": 16,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "16",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '32.065', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>4</sup>',
          "electronspershell": "2, 8, 6",
          "yeardiscovered": "Unknown",
		  "discoveredby": ["Chinese",]
       },
  
        "physical": {
          "color": "yellow",
          "phase": "solid",
          "density": [
		{value : '2.07', dim:'density', unit: 'gpercm3',name:'alpha'}
	,
		{value : '1.96', dim:'density', unit: 'gpercm3',name:'beta'}
	,
		{value : '1.92', dim:'density', unit: 'gpercm3',name:'gamma'}
	,],
          "liquiddensityatmp": 
		{value : '1.819', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '388.36', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '717.8', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '1314 K, 20.7 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '1.727', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '45', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '705', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '22.75', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '375','10': '408','100': '449','1000': '508','10000': '591','100000': '717',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, -1, -2 (strongly acidic oxide)",
          "electronegativity": "2.58",
          "electronaffinity": 
		{value : '200', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '999.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2252', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3357', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '105', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '88', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '100', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '180', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.205', dim:'thermalconduct', unit: 'wpermperk',name:'amorphous'}
	,],
          "electricalconductivity": 
		{value : '0.000000000000000000001', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '2.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '7.7', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.001111'}
	,
          "casregistrynumber": "7704-34-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Sulfur',}
       }
  
            },
        
            "Cl": {
	    
        "general": {
          "name": "Chlorine",
          "symbol": "Cl",
          "number": 17,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '35.453', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>5</sup>',
          "electronspershell": "2, 8, 7",
          "yeardiscovered": "1774",
		  "discoveredby": ["Carl William Scheele",]
       },
  
        "physical": {
          "color": "yellow-green",
          "phase": "gas",
          "density": [
		{value : '0.0032', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '1.5625', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '171.6', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '239.11', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '416.9 K, 7.991 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '6.406', dim:'molenergy', unit: 'molKJ',prefix:'(Cl₂) '}
	,
          "heatofvaporization": 
		{value : '20.41', dim:'molenergy', unit: 'molKJ',prefix:'(Cl₂) '}
	,
          "specificheat": 
		{value : '478.2', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '33.949', dim:'molheatcap', unit: 'jpermolk',prefix:'(Cl₂) '}
	,],
          "vaporpressure": {'': {'1': '128','10': '139','100': '153','1000': '170','10000': '197','100000': '239',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3, 2, 1, -1 (strongly acidic oxide)",
          "electronegativity": "3.16",
          "electronaffinity": 
		{value : '349', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '1251.2', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2298', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3822', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '102', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '79', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '100', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '175', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.0089', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.00000001', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '206', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '1.1', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000773'}
	,
          "casregistrynumber": "7782-50-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Chlorine',}
       }
  
            },
        
            "Ar": {
	    
        "general": {
          "name": "Argon",
          "symbol": "Ar",
          "number": 18,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "3",
          "block": "p",
          "atomicweight": 
		{value : '39.948', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ne] 3s<sup>2</sup> 3p<sup>6</sup>',
          "electronspershell": "2, 8, 8",
          "yeardiscovered": "1894",
		  "discoveredby": ["Sir William Ramsay","Lord Rayleigh",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.001784', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '1.40', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '83.80', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '87.30', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '83.8058 K (-189°C), 69 kPa',
          "criticalpoint": '150.87 K, 4.898 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '1.18', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '6.43', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '520.33', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '','10': '47','100': '53','1000': '61','10000': '71','100000': '87',},}},
  
        "atomic": {
          "oxidationstates": "0",
          "electronegativity": "",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "0",
          "ionizationenergies": [
		{value : '1520.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2665.8', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3931', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '106', dim:'length', unit: 'pm',moe:10}
	,
          "calculatedradius": 
		{value : '71', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '71', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '188', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.01772', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '323', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000281'}
	,
          "casregistrynumber": "7440-37-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Argon',}
       }
  
            },
        
            "K": {
	    
        "general": {
          "name": "Potassium",
          "symbol": "K",
          "number": 19,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "4",
          "block": "s",
          "atomicweight": 
		{value : '39.0983', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>1</sup>',
          "electronspershell": "2, 8, 8, 1",
          "yeardiscovered": "1807",
		  "discoveredby": ["Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "silvery gray",
          "phase": "solid",
          "density": [
		{value : '0.862', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '0.828', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '336.53', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1032', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '336.35 K (63°C), 0.00000013 kPa',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.33', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '76.9', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '757', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '29.6', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "1 (strongly basic oxide)",
          "electronegativity": "0.82",
          "electronaffinity": 
		{value : '48.4', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '418.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '3052', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '4420', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '203', dim:'length', unit: 'pm',moe:12}
	,
          "calculatedradius": 
		{value : '243', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '220', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '227', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '275', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '102.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '14', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2000', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '0.363', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '0.4',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '3.1', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '1.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '3.53', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-09-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Potassium',}
       }
  
            },
        
            "Ca": {
	    
        "general": {
          "name": "Calcium",
          "symbol": "Ca",
          "number": 20,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "4",
          "block": "s",
          "atomicweight": 
		{value : '40.078', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup>',
          "electronspershell": "2, 8, 8, 2",
          "yeardiscovered": "1808",
		  "discoveredby": ["Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '1.55', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '1.378', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1115', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1757', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '8.54', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '154.7', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '631', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.929', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '864','10': '956','100': '1071','1000': '1227','10000': '1443','100000': '1755',},}},
  
        "atomic": {
          "oxidationstates": "+2, +1 (strongly basic oxide)",
          "electronegativity": "1.00",
          "electronaffinity": 
		{value : '2.37', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '589.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1145.4', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '4912.4', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '176', dim:'length', unit: 'pm',moe:10}
	,
          "calculatedradius": 
		{value : '194', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '197', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '231', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '201', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '29', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3810', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '167', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.75',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '17', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '7.4', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '20', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.31",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-70-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Calcium',}
       }
  
            },
        
            "Sc": {
	    
        "general": {
          "name": "Scandium",
          "symbol": "Sc",
          "number": 21,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "3",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '44.955912', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>1</sup>',
          "electronspershell": "2, 8, 9, 2 ",
          "yeardiscovered": "1879",
		  "discoveredby": ["Lars Fredrik Nilson",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '2.985', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '2.80', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1814', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3109', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.05', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '14.1', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '332.7', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '567', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.52', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1645','10': '1804','100': '2006','1000': '2266','10000': '2613','100000': '3101',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.36",
          "electronaffinity": 
		{value : '18.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '633.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1235.0', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2388.6', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '170', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '184', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '160', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '162', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '211', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '15.8', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.8', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '750', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '56.6', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '29.1', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '74.4', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.279",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-20-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Scandium',}
       }
  
            },
        
            "Ti": {
	    
        "general": {
          "name": "Titanium",
          "symbol": "Ti",
          "number": 22,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "4",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '47.867', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>2</sup>',
          "electronspershell": "2, 8, 10, 2",
          "yeardiscovered": "1791",
		  "discoveredby": ["William Gregor",]
       },
  
        "physical": {
          "color": "silvery grey metallic",
          "phase": "solid",
          "density": [
		{value : '4.506', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '4.11', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1941', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3560', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.4', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '14.15', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '425', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '520', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.060', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1982','10': '2171','100': '2403','1000': '2692','10000': '3064','100000': '3558',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.54",
          "electronaffinity": 
		{value : '7.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '658.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1309.8', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2652.5', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '160', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '176', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '147', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '21.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '2.5', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5090', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '716', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.0',
          "vickershardness": 
		{value : '970', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '110', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '44', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '116', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.32",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-32-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Titanium',}
       }
  
            },
        
            "V": {
	    
        "general": {
          "name": "Vanadium",
          "symbol": "V",
          "number": 23,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "5",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '50.9415', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>3</sup>',
          "electronspershell": "2, 8, 11, 2",
          "yeardiscovered": "1801",
		  "discoveredby": ["Andres Manuel del Rio","Nils Gabriel Sefstrom",]
       },
  
        "physical": {
          "color": "bright white",
          "phase": "solid",
          "density": [
		{value : '6.0', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.5', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2183', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3680', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '5.4', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '21.5', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '459', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '489', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.89', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2101','10': '2289','100': '2523','1000': '2814','10000': '3187','100000': '3679',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, 1, -1 (amphoteric oxide)",
          "electronegativity": "1.63",
          "electronaffinity": 
		{value : '50.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '650.9', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1414', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2830', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '153', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '171', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '134', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '30.7', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '5.0', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4560', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '628', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.7',
          "vickershardness": 
		{value : '628', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '160', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '47', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '128', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.37",
		  "reflectivity": 
		{value : '61',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-62-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Vanadium',}
       }
  
            },
        
            "Cr": {
	    
        "general": {
          "name": "Chromium",
          "symbol": "Cr",
          "number": 24,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "6",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '51.9961', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>1</sup> 3d<sup>5</sup>',
          "electronspershell": "2, 8, 13, 1",
          "yeardiscovered": "1797",
		  "discoveredby": ["Louis Nicholas Vauquelin",]
       },
  
        "physical": {
          "color": "silvery metallic",
          "phase": "solid",
          "density": [
		{value : '7.19', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.3', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2180', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2944', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '21.0', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '339.5', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '448', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '23.35', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1656','10': '1807','100': '1991','1000': '2223','10000': '2530','100000': '2942',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, -1, -2 (strongly acidic oxide)",
          "electronegativity": "1.66",
          "electronaffinity": 
		{value : '64.3', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '652.9', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1590.6', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2987', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '166', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '128', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "antiferromagnetism",
          "thermalconductivity": [
		{value : '93.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '7.9', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5940', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '1120', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '8.5',
          "vickershardness": 
		{value : '1060', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '160', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '115', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '279', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.21",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-47-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Chromium',}
       }
  
            },
        
            "Mn": {
	    
        "general": {
          "name": "Manganese",
          "symbol": "Mn",
          "number": 25,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "7",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '54.938045', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>5</sup>',
          "electronspershell": "2, 8, 13, 2",
          "yeardiscovered": "1774",
		  "discoveredby": ["Johan Gottlieb Gahn",]
       },
  
        "physical": {
          "color": "silvery metallic",
          "phase": "solid",
          "density": [
		{value : '7.21', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.95', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1519', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2334', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '12.91', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '221', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '479', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.32', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1228','10': '1347','100': '1493','1000': '1691','10000': '1955','100000': '2333',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3, 2, 1, -1, -2, -3 (oxides: acidic, basic or amphoteric)",
          "electronegativity": "1.55",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '717.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1509.0', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3248', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '161', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '127', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '7.81', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.62', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5150', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '196', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '120', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '198', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-96-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Manganese',}
       }
  
            },
        
            "Fe": {
	    
        "general": {
          "name": "Iron",
          "symbol": "Fe",
          "number": 26,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "8",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '55.845', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>6</sup>',
          "electronspershell": "2, 8, 14, 2",
          "yeardiscovered": "-2000",
		  "discoveredby": ["China","Iran",]
       },
  
        "physical": {
          "color": "lustrous metallic-gray",
          "phase": "solid",
          "density": [
		{value : '7.874', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.98', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1811', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3134', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '13.81', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '340', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '449', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.10', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1728','10': '1890','100': '2091','1000': '2346','10000': '2679','100000': '3132',},}},
  
        "atomic": {
          "oxidationstates": "8, 7, 6, 5, 4 , 3, 2, 1, -1, -2 (amphoteric oxide)",
          "electronegativity": "1.83",
          "electronaffinity": 
		{value : '15.7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '762.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1561.9', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2957', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '132', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '156', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '126', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "ferromagnetic",
          "thermalconductivity": [
		{value : '80.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '10', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5120', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '490', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '4',
          "vickershardness": 
		{value : '608', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '170', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '82', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '211', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.29",
		  "reflectivity": 
		{value : '65',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7439-89-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Iron',}
       }
  
            },
        
            "Co": {
	    
        "general": {
          "name": "Cobalt",
          "symbol": "Co",
          "number": 27,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "9",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '58.933195', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>7</sup>',
          "electronspershell": "2, 8, 15, 2",
          "yeardiscovered": "1735",
		  "discoveredby": ["Georg Brandt",]
       },
  
        "physical": {
          "color": "metallic gray",
          "phase": "solid",
          "density": [
		{value : '8.90', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.75', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1768', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3200', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '16.06', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '377', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '421', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.81', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1790','10': '1960','100': '2165','1000': '2423','10000': '2755','100000': '3198',},}},
  
        "atomic": {
          "oxidationstates": "5, 4 , 3, 2, 1, -1 (amphoteric oxide)",
          "electronegativity": "1.88",
          "electronaffinity": 
		{value : '63.7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '760.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1648', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3232', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '126', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '152', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '125', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "ferromagnetic",
          "thermalconductivity": [
		{value : '100', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '17', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4720', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '700', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '5.0',
          "vickershardness": 
		{value : '1043', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '180', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '75', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '209', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.31",
		  "reflectivity": 
		{value : '67',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-48-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Cobalt',}
       }
  
            },
        
            "Ni": {
	    
        "general": {
          "name": "Nickel",
          "symbol": "Ni",
          "number": 28,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "10",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '58.6934', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>1</sup> 3d<sup>9</sup>',
          "electronspershell": "2, 8, 17, 1",
          "yeardiscovered": "1751",
		  "discoveredby": ["Axel Fredrik Cronstedt",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '8.908', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.81', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1728', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3186', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '17.48', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '377.5', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '445', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.07', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1783','10': '1950','100': '2154','1000': '2410','10000': '2741','100000': '3184',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1, -1 (mildly basic oxide)",
          "electronegativity": "1.91",
          "electronaffinity": 
		{value : '112', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '737.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1753.0', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3395', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '124', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '149', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '124', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '163', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "ferromagnetic",
          "thermalconductivity": [
		{value : '90.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '14', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4900', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '700', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '4.0',
          "vickershardness": 
		{value : '638', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '180', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '76', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '200', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.31",
		  "reflectivity": 
		{value : '72',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-02-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Nickel',}
       }
  
            },
        
            "Cu": {
	    
        "general": {
          "name": "Copper",
          "symbol": "Cu",
          "number": 29,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "11",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '63.546', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>1</sup> 3d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 1",
          "yeardiscovered": "-8000",
		  "discoveredby": ["China","Central America","West Africa",]
       },
  
        "physical": {
          "color": "orange-red",
          "phase": "solid",
          "density": [
		{value : '8.94', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '8.02', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1357.77', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2835', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '13.26', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '300.4', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '384.4', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.440', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1509','10': '1661','100': '1850','1000': '2089','10000': '2404','100000': '2834',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1 (mildly basic oxide)",
          "electronegativity": "1.90",
          "electronaffinity": 
		{value : '118.4', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '745.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1957.9', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3555', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '132', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '128', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '140', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '401', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '59', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3810', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '874', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '3.0',
          "vickershardness": 
		{value : '369', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '140', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '48', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '119', dim:'pressure', unit: 'gigapa',moe:9}
	,
          "poissonratio": "0.34",
		  "reflectivity": 
		{value : '90',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-50-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Copper',}
       }
  
            },
        
            "Zn": {
	    
        "general": {
          "name": "Zinc",
          "symbol": "Zn",
          "number": 30,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "12",
          "period": "4",
          "block": "d",
          "atomicweight": 
		{value : '65.38', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 2",
          "yeardiscovered": "1500",
		  "discoveredby": ["Andreas Sigismund Marggraf",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '7.14', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.57', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '692.68', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1180', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.32', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '123.6', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '388', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.470', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '610','10': '670','100': '750','1000': '852','10000': '990','100000': '1179',},}},
  
        "atomic": {
          "oxidationstates": "+2, +1, 0 (amphoteric oxide)",
          "electronegativity": "1.65",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '906.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1733.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3833', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '122', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '142', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '134', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '139', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '116', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '17', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3850', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '412', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '70', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '43', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '108', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.25",
		  "reflectivity": 
		{value : '80',symbol:'%'}
	,
		  "refractiveindex": 
		{value : '1.00205'}
	,
          "casregistrynumber": "7440-66-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Zinc',}
       }
  
            },
        
            "Ga": {
	    
        "general": {
          "name": "Gallium",
          "symbol": "Ga",
          "number": 31,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "13",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '69.723', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>1</sup>',
          "electronspershell": "2, 8, 18, 3",
          "yeardiscovered": "1875",
		  "discoveredby": ["Paul Emile Lecoq de Boisbaudran",]
       },
  
        "physical": {
          "color": "silver-white",
          "phase": "solid",
          "density": [
		{value : '5.91', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.095', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '302.9146', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2477', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.083', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '5.59', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '254', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '371', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.86', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1310','10': '1448','100': '1620','1000': '1838','10000': '2125','100000': '2518',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.81",
          "electronaffinity": 
		{value : '28.9', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '578.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1979.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2963', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '122', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '136', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '130', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '187', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '40.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '7.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2740', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '60', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.5',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '9.8', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.47",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-55-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Gallium',}
       }
  
            },
        
            "Ge": {
	    
        "general": {
          "name": "Germanium",
          "symbol": "Ge",
          "number": 32,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "14",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '72.63', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>2</sup>',
          "electronspershell": "2, 8, 18, 4",
          "yeardiscovered": "1886",
		  "discoveredby": ["Clemens Winkler",]
       },
  
        "physical": {
          "color": "grayish white",
          "phase": "solid",
          "density": [
		{value : '05.323', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.60', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1211.40', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3106', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '36.94', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '334', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '321.4', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '23.222', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1644','10': '1814','100': '2023','1000': '2287','10000': '2633','100000': '3104',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1, 0, -1, -2, -3, -4 (amphoteric oxide)",
          "electronegativity": "2.01",
          "electronaffinity": 
		{value : '119', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '762', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1537.5', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3302.1', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '122', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '125', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '125', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '122', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '211', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "diamond cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '60.2', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.0020', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5400', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '6.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '75', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '41', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '103', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.26",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-56-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Germanium',}
       }
  
            },
        
            "As": {
	    
        "general": {
          "name": "Arsenic",
          "symbol": "As",
          "number": 33,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "15",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '74.92160', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>3</sup>',
          "electronspershell": "2, 8, 18, 5",
          "yeardiscovered": "1250",
		  "discoveredby": ["Mid East",]
       },
  
        "physical": {
          "color": "metallic grey",
          "phase": "solid",
          "density": [
		{value : '5.727', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.22', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1090', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '887', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '1090 K, 3628 kPa',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '24.44', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '34.76', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '328', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.64', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '553','10': '596','100': '646','1000': '706','10000': '781','100000': '874',},}},
  
        "atomic": {
          "oxidationstates": "5, 3, 2, 1, -3 (mildly acidic oxide)",
          "electronegativity": "2.18",
          "electronaffinity": 
		{value : '78', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '947.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1798', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2735', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '119', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '114', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '115', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '119', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '185', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "trigonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '50.2', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '3.3', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '1440', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '22', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '8', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.001552'}
	,
          "casregistrynumber": "7440-38-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Arsenic',}
       }
  
            },
        
            "Se": {
	    
        "general": {
          "name": "Selenium",
          "symbol": "Se",
          "number": 34,
          "catagory": {
              "name":"Nonmetal", 
              "key": "nonmetal"
          },
          "group": "16",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '78.96', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>4</sup>',
          "electronspershell": "2, 8, 18, 6",
          "yeardiscovered": "1817",
		  "discoveredby": ["Jons Jakob Berzelius",]
       },
  
        "physical": {
          "color": "black and red",
          "phase": "solid",
          "density": [
		{value : '4.81', dim:'density', unit: 'gpercm3',name:'gray'}
	,
		{value : '4.39', dim:'density', unit: 'gpercm3',name:'alpha'}
	,
		{value : '4.28', dim:'density', unit: 'gpercm3',name:'vitreous'}
	,],
          "liquiddensityatmp": 
		{value : '3.99', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '494', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '958', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '1766 K, 27.2 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '6.69', dim:'molenergy', unit: 'molKJ',name:'gray'}
	,
          "heatofvaporization": 
		{value : '95.48', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '321.2', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.363', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '500','10': '552','100': '617','1000': '704','10000': '813','100000': '958',},}},
  
        "atomic": {
          "oxidationstates": "6, 4, 2, 1, -2 (strongly acidic oxide)",
          "electronegativity": "2.55",
          "electronaffinity": 
		{value : '195', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '941.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2045', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2973.7', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '120', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '103', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '115', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '120', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '190', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.519', dim:'thermalconduct', unit: 'wpermperk',name:'amorphous'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '3350', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '736', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '8.3', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '3.7', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '10', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.33",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000895'}
	,
          "casregistrynumber": "7782-49-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Selenium',}
       }
  
            },
        
            "Br": {
	    
        "general": {
          "name": "Bromine",
          "symbol": "Br",
          "number": 35,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '79.904', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>5</sup>',
          "electronspershell": "2, 8, 18, 7",
          "yeardiscovered": "1826",
		  "discoveredby": ["Antoine Jerome Balard","Carl Jacob Löwig",]
       },
  
        "physical": {
          "color": "red-brown",
          "phase": "liquid",
          "density": [
		{value : '0.0031028', dim:'density', unit: 'gpercm3',name:'liquid'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '265.8', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '332.0', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '588 K, 10.34 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '10.571', dim:'molenergy', unit: 'molKJ',prefix:'(Br₂) '}
	,
          "heatofvaporization": 
		{value : '29.96', dim:'molenergy', unit: 'molKJ',prefix:'(Br₂) '}
	,
          "specificheat": 
		{value : '947.3', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '75.69', dim:'molheatcap', unit: 'jpermolk',prefix:'(Br₂) '}
	,],
          "vaporpressure": {'': {'1': '185','10': '201','100': '220','1000': '244','10000': '276','100000': '332',},}},
  
        "atomic": {
          "oxidationstates": "7, 5, 4, 3, 1, -1 (strongly acidic oxide)",
          "electronegativity": "2.96",
          "electronaffinity": 
		{value : '324.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '1139.9', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2103', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3470', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '120', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '94', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '115', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '120', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '185', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.122', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.0000000000000001', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '206', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '1.9', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.001132'}
	,
          "casregistrynumber": "7726-95-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Bromine',}
       }
  
            },
        
            "Kr": {
	    
        "general": {
          "name": "Krypton",
          "symbol": "Kr",
          "number": 36,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "4",
          "block": "p",
          "atomicweight": 
		{value : '83.798', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup>',
          "electronspershell": "2, 8, 18, 8",
          "yeardiscovered": "1898",
		  "discoveredby": ["Sir William Ramsay","Morris Travers",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.003749', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '2.413', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '115.79', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '119.93', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '115.775 K (-157°C), 73.2 kPa',
          "criticalpoint": '209.41 K, 5.50 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '1.64', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '9.08', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '248.05', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '59','10': '65','100': '74','1000': '120','10000': '','100000': '',},}},
  
        "atomic": {
          "oxidationstates": "2",
          "electronegativity": "3.00",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '1350.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2350.4', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3565', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '116', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '88', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '202', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "cubic face-centered",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.00943', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '220', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000427'}
	,
          "casregistrynumber": "7439-90-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Krypton',}
       }
  
            },
        
            "Rb": {
	    
        "general": {
          "name": "Rubidium",
          "symbol": "Rb",
          "number": 37,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "5",
          "block": "s",
          "atomicweight": 
		{value : '85.4678', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup>',
          "electronspershell": "2, 8, 18, 8, 1",
          "yeardiscovered": "1861",
		  "discoveredby": ["Robert Bunsen","Gustav Kirchhoff",]
       },
  
        "physical": {
          "color": "grey white",
          "phase": "solid",
          "density": [
		{value : '1.532', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '1.46', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '312.46', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '961', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '2093 K, 16 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.19', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '75.77', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '364', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '31.060', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '434','10': '486','100': '552','1000': '641','10000': '769','100000': '958',},}},
  
        "atomic": {
          "oxidationstates": "1 (strongly basic oxide)",
          "electronegativity": "0.82",
          "electronaffinity": 
		{value : '46.9', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "1",
          "ionizationenergies": [
		{value : '403', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2632.1', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3859.4', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '220', dim:'length', unit: 'pm',moe:9}
	,
          "calculatedradius": 
		{value : '265', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '235', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '248', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '303', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '58.2', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '8.3', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1300', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '0.216', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '0.3',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '2.5', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '2.4', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-17-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Rubidium',}
       }
  
            },
        
            "Sr": {
	    
        "general": {
          "name": "Strontium",
          "symbol": "Sr",
          "number": 38,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "5",
          "block": "s",
          "atomicweight": 
		{value : '87.62', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup>',
          "electronspershell": "2, 8, 18, 8, 2",
          "yeardiscovered": "1790",
		  "discoveredby": ["Adair Crawford",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '2.64', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '2.375', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1050', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1655', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.43', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '136.9', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '300', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.4', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '796','10': '882','100': '990','1000': '1139','10000': '1345','100000': '1646',},}},
  
        "atomic": {
          "oxidationstates": "2, 1 (strongly basic oxide)",
          "electronegativity": "0.95",
          "electronaffinity": 
		{value : '5.03', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '549.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1064.2', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '4138', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '195', dim:'length', unit: 'pm',moe:10}
	,
          "calculatedradius": 
		{value : '219', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '200', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '215', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '249', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '35.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '7.7', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '1.5',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": 
		{value : '6.1', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": null,
          "poissonratio": "0.28",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-24-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Strontium',}
       }
  
            },
        
            "Y": {
	    
        "general": {
          "name": "Yttrium",
          "symbol": "Y",
          "number": 39,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "3",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '88.90585', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 9, 2",
          "yeardiscovered": "1794",
		  "discoveredby": ["Johann Gadolin",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '4.472', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '4.24', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1799', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3609', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.3', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '11.42', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '365', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '298', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.53', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1883','10': '2075','100': '2320','1000': '2627','10000': '3036','100000': '3607',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (weakly basic oxide)",
          "electronegativity": "1.22",
          "electronaffinity": 
		{value : '29.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '600', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1180', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '1980', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '190', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '212', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '17.2', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.8', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3300', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '589', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '41.2', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '25.6', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '63.5', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.243",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-65-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Yttrium',}
       }
  
            },
        
            "Zr": {
	    
        "general": {
          "name": "Zirconium",
          "symbol": "Zr",
          "number": 40,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "4",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '91.224', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>2</sup>',
          "electronspershell": "2, 8, 18, 10, 2",
          "yeardiscovered": "1789",
		  "discoveredby": ["Martin Heinrich Klaproth",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '6.52', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.8', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2128', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4682', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.61', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '14', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '573', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '278', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.36', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2639','10': '2891','100': '3197','1000': '3575','10000': '4053','100000': '4678',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.33",
          "electronaffinity": 
		{value : '41.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '640.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1270', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2218', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '175', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '206', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '155', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '160', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal close-packed",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '22.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '2.4', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3800', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '650', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '5.0',
          "vickershardness": 
		{value : '903', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '91.1', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '33', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '88', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.34",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-67-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Zirconium',}
       }
  
            },
        
            "Nb": {
	    
        "general": {
          "name": "Niobium",
          "symbol": "Nb",
          "number": 41,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "5",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '92.90638', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup> 4d<sup>4</sup>',
          "electronspershell": "2, 8, 18, 12, 1",
          "yeardiscovered": "1801",
		  "discoveredby": ["Charles Hatchett",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '8.57', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2750', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5017', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '9.25', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '30', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '689.9', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '265', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.60', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2942','10': '3207','100': '3524','1000': '3910','10000': '4393','100000': '5013',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, -1 (mildly acidic oxide)",
          "electronegativity": "1.6",
          "electronaffinity": 
		{value : '86.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '652.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1380', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2416', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '164', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '198', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '146', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "cubic body-centered",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '53.7', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '6.7', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3480', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '736', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.0',
          "vickershardness": 
		{value : '1320', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '170', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '38', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '105', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.40",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-03-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Niobium',}
       }
  
            },
        
            "Mo": {
	    
        "general": {
          "name": "Molybdenum",
          "symbol": "Mo",
          "number": 42,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "6",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '95.94', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup> 4d<sup>5</sup>',
          "electronspershell": "2, 8, 18, 13, 1",
          "yeardiscovered": "1781",
		  "discoveredby": ["Carl William Scheele",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '10.28', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '9.33', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2896', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4912', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.915', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '37.48', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '598', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '251', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.06', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2742','10': '2994','100': '3312','1000': '3707','10000': '4212','100000': '4879',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, -1, -2 (strongly acidic oxide)",
          "electronegativity": "2.16",
          "electronaffinity": 
		{value : '71.9', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '684.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1560', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2618', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '154', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '190', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '139', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '138', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '20', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '1500', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '5.5',
          "vickershardness": 
		{value : '1530', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '230', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '126', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '329', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.31",
		  "reflectivity": 
		{value : '58',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7439-98-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Molybdenum',}
       }
  
            },
        
            "Tc": {
	    
        "general": {
          "name": "Technetium",
          "symbol": "Tc",
          "number": 43,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "7",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '98', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>5</sup>',
          "electronspershell": "2, 8, 18, 13, 2",
          "yeardiscovered": "1937",
		  "discoveredby": ["Carlo Perrier","Emilio Segre",]
       },
  
        "physical": {
          "color": "shiny gray",
          "phase": "solid",
          "density": [
		{value : '11', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2430', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4538', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '7.8', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '33.29', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '585.2', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '63', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.27', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2727','10': '2998','100': '3324','1000': '3726','10000': '4234','100000': '4894',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3, 2, 1, -1, -3 (strongly acidic oxide)",
          "electronegativity": "1.9",
          "electronaffinity": 
		{value : '53', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '702', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1470', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2850', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '147', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '183', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '136', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '50.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '5.0', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '16200', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-26-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Technetium',}
       }
  
            },
        
            "Ru": {
	    
        "general": {
          "name": "Ruthenium",
          "symbol": "Ru",
          "number": 44,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "8",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '101.07', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup> 4d<sup>7</sup>',
          "electronspershell": "2, 8, 18, 15, 1",
          "yeardiscovered": "1844",
		  "discoveredby": ["Karl Karlovich Klaus",]
       },
  
        "physical": {
          "color": "silvery white metallic",
          "phase": "solid",
          "density": [
		{value : '12.45', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '10.65', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2607', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4423', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.49', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '38.59', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '591.6', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '238', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.06', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2588','10': '2811','100': '3087','1000': '3424','10000': '3845','100000': '4388',},}},
  
        "atomic": {
          "oxidationstates": "8, 7, 6, 4, 3, 2, 1, -2 (mildly acidic oxide)",
          "electronegativity": "2.2",
          "electronaffinity": 
		{value : '101.3', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '710.2', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1620', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2747', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '146', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '178', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '130', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '134', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '117', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '14', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '5970', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '2160', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '220', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '173', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '447', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.30",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-18-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ruthenium',}
       }
  
            },
        
            "Rh": {
	    
        "general": {
          "name": "Rhodium",
          "symbol": "Rh",
          "number": 45,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "9",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '102.90550', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup> 4d<sup>8</sup>',
          "electronspershell": "2, 8, 18, 16, 1",
          "yeardiscovered": "1803",
		  "discoveredby": ["William Hyde Wollaston",]
       },
  
        "physical": {
          "color": "silvery white metallic",
          "phase": "solid",
          "density": [
		{value : '12.41', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '10.7', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2237', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3968', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '26.59', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '494', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '240', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.98', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2288','10': '2496','100': '2749','1000': '3063','10000': '3405','100000': '3997',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, -1 (amphoteric oxide)",
          "electronegativity": "2.28",
          "electronaffinity": 
		{value : '109.7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '719.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1740', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2997', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '142', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '173', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '134', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '150', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '23', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4700', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '1100', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.0',
          "vickershardness": 
		{value : '1246', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '275', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '150', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '380', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.26",
		  "reflectivity": 
		{value : '84',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-16-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Rhodium',}
       }
  
            },
        
            "Pd": {
	    
        "general": {
          "name": "Palladium",
          "symbol": "Pd",
          "number": 46,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "10",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '106.42', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 4d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 18",
          "yeardiscovered": "1803",
		  "discoveredby": ["William Hyde Wollaston",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '12.023', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '10.38', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1828.05', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3236', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '16.74', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '362', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '240', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.98', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1721','10': '1897','100': '2117','1000': '2395','10000': '2753','100000': '3234',},}},
  
        "atomic": {
          "oxidationstates": "6, 4, 2, 1, 0 (mildly basic oxide)",
          "electronegativity": "2.20",
          "electronaffinity": 
		{value : '53.7', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '804.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1870', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3177', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '169', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '137', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '163', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '71.8', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '10', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3070', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '310', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '4.75',
          "vickershardness": 
		{value : '461', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '180', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '44', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '121', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.39",
		  "reflectivity": 
		{value : '72',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-05-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Palladium',}
       }
  
            },
        
            "Ag": {
	    
        "general": {
          "name": "Silver",
          "symbol": "Ag",
          "number": 47,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "11",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '107.8682', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>1</sup> 4d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 18, 1",
          "yeardiscovered": "-3000",
		  "discoveredby": ["Asia","Europe",]
       },
  
        "physical": {
          "color": "white metal",
          "phase": "solid",
          "density": [
		{value : '10.49', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '9.320', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1234.93', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2435', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '11.28', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '250.58', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '235', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.350', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1283','10': '1413','100': '1575','1000': '1782','10000': '2055','100000': '2433',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.93",
          "electronaffinity": 
		{value : '125.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '731.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2070', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3361', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '145', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '165', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '160', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '144', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '172', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '429', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '62', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '206', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": 
		{value : '251', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '100', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '30', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '83', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.37",
		  "reflectivity": 
		{value : '97',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-22-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Silver',}
       }
  
            },
        
            "Cd": {
	    
        "general": {
          "name": "Cadmium",
          "symbol": "Cd",
          "number": 48,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "12",
          "period": "5",
          "block": "d",
          "atomicweight": 
		{value : '112.411', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 18, 2",
          "yeardiscovered": "1817",
		  "discoveredby": ["Friedrich Strohmeyer","Karl Samuel Leberecht Hermann",]
       },
  
        "physical": {
          "color": "silvery bluish-gray",
          "phase": "solid",
          "density": [
		{value : '8.65', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.996', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '594.22', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1040', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '6.21', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '99.87', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '230', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.020', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '530','10': '583','100': '654','1000': '745','10000': '867','100000': '1040',},}},
  
        "atomic": {
          "oxidationstates": "2, 1 (mildly basic oxide)",
          "electronegativity": "1.69",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '867.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1631.4', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3616', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '144', dim:'length', unit: 'pm',moe:9}
	,
          "calculatedradius": 
		{value : '161', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '155', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '151', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '158', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '96.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '14', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2310', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '203', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '42', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '19', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '50', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.30",
		  "reflectivity": 
		{value : '67',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-43-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Cadmium',}
       }
  
            },
        
            "In": {
	    
        "general": {
          "name": "Indium",
          "symbol": "In",
          "number": 49,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "13",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '114.818', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>1</sup>',
          "electronspershell": "2, 8, 18, 18, 3",
          "yeardiscovered": "1863",
		  "discoveredby": ["Ferdinand Reich","Hieronymus Theodor Richter",]
       },
  
        "physical": {
          "color": "silvery gray",
          "phase": "solid",
          "density": [
		{value : '7.31', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.02', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '429.7485', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2345', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '3.41', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '3.281', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '231.8', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '233', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.74', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1196','10': '1325','100': '1485','1000': '1690','10000': '1962','100000': '2340',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (amphoteric oxide)",
          "electronegativity": "1.78",
          "electronaffinity": 
		{value : '28.9', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '558.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1820.7', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2704', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '142', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '156', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '155', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '167', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '193', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "tetragonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '81.8', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '12', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1215', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '8.83', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.2',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '11', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-74-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Indium',}
       }
  
            },
        
            "Sn": {
	    
        "general": {
          "name": "Tin",
          "symbol": "Sn",
          "number": 50,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "14",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '118.710', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>2</sup>',
          "electronspershell": "2, 8, 18, 18, 4",
          "yeardiscovered": "-3000",
		  "discoveredby": ["Africa","Asia","Europe",]
       },
  
        "physical": {
          "color": "gray (alpha), white (beta)",
          "phase": "solid",
          "density": [
		{value : '5.769', dim:'density', unit: 'gpercm3',name:'gray'}
	,
		{value : '7.365', dim:'density', unit: 'gpercm3',name:'white'}
	,],
          "liquiddensityatmp": 
		{value : '6.99', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '505.08', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2875', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '3.72', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '7.03', dim:'molenergy', unit: 'molKJ',name:'white'}
	,
          "heatofvaporization": 
		{value : '296.1', dim:'molenergy', unit: 'molKJ',name:'white'}
	,
          "specificheat": 
		{value : '217', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.112', dim:'molheatcap', unit: 'jpermolk',name:'white'}
	,],
          "vaporpressure": {'': {'1': '1497','10': '1657','100': '1855','1000': '2107','10000': '2438','100000': '2893',},}},
  
        "atomic": {
          "oxidationstates": "4, 2, -4 (amphoteric oxide)",
          "electronegativity": "1.96",
          "electronaffinity": 
		{value : '107.3', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '708.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1411.8', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2943.0', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '217', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "(gray) diamond cubic, (white) tetragonal",
          "magneticordering": "(gray) diamagnetic, (white) paramagnetic",
          "thermalconductivity": [
		{value : '66.8', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '9.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '51', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '58', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '18', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '50', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.36",
		  "reflectivity": 
		{value : '54',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-31-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Tin',}
       }
  
            },
        
            "Sb": {
	    
        "general": {
          "name": "Antimony",
          "symbol": "Sb",
          "number": 51,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "15",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '121.760', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>3</sup>',
          "electronspershell": "2, 8, 18, 18, 5",
          "yeardiscovered": "-3000",
		  "discoveredby": ["Egypt",]
       },
  
        "physical": {
          "color": "bluish-white",
          "phase": "solid",
          "density": [
		{value : '6.697', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.53', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '903.78', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1860', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '19.79', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '193.43', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '207', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.23', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '807','10': '876','100': '1011','1000': '1219','10000': '1491','100000': '1858',},}},
  
        "atomic": {
          "oxidationstates": "5, 3, -3",
          "electronegativity": "2.05",
          "electronaffinity": 
		{value : '103.2', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '834', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1594.9', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2440', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '133', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '206', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "trigonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '24.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '2.5', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3420', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '294', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '3.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '42', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '20', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '55', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": 
		{value : '55',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-36-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Antimony',}
       }
  
            },
        
            "Te": {
	    
        "general": {
          "name": "Tellurium",
          "symbol": "Te",
          "number": 52,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "16",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '127.60', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>4</sup>',
          "electronspershell": "2, 8, 18, 18, 6",
          "yeardiscovered": "1783",
		  "discoveredby": ["Franz Joseph Müller von Reichenstein",]
       },
  
        "physical": {
          "color": "silvery gray",
          "phase": "solid",
          "density": [
		{value : '6.24', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.70', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '722.66', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1261', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '17.49', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '114.1', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '201', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.73', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '','10': '','100': '775','1000': '888','10000': '1042','100000': '1266',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 2, -2 (mildly acidic oxide)",
          "electronegativity": "2.1",
          "electronaffinity": 
		{value : '190.2', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '869.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1790', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2698', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '138', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '123', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '206', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '2.675', dim:'thermalconduct', unit: 'wpermperk',moe:0.705}
	,],
          "electricalconductivity": 
		{value : '0.010', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2610', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '180', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.25',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '65', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '16', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '43', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": 
		{value : '50',symbol:'%'}
	,
		  "refractiveindex": 
		{value : '1.000991'}
	,
          "casregistrynumber": "13494-80-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Tellurium',}
       }
  
            },
        
            "I": {
	    
        "general": {
          "name": "Iodine",
          "symbol": "I",
          "number": 53,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '126.90447', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>5</sup>',
          "electronspershell": "2, 8, 18, 18, 7",
          "yeardiscovered": "1811",
		  "discoveredby": ["Bernard Courtois",]
       },
  
        "physical": {
          "color": "bluish-black",
          "phase": "solid",
          "density": [
		{value : '4.933', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '386.85', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '457.4', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '386.65 K (113°C), 12.1 kPa',
          "criticalpoint": '819 K, 11.7 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '15.52', dim:'molenergy', unit: 'molKJ',prefix:'(I₂) '}
	,
          "heatofvaporization": 
		{value : '41.57', dim:'molenergy', unit: 'molKJ',prefix:'(I₂) '}
	,
          "specificheat": 
		{value : '429', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '54.44', dim:'molheatcap', unit: 'jpermolk',prefix:'(I₂) '}
	,],
          "vaporpressure": {'': {'1': '260','10': '282','100': '309','1000': '342','10000': '381','100000': '457',},}},
  
        "atomic": {
          "oxidationstates": "7, 5, 3, 1, -1 (strongly acidic oxide)",
          "electronegativity": "2.66",
          "electronaffinity": 
		{value : '295.2', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '1008.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1845.9', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3180', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '139', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": 
		{value : '115', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '140', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '198', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '0.449', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.0000000000001', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '7.7', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7553-56-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Iodine',}
       }
  
            },
        
            "Xe": {
	    
        "general": {
          "name": "Xenon",
          "symbol": "Xe",
          "number": 54,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "5",
          "block": "p",
          "atomicweight": 
		{value : '131.293', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Kr] 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup>',
          "electronspershell": "2, 8, 18, 18, 8",
          "yeardiscovered": "1898",
		  "discoveredby": ["Sir William Ramsay","Morris W. Travers",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.005894', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '3.057', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '161.4', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '165.03', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '161.405 K (-112°C), 81.6 kPa',
          "criticalpoint": '289.77 K, 5.841 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.27', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '12.64', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '158.32', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '83','10': '92','100': '103','1000': '117','10000': '137','100000': '165',},}},
  
        "atomic": {
          "oxidationstates": "8, 6, 4, 2, 1, 0 (weakly acidic oxide)",
          "electronegativity": "2.6",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '1170.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2046.4', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3099.4', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '140', dim:'length', unit: 'pm',moe:9}
	,
          "calculatedradius": 
		{value : '108', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '216', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamegnetic",
          "thermalconductivity": [
		{value : '0.00565', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": 
		{value : '169', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": 
		{value : '1.000702'}
	,
          "casregistrynumber": "7440-63-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Xenon',}
       }
  
            },
        
            "Cs": {
	    
        "general": {
          "name": "Caesium",
          "symbol": "Cs",
          "number": 55,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "6",
          "block": "s",
          "atomicweight": 
		{value : '132.9054519', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>1</sup>',
          "electronspershell": "2, 8, 18, 18, 8, 1",
          "yeardiscovered": "1860",
		  "discoveredby": ["Gustav Kirchhoff","Robert Bunsen",]
       },
  
        "physical": {
          "color": "silvery gold",
          "phase": "solid",
          "density": [
		{value : '1.93', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '1.843', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '301.59', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '944', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '1938 K, 9.4 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.09', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '63.9', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '242', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '32.210', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '418','10': '469','100': '534','1000': '623','10000': '750','100000': '940',},}},
  
        "atomic": {
          "oxidationstates": "1 (strongly basic oxide)",
          "electronegativity": "0.79",
          "electronaffinity": 
		{value : '45.5', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '375.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '2234.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3400', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '244', dim:'length', unit: 'pm',moe:11}
	,
          "calculatedradius": 
		{value : '298', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '260', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '265', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '343', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '35.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '5.0', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '0.14', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '0.2',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '1.6', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": null,
          "youngmodulus": 
		{value : '1.7', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-46-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Caesium',}
       }
  
            },
        
            "Ba": {
	    
        "general": {
          "name": "Barium",
          "symbol": "Ba",
          "number": 56,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "6",
          "block": "s",
          "atomicweight": 
		{value : '137.33', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup>',
          "electronspershell": "2, 8, 18, 18, 8, 2",
          "yeardiscovered": "1808",
		  "discoveredby": ["Sir Humphrey Davy",]
       },
  
        "physical": {
          "color": "silvery gray",
          "phase": "solid",
          "density": [
		{value : '3.51', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '3.338', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1000', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2170', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.12', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '140.3', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '205', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '28.07', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '911','10': '1038','100': '1185','1000': '1388','10000': '1686','100000': '2170',},}},
  
        "atomic": {
          "oxidationstates": "2 (strongly basic oxide)",
          "electronegativity": "0.89",
          "electronaffinity": 
		{value : '13.95', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '502.9', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '965.2', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3600', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '215', dim:'length', unit: 'pm',moe:11}
	,
          "calculatedradius": 
		{value : '253', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '215', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '222', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '268', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '18.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '2.9', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1620', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '1.25',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '9.6', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '4.9', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '13', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-39-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Barium',}
       }
  
            },
        
            "Hf": {
	    
        "general": {
          "name": "Hafnium",
          "symbol": "Hf",
          "number": 72,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "4",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '178.49', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 10, 2",
          "yeardiscovered": "1923",
		  "discoveredby": ["Dirk Coster","George Charles von Hevesy",]
       },
  
        "physical": {
          "color": "metallic gray",
          "phase": "solid",
          "density": [
		{value : '13.31', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '12', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2506', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4876', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.128', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '27.2', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '571', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '144', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.73', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2689','10': '2954','100': '3277','1000': '3679','10000': '4194','100000': '4876',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2 (amphoteric oxide)",
          "electronegativity": "1.3",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '658.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1440', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2250', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '157', dim:'length', unit: 'pm',moe:10}
	,
          "calculatedradius": 
		{value : '208', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '155', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '159', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '23.0', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '3.3', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3010', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '1700', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '5.5',
          "vickershardness": 
		{value : '1760', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '110', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '30', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '78', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.37",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-58-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Hafnium',}
       }
  
            },
        
            "Ta": {
	    
        "general": {
          "name": "Tantalum",
          "symbol": "Ta",
          "number": 73,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "5",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '180.94788', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>3</sup>',
          "electronspershell": "2, 8, 18, 32, 11, 2",
          "yeardiscovered": "1802",
		  "discoveredby": ["Anders Ekeberg",]
       },
  
        "physical": {
          "color": "gray blue",
          "phase": "solid",
          "density": [
		{value : '16.69', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '15', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '3290', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5731', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '4.47', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '36.57', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '732.8', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '140', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.36', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '3297','10': '3597','100': '3957','1000': '4395','10000': '4939','100000': '5634',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, -1 (mildly acidic oxide)",
          "electronegativity": "1.5",
          "electronaffinity": 
		{value : '31', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '761', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1500', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '170', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '200', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '145', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '146', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "(alpha) body-centered cubic, (beta) tetragonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '57.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '7.7', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3400', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '800', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.5',
          "vickershardness": 
		{value : '873', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '200', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '69', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '186', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.34",
		  "reflectivity": 
		{value : '78',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-25-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Tantalum',}
       }
  
            },
        
            "W": {
	    
        "general": {
          "name": "Tungsten",
          "symbol": "W",
          "number": 74,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "6",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '183.84', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>4</sup>',
          "electronspershell": "2, 8, 18, 32, 12, 2",
          "yeardiscovered": "1783",
		  "discoveredby": ["Fausto Elhuyar","Juan José Elhuyar",]
       },
  
        "physical": {
          "color": "grayish white",
          "phase": "solid",
          "density": [
		{value : '19.25', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '17.6', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '3695', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5828', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.015', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '35.3', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '806.7', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '132', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.27', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '3477','10': '3773','100': '4137','1000': '4579','10000': '5127','100000': '5823',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, 0, -1, -2 (mildly acidic oxide)",
          "electronegativity": "2.36",
          "electronaffinity": 
		{value : '78.6', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '770', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1700', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '162', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '193', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '139', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '173', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '20', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '2570', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '7.5',
          "vickershardness": 
		{value : '3430', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '310', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '161', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '411', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.28",
		  "reflectivity": 
		{value : '62',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-33-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Tungsten',}
       }
  
            },
        
            "Re": {
	    
        "general": {
          "name": "Rhenium",
          "symbol": "Re",
          "number": 75,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "7",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '186.207', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>5</sup>',
          "electronspershell": "2, 8, 18, 32, 13, 2",
          "yeardiscovered": "1925",
		  "discoveredby": ["Walter Noddack","Ida Tacke","Otto Berg",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '21.02', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '18.9', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '3459', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5869', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.7', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '60.43', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '704', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '137', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.48', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '3303','10': '3614','100': '4009','1000': '4500','10000': '5127','100000': '5954',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3, 2, 1, 0, -1 (mildly acidic oxide)",
          "electronegativity": "1.9",
          "electronaffinity": 
		{value : '14.5', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '760', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1260', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2510', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '151', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '188', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '137', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '48.0', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '5.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4700', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '1320', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '7.0',
          "vickershardness": 
		{value : '2450', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '370', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '178', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '463', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.30",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-15-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Rhenium',}
       }
  
            },
        
            "Os": {
	    
        "general": {
          "name": "Osmium",
          "symbol": "Os",
          "number": 76,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "8",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '190.23', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>6</sup>',
          "electronspershell": "2, 8, 18, 32, 14, 2",
          "yeardiscovered": "1803",
		  "discoveredby": ["Smithson Tennant","William Hyde Wollaston",]
       },
  
        "physical": {
          "color": "bluish-white",
          "phase": "solid",
          "density": [
		{value : '22.59', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '20', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '3306', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5285', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.66', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '57.85', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '738', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '130', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '24.7', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '3160','10': '3423','100': '3751','1000': '4148','10000': '4638','100000': '5256',},}},
  
        "atomic": {
          "oxidationstates": "8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2 (mildly acidic oxide)",
          "electronegativity": "2.2",
          "electronaffinity": 
		{value : '106.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '840', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1600', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '144', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '130', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '87.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '12', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4940', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '3920', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '7.0',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '462', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '222', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": null,
          "poissonratio": "0.25",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-04-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Osmium',}
       }
  
            },
        
            "Ir": {
	    
        "general": {
          "name": "Iridium",
          "symbol": "Ir",
          "number": 77,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "9",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '192.217', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>7</sup>',
          "electronspershell": "2, 8, 18, 32, 15, 2",
          "yeardiscovered": "1803",
		  "discoveredby": ["Smithson Tennant","Antoine François comte de Fourcroy","Hippolyte-Victor Collet-Descotils",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '22.56', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '19', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2739', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4701', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.11', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '41.12', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '563', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '131', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.10', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2713','10': '2957','100': '3252','1000': '3614','10000': '4069','100000': '4659',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3, 2, 1, 0, -1, -3",
          "electronegativity": "2.20",
          "electronaffinity": 
		{value : '151', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '880', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1600', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '141', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '136', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '147', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '21', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '4825', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '1670', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '6.5',
          "vickershardness": 
		{value : '1760', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '320', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '210', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '528', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.26",
		  "reflectivity": 
		{value : '78',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7439-88-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Iridium',}
       }
  
            },
        
            "Pt": {
	    
        "general": {
          "name": "Platinum",
          "symbol": "Pt",
          "number": 78,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "10",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '195.084', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>9</sup>',
          "electronspershell": "2, 8, 18, 32, 17, 1",
          "yeardiscovered": "1735",
		  "discoveredby": ["Antonio de Ulloa",]
       },
  
        "physical": {
          "color": "grayish white",
          "phase": "solid",
          "density": [
		{value : '21.45', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '19.77', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2041.4', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4098', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '22.17', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '469', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '133', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.86', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2330','10': '2550','100': '2815','1000': '3143','10000': '3556','100000': '4094',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3 , 2, 1, -1, -2 (mildly basic oxide)",
          "electronegativity": "2.28",
          "electronaffinity": 
		{value : '205.3', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '870', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1791', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '136', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '177', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '139', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '175', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '71.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '9.4', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '392', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '4-4.5',
          "vickershardness": 
		{value : '549', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '230', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '61', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '168', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.38",
		  "reflectivity": 
		{value : '73',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-06-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Platinum',}
       }
  
            },
        
            "Au": {
	    
        "general": {
          "name": "Gold",
          "symbol": "Au",
          "number": 79,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "11",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '196.966569', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 1",
          "yeardiscovered": "-2500",
		  "discoveredby": ["Africa","Europe","Americas","Asia",]
       },
  
        "physical": {
          "color": "metallic yellow",
          "phase": "solid",
          "density": [
		{value : '19.30', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '17.31', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1337.33', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3129', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '12.55', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '324', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '129.1', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.418', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1646','10': '1814','100': '2021','1000': '2281','10000': '2620','100000': '3078',},}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2, 1, -1 (amphoteric oxide)",
          "electronegativity": "2.54",
          "electronaffinity": 
		{value : '222.8', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '890.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1980', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '136', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '174', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '144', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '166', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "lattice face centered cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '318', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '45', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2030', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '25', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": 
		{value : '216', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '180', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '27', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '79', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.44",
		  "reflectivity": 
		{value : '95',symbol:'%'}
	,
		  "refractiveindex": null,
          "casregistrynumber": "7440-57-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Gold',}
       }
  
            },
        
            "Hg": {
	    
        "general": {
          "name": "Mercury",
          "symbol": "Hg",
          "number": 80,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "12",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '200.59', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 2",
          "yeardiscovered": "-1500",
		  "discoveredby": ["China","Greek","Maya",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "liquid",
          "density": [
		{value : '13.534', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '234.32', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '629.88', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '1750 K, 172.00 MPa',
		  "supercontemp": 
		{value : '3.95', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '2.29', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '59.11', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '139.5', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.983', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '315','10': '350','100': '393','1000': '449','10000': '523','100000': '629',},}},
  
        "atomic": {
          "oxidationstates": "4, 2, 1 (mildly basic oxide)",
          "electronegativity": "2.00",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "2",
          "ionizationenergies": [
		{value : '1007.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1810', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3300', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '132', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '171', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '150', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '151', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '155', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "rhombohedral",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '8.30', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.0', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1451.4', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": 
		{value : '73',symbol:'%'}
	,
		  "refractiveindex": 
		{value : '1.000933'}
	,
          "casregistrynumber": "7439-97-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Mercury_(element)',}
       }
  
            },
        
            "Tl": {
	    
        "general": {
          "name": "Thallium",
          "symbol": "Tl",
          "number": 81,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "13",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '204.3833', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 3",
          "yeardiscovered": "1861",
		  "discoveredby": ["Sir William Crookes","Claude Auguste Lamy",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '11.85', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '11.22', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '577', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1746', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '2.38', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '4.14', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '165', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '129', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.32', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '882','10': '977','100': '1097','1000': '1252','10000': '1461','100000': '1758',},}},
  
        "atomic": {
          "oxidationstates": "3, 1 (mildly basic oxide)",
          "electronegativity": "1.62",
          "electronaffinity": 
		{value : '19.2', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '589.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1971', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2878', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '145', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '156', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '190', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '170', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '196', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '46.1', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '6.7', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '818', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '26.4', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.2',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '43', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '2.8', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '8', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.45",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-28-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Thallium',}
       }
  
            },
        
            "Pb": {
	    
        "general": {
          "name": "Lead",
          "symbol": "Pb",
          "number": 82,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "14",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '207.2', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 4",
          "yeardiscovered": "-4000",
		  "discoveredby": ["Europe",]
       },
  
        "physical": {
          "color": "metallic gray",
          "phase": "solid",
          "density": [
		{value : '11.34', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '10.66', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '600.61', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2022', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '7.2', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '4.77', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '179.5', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '127', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.650', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '978','10': '1088','100': '1229','1000': '1412','10000': '1660','100000': '2027',},}},
  
        "atomic": {
          "oxidationstates": "4, 2 (Amphoteric oxide)",
          "electronegativity": "2.33",
          "electronaffinity": 
		{value : '35.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '715.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1450.5', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '3081.5', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '146', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '154', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '202', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '35.3', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '4.8', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '38.3', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '1.5',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '46', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '5.6', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '16', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.44",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-92-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Lead',}
       }
  
            },
        
            "Bi": {
	    
        "general": {
          "name": "Bismuth",
          "symbol": "Bi",
          "number": 83,
          "catagory": {
              "name":"Post Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "15",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '208.98040', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>3</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 5",
          "yeardiscovered": "1400",
		  "discoveredby": ["Europe","Incas",]
       },
  
        "physical": {
          "color": "white",
          "phase": "solid",
          "density": [
		{value : '9.78', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '10.05', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '544.7', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1837', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '11.30', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '151', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '122', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '25.52', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '941','10': '1041','100': '1165','1000': '1325','10000': '1538','100000': '1835',},}},
  
        "atomic": {
          "oxidationstates": "5, 3 (mildly acidic oxide)",
          "electronegativity": "2.02",
          "electronaffinity": 
		{value : '91.2', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "5",
          "ionizationenergies": [
		{value : '703', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1610', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2466', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '148', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '143', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '160', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '156', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '207', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "trigonal",
          "magneticordering": "diamagnetic",
          "thermalconductivity": [
		{value : '7.97', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.77', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1790', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '94.2', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.25',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '31', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '12', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '32', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.33",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-69-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Bismuth',}
       }
  
            },
        
            "Po": {
	    
        "general": {
          "name": "Polonium",
          "symbol": "Po",
          "number": 84,
          "catagory": {
              "name":"Metalloid", 
              "key": "metalloid"
          },
          "group": "16",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '209', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>4</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 6",
          "yeardiscovered": "1898",
		  "discoveredby": ["Pierre Curie","Marie Curie",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '9.196', dim:'density', unit: 'gpercm3',name:'alpha'}
	,
		{value : '9.398', dim:'density', unit: 'gpercm3',name:'beta'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '527', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1235', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '13', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '102.91', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [
		{value : '26.4', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '','10': '','100': '','1000': '846','10000': '1003','100000': '1236',},}},
  
        "atomic": {
          "oxidationstates": "6, 4, 2, -2 (amphoteric oxide)",
          "electronegativity": "2.0",
          "electronaffinity": 
		{value : '183.3', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '812.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '140', dim:'length', unit: 'pm',moe:4}
	,
          "calculatedradius": 
		{value : '135', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '190', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '168', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '197', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "cubic",
          "magneticordering": "nonmagnetic",
          "thermalconductivity": [],
          "electricalconductivity": 
		{value : '2.3', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-08-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Polonium',}
       }
  
            },
        
            "At": {
	    
        "general": {
          "name": "Astatine",
          "symbol": "At",
          "number": 85,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '210', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>5</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 7",
          "yeardiscovered": "1940",
		  "discoveredby": ["Dale R. Corson","Kenneth Ross MacKenzie","Emilio Segrè",]
       },
  
        "physical": {
          "color": "black",
          "phase": "solid",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '575', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '610', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": 
		{value : '40', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {'': {'1': '361','10': '392','100': '429','1000': '475','10000': '531','100000': '607',},}},
  
        "atomic": {
          "oxidationstates": "5, 3, 1, -1",
          "electronegativity": "2.2",
          "electronaffinity": 
		{value : '270.1', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "7",
          "ionizationenergies": [
		{value : '890', dim:'molenergy', unit: 'molKJ',moe:40,name:'1st'}
	,],
          "covalentradius": 
		{value : '150', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '127', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '202', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [
		{value : '1.7', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-68-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Astatine',}
       }
  
            },
        
            "Rn": {
	    
        "general": {
          "name": "Radon",
          "symbol": "Rn",
          "number": 86,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "6",
          "block": "p",
          "atomicweight": 
		{value : '222', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 8",
          "yeardiscovered": "1900",
		  "discoveredby": ["Friedrich Ernst Dorn",]
       },
  
        "physical": {
          "color": "colorless",
          "phase": "gas",
          "density": [
		{value : '0.00973', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": 
		{value : '4.4', dim:'density', unit: 'gpercm3'}
	,
          "meltingpoint": [
		{value : '202.0', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '211.3', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '377 K, 6.28 MPa',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '3.247', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '18.10', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '93.65', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '20.786', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '110','10': '121','100': '134','1000': '152','10000': '176','100000': '211',},}},
  
        "atomic": {
          "oxidationstates": "2",
          "electronegativity": "2.2",
          "electronaffinity": 
		{value : '0', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "6",
          "ionizationenergies": [
		{value : '1037', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '150', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '120', dim:'length', unit: 'pm'}
	,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '220', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "non-magnetic",
          "thermalconductivity": [
		{value : '0.00361', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "10043-92-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Radon',}
       }
  
            },
        
            "Fr": {
	    
        "general": {
          "name": "Francium",
          "symbol": "Fr",
          "number": 87,
          "catagory": {
              "name":"Alkali Metal", 
              "key": "alkali_metal"
          },
          "group": "1",
          "period": "7",
          "block": "s",
          "atomicweight": 
		{value : '223', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 8, 1",
          "yeardiscovered": "1939",
		  "discoveredby": ["Marguerite Perey",]
       },
  
        "physical": {
          "color": "metallic",
          "phase": "solid",
          "density": [
		{value : '1.87', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '300', dim:'temperature', unit: 'degK',prefix:'≈'}
	,],
          "boilingpoint": 
		{value : '871', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '65', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {'': {'1': '404','10': '454','100': '519','1000': '608','10000': '738','100000': '946',},}},
  
        "atomic": {
          "oxidationstates": "1 (strongly basic oxide)",
          "electronegativity": "0.7",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '380', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '260', dim:'length', unit: 'pm'}
	,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '348', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body centered cubic ",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '15', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-73-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Francium',}
       }
  
            },
        
            "Ra": {
	    
        "general": {
          "name": "Radium",
          "symbol": "Ra",
          "number": 88,
          "catagory": {
              "name":"Alkaline Earth Metal", 
              "key": "alkaline_earth_metal"
          },
          "group": "2",
          "period": "7",
          "block": "s",
          "atomicweight": 
		{value : '226.03', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 8, 2",
          "yeardiscovered": "1898",
		  "discoveredby": ["Marie Skłodowska-Curie","Pierre Curie",]
       },
  
        "physical": {
          "color": "silvery white metallic",
          "phase": "solid",
          "density": [
		{value : '5.5', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '973', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2010', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '8.5', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '113', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '92.0', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [],
          "vaporpressure": {'': {'1': '819','10': '906','100': '1037','1000': '1209','10000': '1446','100000': '1799',},}},
  
        "atomic": {
          "oxidationstates": "2 (strongly basic oxide)",
          "electronegativity": "0.9",
          "electronaffinity": null,
          "valence": "2",
          "ionizationenergies": [
		{value : '509.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '979.0', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '221', dim:'length', unit: 'pm',moe:2}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '215', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": 
		{value : '283', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "nonmagnetic",
          "thermalconductivity": [
		{value : '18.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.0', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-14-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Radium',}
       }
  
            },
        
            "Rf": {
	    
        "general": {
          "name": "Rutherfordium",
          "symbol": "Rf",
          "number": 104,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "4",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '267', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 10, 2",
          "yeardiscovered": "1964",
		  "discoveredby": ["Joint Institute for Nuclear Research at Dubna","University of California, Berkeley",]
       },
  
        "physical": {
          "color": "",
          "phase": "solid",
          "density": [
		{value : '23', dim:'density', unit: 'gpercm3',prefix:'≈'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2400', dim:'temperature', unit: 'degK',prefix:'≈'}
	,],
          "boilingpoint": 
		{value : '5800', dim:'temperature', unit: 'degK',prefix:'≈'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "(predicted) 4",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '490', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "53850-36-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Rutherfordium',}
       }
  
            },
        
            "Db": {
	    
        "general": {
          "name": "Dubnium",
          "symbol": "Db",
          "number": 105,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "5",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '268', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>3</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 11, 2",
          "yeardiscovered": "1967",
		  "discoveredby": ["Joint Institute for Nuclear Research at Dubna","University of California, Berkeley",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "5",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "5",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "53850-35-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Dubnium',}
       }
  
            },
        
            "Sg": {
	    
        "general": {
          "name": "Seaborgium",
          "symbol": "Sg",
          "number": 106,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "6",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '269', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>4</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 12, 2",
          "yeardiscovered": "1974",
		  "discoveredby": ["Albert Ghiorso","University of California, Berkeley",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "6",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "6",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54038-81-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Seaborgium',}
       }
  
            },
        
            "Bh": {
	    
        "general": {
          "name": "Bohrium",
          "symbol": "Bh",
          "number": 107,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "7",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '270', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>5</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 13, 2",
          "yeardiscovered": "1981",
		  "discoveredby": ["Peter Armbruster","Gottfried Münzenberg","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "7",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "7",
          "ionizationenergies": [
		{value : '740', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1690', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2570', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54037-14-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Bohrium',}
       }
  
            },
        
            "Hs": {
	    
        "general": {
          "name": "Hassium",
          "symbol": "Hs",
          "number": 108,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "8",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '269', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>6</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 14, 2",
          "yeardiscovered": "1984",
		  "discoveredby": ["Peter Armbruster","Gottfried Münzenberg","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "8",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54037-57-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Hassium',}
       }
  
            },
        
            "Mt": {
	    
        "general": {
          "name": "Meitnerium",
          "symbol": "Mt",
          "number": 109,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "9",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '278', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>7</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 15, 2",
          "yeardiscovered": "1982",
		  "discoveredby": ["Peter Armbruster","Gottfried Münzenberg","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54038-01-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Meitnerium',}
       }
  
            },
        
            "Ds": {
	    
        "general": {
          "name": "Darmstadtium",
          "symbol": "Ds",
          "number": 110,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "10",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '281', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>1</sup> 5f<sup>14</sup> 6d<sup>9</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 16, 2",
          "yeardiscovered": "1994",
		  "discoveredby": ["Peter Armbruster","Gottfried Münzenberg","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54083-77-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Darmstadtium',}
       }
  
            },
        
            "Rg": {
	    
        "general": {
          "name": "Roentgenium",
          "symbol": "Rg",
          "number": 111,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "11",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '281', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>1</sup> 5f<sup>14</sup> 6d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 17, 2",
          "yeardiscovered": "1994",
		  "discoveredby": ["Sigurd Hofmann","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54386-24-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Roentgenium',}
       }
  
            },
        
            "Cn": {
	    
        "general": {
          "name": "Copernicium",
          "symbol": "Cn",
          "number": 112,
          "catagory": {
              "name":"Transition Metal", 
              "key": "transition_metal"
          },
          "group": "12",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '285', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 2",
          "yeardiscovered": "1996",
		  "discoveredby": ["Sigurd Hofmann","Victor Ninov","Institute for Heavy Ion Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54084-26-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Copernicium',}
       }
  
            },
        
            "Nh": {
	    
        "general": {
          "name": "Nihonium",
          "symbol": "Nh",
          "number": 113,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "13",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '286', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 3",
          "yeardiscovered": "2004",
		  "discoveredby": ["Joint Institute for Nuclear Research","Lawrence Livermore National Laboratory",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54084-70-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununtrium',}
       }
  
            },
        
            "Fl": {
	    
        "general": {
          "name": "Flerovium",
          "symbol": "Fl",
          "number": 114,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "14",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '289', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 4",
          "yeardiscovered": "1998",
		  "discoveredby": ["Joint Institute for Nuclear Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54085-16-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununquadium',}
       }
  
            },
        
            "Mc": {
	    
        "general": {
          "name": "Moscovium",
          "symbol": "Mc",
          "number": 115,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "15",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '288', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>3</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 5",
          "yeardiscovered": "2004",
		  "discoveredby": ["Joint Institute for Nuclear Research","Lawrence Livermore National Laboratory",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54085-64-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununpentium',}
       }
  
            },
        
            "Lv": {
	    
        "general": {
          "name": "Livermorium",
          "symbol": "Lv",
          "number": 116,
          "catagory": {
              "name":"Post-Transition Metal", 
              "key": "post_transition_metal"
          },
          "group": "16",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '293', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>4</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 6",
          "yeardiscovered": "2000",
		  "discoveredby": ["Joint Institute for Nuclear Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54100-71-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununhexium',}
       }
  
            },
        
            "Ts": {
	    
        "general": {
          "name": "Tennessine",
          "symbol": "Ts",
          "number": 117,
          "catagory": {
              "name":"Halogen", 
              "key": "halogen"
          },
          "group": "17",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '294', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>5</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 7",
          "yeardiscovered": "2010",
		  "discoveredby": ["Joint Institute for Nuclear Research",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54101-14-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununseptium',}
       }
  
            },
        
            "Og": {
	    
        "general": {
          "name": "Oganesson",
          "symbol": "Og",
          "number": 118,
          "catagory": {
              "name":"Noble Gases", 
              "key": "noble_gases"
          },
          "group": "18",
          "period": "7",
          "block": "p",
          "atomicweight": 
		{value : '294', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>6</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 18, 8",
          "yeardiscovered": "2006",
		  "discoveredby": ["Joint Institute for Nuclear Research","Lawrence Livermore National Laboratory","Yuri Oganessian",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "",
          "ionizationenergies": [],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "54144-19-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ununoctium',}
       }
  
            },
        
            "La": {
	    
        "general": {
          "name": "Lanthanum",
          "symbol": "La",
          "number": 57,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '138.90547', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 5d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 18, 9, 2",
          "yeardiscovered": "1839",
		  "discoveredby": ["Carl Gustav Mosander",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '6.162', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.94', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1193', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3737', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '6', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '6.20', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '402.1', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '195', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.11', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2005','10': '2208','100': '2458','1000': '2772','10000': '3178','100000': '3726',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (strongly basic oxide)",
          "electronegativity": "1.10",
          "electronaffinity": 
		{value : '48', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '538.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1067', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '1850.3', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '207', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '195', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '187', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '13.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2475', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '363', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": 
		{value : '491', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '27.9', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '14.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '36.6', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.280",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-91-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Lanthanum',}
       }
  
            },
        
            "Ce": {
	    
        "general": {
          "name": "Cerium",
          "symbol": "Ce",
          "number": 58,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '140.116', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>1</sup> 5d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 19, 9, 2",
          "yeardiscovered": "1803",
		  "discoveredby": ["Wilhelm Hisinger","Jöns Jacob Berzelius","Martin Heinrich Klaproth",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '6.770', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.55', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1068', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3716', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.022', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '5.46', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '398', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '192', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.94', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1992','10': '2194','100': '2442','1000': '2754','10000': '3159','100000': '3705',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2 (mildly basic oxide)",
          "electronegativity": "1.12",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '534.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1050', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '1949', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '204', dim:'length', unit: 'pm',moe:9}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '181.8', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '11.3', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.4', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2100', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '412', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '2.5',
          "vickershardness": 
		{value : '270', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '21.5', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '13.5', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '33.6', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.24",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-45-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Cerium',}
       }
  
            },
        
            "Pr": {
	    
        "general": {
          "name": "Praseodymium",
          "symbol": "Pr",
          "number": 59,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '140.90765', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>3</sup>',
          "electronspershell": "2, 8, 18, 21, 8, 2",
          "yeardiscovered": "1885",
		  "discoveredby": ["Carl Auer Freiherr von Welsbach",]
       },
  
        "physical": {
          "color": "grayish white",
          "phase": "solid",
          "density": [
		{value : '6.77', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.50', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1208', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3793', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '6.89', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '331', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '193', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.20', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1771','10': '1973','100': '2227','1000': '2571','10000': '3054','100000': '3779',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2 (mildly basic oxide)",
          "electronegativity": "1.13",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '527', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1020', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2086', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '203', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '247', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '182', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '12.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.4', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2280', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '481', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '400', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '28.8', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '14.8', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '37.3', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.281",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-10-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Praseodymium',}
       }
  
            },
        
            "Nd": {
	    
        "general": {
          "name": "Neodymium",
          "symbol": "Nd",
          "number": 60,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '144.242', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>4</sup>',
          "electronspershell": "2, 8, 18, 22, 8, 2",
          "yeardiscovered": "1885",
		  "discoveredby": ["Carl Auer Freiherr von Welsbach",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '7.01', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.89', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1297', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3347', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.14', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '289', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '190', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.45', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1595','10': '1774','100': '1998','1000': '2296','10000': '2715','100000': '3336',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (mildly basic oxide)",
          "electronegativity": "1.14",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '533.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1040', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2130', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '201', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '206', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '181', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic, antiferromagnetic below 20 K",
          "thermalconductivity": [
		{value : '16.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2330', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '265', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '343', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '31.8', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '16.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '41.4', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.281",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-00-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Neodymium',}
       }
  
            },
        
            "Pm": {
	    
        "general": {
          "name": "Promethium",
          "symbol": "Pm",
          "number": 61,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '145', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>5</sup>',
          "electronspershell": "2, 8, 18, 23, 8, 2",
          "yeardiscovered": "1945",
		  "discoveredby": ["Jacob Akiba Marinsky","Lawrence Elgin Glendenin","Charles DuBois Coryell",]
       },
  
        "physical": {
          "color": "metallic",
          "phase": "solid",
          "density": [
		{value : '7.26', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1315', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3273', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.13', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '289', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3 (mildly basic oxide)",
          "electronegativity": "",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '540', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1050', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2150', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '199', dim:'length', unit: 'pm'}
	,
          "calculatedradius": 
		{value : '205', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '183', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '17.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.3', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '33', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '18', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '46', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.28",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-12-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Promethium',}
       }
  
            },
        
            "Sm": {
	    
        "general": {
          "name": "Samarium",
          "symbol": "Sm",
          "number": 62,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '150.36', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>6</sup>',
          "electronspershell": "2, 8, 18, 24, 8, 2",
          "yeardiscovered": "1879",
		  "discoveredby": ["Paul Émile Lecoq de Boisbaudran",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '7.52', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.16', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1345', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2067', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '8.62', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '165', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '196', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '29.54', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1001','10': '1106','100': '1240','1000': '1421','10000': '1675','100000': '2061',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (mildly basic oxide)",
          "electronegativity": "1.17",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '544.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1070', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2260', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '198', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '238', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "rhombohedral",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '13.3', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2130', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '441', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '412', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '37.8', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '19.5', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '49.7', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.274",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-19-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Samarium',}
       }
  
            },
        
            "Eu": {
	    
        "general": {
          "name": "Europium",
          "symbol": "Eu",
          "number": 63,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '151.964', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>7</sup>',
          "electronspershell": "2, 8, 18, 25, 8, 2",
          "yeardiscovered": "1901",
		  "discoveredby": ["Eugène-Anatole Demarçay",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '5.264', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '5.13', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1099', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1802', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '9.21', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '176', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '182', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.66', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '863','10': '957','100': '1072','1000': '1234','10000': '1452','100000': '1796',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (mildly basic oxide)",
          "electronegativity": "",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '547.1', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1085', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2404', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '198', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '231', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '185', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "body-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '13.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": 
		{value : '167', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '8.3', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '7.9', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '18.2', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.152",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-53-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Europium',}
       }
  
            },
        
            "Gd": {
	    
        "general": {
          "name": "Gadolinium",
          "symbol": "Gd",
          "number": 64,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '157.25', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>7</sup> 5d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 25, 9, 2",
          "yeardiscovered": "1880",
		  "discoveredby": ["Jean Charles Galissard de Marignac",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '7.90', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.4', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1585', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3546', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.083', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '10.05', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '301.3', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '240', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '37.03', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1836','10': '2028','100': '2267','1000': '2573','10000': '2976','100000': '3535',},}},
  
        "atomic": {
          "oxidationstates": "3, 2, 1 (mildly basic oxide)",
          "electronegativity": "1.20",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '593.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1170', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '1990', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '196', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '233', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "ferromagnetic/paramagnetic transition at 293.4 K",
          "thermalconductivity": [
		{value : '10.6', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.77', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2680', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": 
		{value : '570', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '37.9', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '21.8', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '54.8', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.259",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-54-2",
          "wikipedia": {'en': 'wikipedia.org/wiki/Gadolinium',}
       }
  
            },
        
            "Tb": {
	    
        "general": {
          "name": "Terbium",
          "symbol": "Tb",
          "number": 65,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '158.92535', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>9</sup>',
          "electronspershell": "2, 8, 18, 27, 8, 2",
          "yeardiscovered": "1843",
		  "discoveredby": ["Carl Gustaf Mosander",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '8.23', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '7.65', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1629', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3503', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '10.15', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '293', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '182', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '28.91', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1789','10': '1979','100': '2201','1000': '2505','10000': '2913','100000': '3491',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2, 1 (weakly basic oxide)",
          "electronegativity": "",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "4",
          "ionizationenergies": [
		{value : '565.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1110', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2114', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '194', dim:'length', unit: 'pm',moe:5}
	,
          "calculatedradius": 
		{value : '225', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '177', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '11.1', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.83', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2620', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '677', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '863', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '38.7', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '22.1', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '55.7', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.261",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-27-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Terbium',}
       }
  
            },
        
            "Dy": {
	    
        "general": {
          "name": "Dysprosium",
          "symbol": "Dy",
          "number": 66,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '162.500', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>10</sup>',
          "electronspershell": "2, 8, 18, 28, 8, 2",
          "yeardiscovered": "1886",
		  "discoveredby": ["Paul Émile Lecoq de Boisbaudran",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '8.540', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '8.37', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1680', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2840', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '11.06', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '280', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '167', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.7', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1378','10': '1523','100': '1704','1000': '1954','10000': '2304','100000': '2831',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (weakly basic oxide)",
          "electronegativity": "1.22",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '573.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1130', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2200', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '192', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '228', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '178', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic at 300 K",
          "thermalconductivity": [
		{value : '10.7', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2710', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '500', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '540', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '40.5', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '24.7', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '61.4', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.247",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7429-91-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Dysprosium',}
       }
  
            },
        
            "Ho": {
	    
        "general": {
          "name": "Holmium",
          "symbol": "Ho",
          "number": 67,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '164.93032', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>11</sup>',
          "electronspershell": "2, 8, 18, 29, 8, 2",
          "yeardiscovered": "1878",
		  "discoveredby": ["Marc Delafontaine","Jacques-Louis Soret",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '8.79', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '8.34', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1734', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2993', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '17.0', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '265', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '165', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.15', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1432','10': '1584','100': '1775','1000': '2040','10000': '2410','100000': '2964',},}},
  
        "atomic": {
          "oxidationstates": "3 (basic oxide)",
          "electronegativity": "1.23",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '581.0', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1140', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2204', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '192', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": 
		{value : '226', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '176', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '16.2', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.1', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2760', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '746', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '481', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '40.2', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '26.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '64.8', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.231",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-60-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Holmium',}
       }
  
            },
        
            "Er": {
	    
        "general": {
          "name": "Erbium",
          "symbol": "Er",
          "number": 68,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '167.259', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>12</sup>',
          "electronspershell": "2, 8, 18, 30, 8, 2",
          "yeardiscovered": "1842",
		  "discoveredby": ["Carl Gustaf Mosander",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '9.066', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '8.86', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1802', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3141', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '19.90', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '280', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '168', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '28.12', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1504','10': '1663','100': '1885','1000': '2163','10000': '2552','100000': '3132',},}},
  
        "atomic": {
          "oxidationstates": "3 (basic oxide)",
          "electronegativity": "1.24",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '589.3', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1150', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2194', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '189', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": 
		{value : '226', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '176', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic at 300 K",
          "thermalconductivity": [
		{value : '14.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.2', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2830', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '814', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '589', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '44.4', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '28.3', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '69.9', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.237",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-52-0",
          "wikipedia": {'en': 'wikipedia.org/wiki/Erbium',}
       }
  
            },
        
            "Tm": {
	    
        "general": {
          "name": "Thulium",
          "symbol": "Tm",
          "number": 69,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '168.93421', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>13</sup>',
          "electronspershell": "2, 8, 18, 31, 8, 2",
          "yeardiscovered": "1879",
		  "discoveredby": ["Per Teodor Cleve",]
       },
  
        "physical": {
          "color": "silvery gray",
          "phase": "solid",
          "density": [
		{value : '9.32', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '8.56', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1818', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2223', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '16.84', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '247', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '160', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.03', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1117','10': '1235','100': '1381','1000': '1570','10000': '1821','100000': '2217',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2 (basic oxide)",
          "electronegativity": "1.25",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '596.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1160', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2285', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '190', dim:'length', unit: 'pm',moe:10}
	,
          "calculatedradius": 
		{value : '222', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '176', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic at 300 K",
          "thermalconductivity": [
		{value : '16.9', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.4', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '471', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '520', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '44.5', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '30.5', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '74.0', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.213",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-30-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Thulium',}
       }
  
            },
        
            "Yb": {
	    
        "general": {
          "name": "Ytterbium",
          "symbol": "Yb",
          "number": 70,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "f",
          "atomicweight": 
		{value : '173.054', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup>',
          "electronspershell": "2, 8, 18, 32, 8, 2",
          "yeardiscovered": "1878",
		  "discoveredby": ["Jean Charles Galissard de Marignac",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '6.90', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '6.21', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1097', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '1469', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '7.66', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '159', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '154', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.74', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '736','10': '813','100': '910','1000': '1047','10000': '1266','100000': '1465',},}},
  
        "atomic": {
          "oxidationstates": "3, 2 (basic oxide)",
          "electronegativity": "",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '603.4', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1174.8', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2417', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '187', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '222', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '176', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '38.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '3.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '1590', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '343', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '206', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '30.5', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '9.9', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '23.9', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.207",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-64-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Ytterbium',}
       }
  
            },
        
            "Lu": {
	    
        "general": {
          "name": "Lutetium",
          "symbol": "Lu",
          "number": 71,
          "catagory": {
              "name":"Lanthanide", 
              "key": "lanthanide"
          },
          "group": "",
          "period": "6",
          "block": "d",
          "atomicweight": 
		{value : '174.9668', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 9, 2",
          "yeardiscovered": "1907",
		  "discoveredby": ["Georges Urbain","Carl Auer von Welsbach","Charles James",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '9.841', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '9.3', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1925', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3675', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.022', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '22', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '414', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '154', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.86', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1906','10': '2103','100': '2346','1000': '2653','10000': '3072','100000': '3663',},}},
  
        "atomic": {
          "oxidationstates": "3 (weakly basic oxide)",
          "electronegativity": "1.27",
          "electronaffinity": 
		{value : '50', dim:'molenergy', unit: 'molKJ'}
	,
          "valence": "3",
          "ionizationenergies": [
		{value : '523.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1340', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2022.3', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '187', dim:'length', unit: 'pm',moe:8}
	,
          "calculatedradius": 
		{value : '217', dim:'length', unit: 'pm'}
	,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '174', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '16.4', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '1.8', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": 
		{value : '893', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '',
          "vickershardness": 
		{value : '1160', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '47.6', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '27.2', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '68.6', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.261",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-94-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Lutetium',}
       }
  
            },
        
            "Ac": {
	    
        "general": {
          "name": "Actinium",
          "symbol": "Ac",
          "number": 89,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '227', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 6d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 9, 2",
          "yeardiscovered": "1899",
		  "discoveredby": ["André-Louis Debierne",]
       },
  
        "physical": {
          "color": "silvery-white",
          "phase": "solid",
          "density": [
		{value : '10', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1323', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3471', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '14', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '400', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '120', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.2', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3 (neutral oxide)",
          "electronegativity": "1.1",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '499', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1170', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '215', dim:'length', unit: 'pm'}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '195', dim:'length', unit: 'pm'}
	,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "",
          "thermalconductivity": [
		{value : '12', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-34-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Actinium',}
       }
  
            },
        
            "Th": {
	    
        "general": {
          "name": "Thorium",
          "symbol": "Th",
          "number": 90,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '232.0381', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 6d<sup>2</sup>',
          "electronspershell": "2, 8, 18, 32, 18, 10, 2",
          "yeardiscovered": "1829",
		  "discoveredby": ["Jons Jakob Berzelius",]
       },
  
        "physical": {
          "color": "white",
          "phase": "soild",
          "density": [
		{value : '11.7', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '2115', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '5061', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.38', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '13.81', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '514', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '118', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '26.230', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2633','10': '2907','100': '3248','1000': '3683','10000': '4259','100000': '5055',},}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2 (weakly basic oxide)",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '587', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1110', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '1930', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": 
		{value : '206', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '179', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "face-centered cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '54.0', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '6.7', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2490', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": 
		{value : '400', dim:'pressure', unit: 'megapa'}
	,
          "mohshardness": '3.0',
          "vickershardness": 
		{value : '350', dim:'pressure', unit: 'megapa'}
	,
          "bulkmodulus": [
		{value : '54', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '31', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '79', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.27",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-29-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Thorium',}
       }
  
            },
        
            "Pa": {
	    
        "general": {
          "name": "Protactinium",
          "symbol": "Pa",
          "number": 91,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '231.03588', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>2</sup> 6d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 20, 9, 2",
          "yeardiscovered": "1913",
		  "discoveredby": ["Otto Hahn","Lise Meitner","Frederick Soddy","John Cranston",]
       },
  
        "physical": {
          "color": "silvery metallic",
          "phase": "solid",
          "density": [
		{value : '15.37', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1841', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4300', dim:'temperature', unit: 'degK',prefix:'≈'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '1.4', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '12.34', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '481', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '99.1', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "5, 4, 3, 2 (weakly basic oxide)",
          "electronegativity": "1.5",
          "electronaffinity": null,
          "valence": "5",
          "ionizationenergies": [
		{value : '568', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '200', dim:'length', unit: 'pm'}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '180', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '163', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "tetragonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '47', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '5.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-13-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Protactinium',}
       }
  
            },
        
            "U": {
	    
        "general": {
          "name": "Uranium",
          "symbol": "U",
          "number": 92,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '238.02891', dim:'molmass', unit: 'gpmol'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>3</sup> 6d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 21, 9, 2 ",
          "yeardiscovered": "1789",
		  "discoveredby": ["Martin Heinrich Klaproth",]
       },
  
        "physical": {
          "color": "silvery gray metallic",
          "phase": "solid",
          "density": [
		{value : '19.1', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '17.3', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1405.3', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4404', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.2', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '9.14', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '417.1', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": 
		{value : '116', dim:'specificheat', unit: 'jperkgk'}
	,
          "molarheatcapacity": [
		{value : '27.665', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2325','10': '2564','100': '2859','1000': '3234','10000': '3727','100000': '4402',},}},
  
        "atomic": {
          "oxidationstates": "6, 5, 4, 3 (weakly basic oxide)",
          "electronegativity": "1.38",
          "electronaffinity": null,
          "valence": "6",
          "ionizationenergies": [
		{value : '597.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1420', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,],
          "covalentradius": 
		{value : '196', dim:'length', unit: 'pm',moe:7}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '156', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": 
		{value : '186', dim:'length', unit: 'pm'}
	
       },
  
        "misc": {
          "crystalstructure": "orthorhombic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '27.5', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '3.6', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '3155', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [
		{value : '100', dim:'pressure', unit: 'gigapa'}
	,],
          "shearmodulus": 
		{value : '111', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '208', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.23",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-61-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Uranium',}
       }
  
            },
        
            "Np": {
	    
        "general": {
          "name": "Neptunium",
          "symbol": "Np",
          "number": 93,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '237', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>4</sup> 6d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 22, 9, 2",
          "yeardiscovered": "1940",
		  "discoveredby": ["Edwin McMillan","Philip H. Abelson",]
       },
  
        "physical": {
          "color": "silvery metallic",
          "phase": "solid",
          "density": [
		{value : '20.45', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '910', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '4273', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '3.20', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '336', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [
		{value : '29.46', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '2194','10': '2437','100': '','1000': '','10000': '','100000': '',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3 (amphoteric oxide)",
          "electronegativity": "1.36",
          "electronaffinity": null,
          "valence": "6",
          "ionizationenergies": [
		{value : '604.5', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '190', dim:'length', unit: 'pm',moe:1}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '155', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "orthorhombic, tetragonal and cubic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '6.3', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.83', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7439-99-8",
          "wikipedia": {'en': 'wikipedia.org/wiki/Neptunium',}
       }
  
            },
        
            "Pu": {
	    
        "general": {
          "name": "Plutonium",
          "symbol": "Pu",
          "number": 94,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '244', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>6</sup>',
          "electronspershell": "2, 8, 18, 32, 24, 8, 2 ",
          "yeardiscovered": "1940",
		  "discoveredby": ["Glenn T. Seaborg","Edwin McMillan","J. W. Kennedy","A. C. Wahl",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '19.816', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": 
		{value : '16.63', dim:'density', unit: 'gpercm3'}
	,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '912.5', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3505', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": 
		{value : '2.82', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": 
		{value : '333.5', dim:'molenergy', unit: 'molKJ'}
	,
          "specificheat": null,
          "molarheatcapacity": [
		{value : '35.5', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1756','10': '1953','100': '2198','1000': '2511','10000': '2926','100000': '3499',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3 (amphoteric oxide)",
          "electronegativity": "1.28",
          "electronaffinity": null,
          "valence": "6",
          "ionizationenergies": [
		{value : '584.7', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '187', dim:'length', unit: 'pm',moe:1}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '159', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "monoclinic",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '6.74', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": 
		{value : '0.67', dim:'electricalconduct', unit: 'megasperm'}
	,
          "speedofsound": 
		{value : '2260', dim:'velocity', unit: 'mpers'}
	,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": 
		{value : '43', dim:'pressure', unit: 'gigapa'}
	,
          "youngmodulus": 
		{value : '96', dim:'pressure', unit: 'gigapa'}
	,
          "poissonratio": "0.21",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-07-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Plutonium',}
       }
  
            },
        
            "Am": {
	    
        "general": {
          "name": "Americium",
          "symbol": "Am",
          "number": 95,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '243', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>7</sup>',
          "electronspershell": "2, 8, 18, 32, 25, 8, 2",
          "yeardiscovered": "1944",
		  "discoveredby": ["Glenn T. Seaborg","Leon O. Morgan","Ralph A. James","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "silvery white",
          "phase": "solid",
          "density": [
		{value : '12', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1449', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '2880', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": 
		{value : '0.6', dim:'temperature', unit: 'degK'}
	,
          "heatoffusion": 
		{value : '14.39', dim:'molenergy', unit: 'molKJ'}
	,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [
		{value : '62.7', dim:'molheatcap', unit: 'jpermolk'}
	,],
          "vaporpressure": {'': {'1': '1239','10': '1356','100': '','1000': '','10000': '','100000': '',},}},
  
        "atomic": {
          "oxidationstates": "7, 6, 5, 4, 3, 2 (amphoteric oxide)",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '578', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '180', dim:'length', unit: 'pm',moe:6}
	,
          "calculatedradius": null,
          "empiricalradius": 
		{value : '175', dim:'length', unit: 'pm'}
	,
          "atomicradius": 
		{value : '173', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '10', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-35-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Americium',}
       }
  
            },
        
            "Cm": {
	    
        "general": {
          "name": "Curium",
          "symbol": "Cm",
          "number": 96,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '247', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>7</sup> 6d<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 25, 9, 2",
          "yeardiscovered": "1944",
		  "discoveredby": ["Glenn T. Seaborg","Ralph A. James","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '13.51', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1613', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": 
		{value : '3383', dim:'temperature', unit: 'degK'}
	,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {'': {'1': '1788','10': '1982','100': '','1000': '','10000': '','100000': '',},}},
  
        "atomic": {
          "oxidationstates": "4, 3 (amphoteric oxide)",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '581', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": 
		{value : '169', dim:'length', unit: 'pm',moe:3}
	,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": 
		{value : '174', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal close-packed",
          "magneticordering": "antiferromagnetic, paramagnetic at 52 K",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-51-9",
          "wikipedia": {'en': 'wikipedia.org/wiki/Curium',}
       }
  
            },
        
            "Bk": {
	    
        "general": {
          "name": "Berkelium",
          "symbol": "Bk",
          "number": 97,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '247', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>9</sup>',
          "electronspershell": "2, 8, 18, 32, 27, 8, 2",
          "yeardiscovered": "1949",
		  "discoveredby": ["Glenn T. Seaborg","Stanley G. Thompson","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '14.78', dim:'density', unit: 'gpercm3',name:'alpha'}
	,
		{value : '13.25', dim:'density', unit: 'gpercm3',name:'beta'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1259', dim:'temperature', unit: 'degK',name:'beta'}
	,],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "4, 3",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '601', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": 
		{value : '170', dim:'length', unit: 'pm'}
	,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "hexagonal close-packed",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [
		{value : '10', dim:'thermalconduct', unit: 'wpermperk'}
	,],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-40-6",
          "wikipedia": {'en': 'wikipedia.org/wiki/Berkelium',}
       }
  
            },
        
            "Cf": {
	    
        "general": {
          "name": "Californium",
          "symbol": "Cf",
          "number": 98,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '251', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>10</sup>',
          "electronspershell": "2, 8, 18, 32, 28, 8, 2",
          "yeardiscovered": "1950",
		  "discoveredby": ["Glenn T. Seaborg","Stanley G. Thompson","Kenneth Street, Jr.","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "silvery",
          "phase": "solid",
          "density": [
		{value : '15.1', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1173', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '608', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '3-4',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-71-3",
          "wikipedia": {'en': 'wikipedia.org/wiki/Californium',}
       }
  
            },
        
            "Es": {
	    
        "general": {
          "name": "Einsteinium",
          "symbol": "Es",
          "number": 99,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '252', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>11</sup>',
          "electronspershell": "2, 8, 18, 32, 29, 8, 2",
          "yeardiscovered": "1952",
		  "discoveredby": ["University of California, Berkeley","Argonne National Laboratory","Los Alamos National Laboratories","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "silver-colored",
          "phase": "solid",
          "density": [
		{value : '8.84', dim:'density', unit: 'gpercm3'}
	,],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1133', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "4, 3, 2",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "4",
          "ionizationenergies": [
		{value : '619', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "paramagnetic",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7429-92-7",
          "wikipedia": {'en': 'wikipedia.org/wiki/Einsteinium',}
       }
  
            },
        
            "Fm": {
	    
        "general": {
          "name": "Fermium",
          "symbol": "Fm",
          "number": 100,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '257', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>12</sup>',
          "electronspershell": "2, 8, 18, 32, 30, 8, 2",
          "yeardiscovered": "1952",
		  "discoveredby": ["University of California, Berkeley","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "",
          "phase": "solid",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1800', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3, 2",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '627', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-72-4",
          "wikipedia": {'en': 'wikipedia.org/wiki/Fermium',}
       }
  
            },
        
            "Md": {
	    
        "general": {
          "name": "Mendelevium",
          "symbol": "Md",
          "number": 101,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '258', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>13</sup>',
          "electronspershell": "2, 8, 18, 32, 31, 8, 2",
          "yeardiscovered": "1955",
		  "discoveredby": ["Glenn T. Seaborg","Gregory R. Choppin","Bernard G. Harvey","Stanley G. Thompson","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "",
          "phase": "solid",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [
		{value : '1100', dim:'temperature', unit: 'degK'}
	,],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3, 2",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '635', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "7440-11-1",
          "wikipedia": {'en': 'wikipedia.org/wiki/Mendelevium',}
       }
  
            },
        
            "No": {
	    
        "general": {
          "name": "Nobelium",
          "symbol": "No",
          "number": 102,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "f",
          "atomicweight": 
		{value : '259', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 8, 2",
          "yeardiscovered": "1958",
		  "discoveredby": ["Nobel Institute","Glenn T. Seaborg","John R. Walton","Torbjørn Sikkeland","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "",
          "phase": "solid",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3, 2",
          "electronegativity": "1.3",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '641.6', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1254.3', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2605.1', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "10028-14-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Nobelium',}
       }
  
            },
        
            "Lr": {
	    
        "general": {
          "name": "Lawrencium",
          "symbol": "Lr",
          "number": 103,
          "catagory": {
              "name":"Actinide", 
              "key": "actinide"
          },
          "group": "",
          "period": "7",
          "block": "d",
          "atomicweight": 
		{value : '262', dim:'molmass', unit: 'gpmol',proj:'true'}
	,
          "electronconfig": '[Rn] 7s<sup>2</sup> 5f<sup>14</sup> 7p<sup>1</sup>',
          "electronspershell": "2, 8, 18, 32, 32, 8, 3",
          "yeardiscovered": "1961",
		  "discoveredby": ["Lawrence Berkeley National Laboratory","Robert M. Latimer","Almon Larsh","Torbjørn Sikkeland","Albert Ghiorso",]
       },
  
        "physical": {
          "color": "",
          "phase": "",
          "density": [],
          "liquiddensityatmp": null,
          "liquiddensityatbp": null,
          "meltingpoint": [],
          "boilingpoint": null,
          "triplepoint": '',
          "criticalpoint": '',
		  "supercontemp": null,
          "heatoffusion": null,
          "heatofvaporization": null,
          "specificheat": null,
          "molarheatcapacity": [],
          "vaporpressure": {}},
  
        "atomic": {
          "oxidationstates": "3",
          "electronegativity": "",
          "electronaffinity": null,
          "valence": "3",
          "ionizationenergies": [
		{value : '443.8', dim:'molenergy', unit: 'molKJ',name:'1st'}
	,
		{value : '1428', dim:'molenergy', unit: 'molKJ',name:'2nd'}
	,
		{value : '2219.1', dim:'molenergy', unit: 'molKJ',name:'3rd'}
	,],
          "covalentradius": null,
          "calculatedradius": null,
          "empiricalradius": null,
          "atomicradius": null,
          "vanderwaalsradius": null
       },
  
        "misc": {
          "crystalstructure": "",
          "magneticordering": "",
          "thermalconductivity": [],
          "electricalconductivity": null,
          "speedofsound": null,
          "brinellhardness": null,
          "mohshardness": '',
          "vickershardness": null,
          "bulkmodulus": [],
          "shearmodulus": null,
          "youngmodulus": null,
          "poissonratio": "",
		  "reflectivity": null,
		  "refractiveindex": null,
          "casregistrynumber": "22537-19-5",
          "wikipedia": {'en': 'wikipedia.org/wiki/Lawrencium',}
       }
  
            },
        
};
var ptElementKeys = [
    
            "H",
        
            "He",
        
            "Li",
        
            "Be",
        
            "B",
        
            "C",
        
            "N",
        
            "O",
        
            "F",
        
            "Ne",
        
            "Na",
        
            "Mg",
        
            "Al",
        
            "Si",
        
            "P",
        
            "S",
        
            "Cl",
        
            "Ar",
        
            "K",
        
            "Ca",
        
            "Sc",
        
            "Ti",
        
            "V",
        
            "Cr",
        
            "Mn",
        
            "Fe",
        
            "Co",
        
            "Ni",
        
            "Cu",
        
            "Zn",
        
            "Ga",
        
            "Ge",
        
            "As",
        
            "Se",
        
            "Br",
        
            "Kr",
        
            "Rb",
        
            "Sr",
        
            "Y",
        
            "Zr",
        
            "Nb",
        
            "Mo",
        
            "Tc",
        
            "Ru",
        
            "Rh",
        
            "Pd",
        
            "Ag",
        
            "Cd",
        
            "In",
        
            "Sn",
        
            "Sb",
        
            "Te",
        
            "I",
        
            "Xe",
        
            "Cs",
        
            "Ba",
        
            "Hf",
        
            "Ta",
        
            "W",
        
            "Re",
        
            "Os",
        
            "Ir",
        
            "Pt",
        
            "Au",
        
            "Hg",
        
            "Tl",
        
            "Pb",
        
            "Bi",
        
            "Po",
        
            "At",
        
            "Rn",
        
            "Fr",
        
            "Ra",
        
            "Rf",
        
            "Db",
        
            "Sg",
        
            "Bh",
        
            "Hs",
        
            "Mt",
        
            "Ds",
        
            "Rg",
        
            "Cn",
        
            "Nh",
        
            "Fl",
        
            "Mc",
        
            "Lv",
        
            "Ts",
        
            "Og",
        
            "La",
        
            "Ce",
        
            "Pr",
        
            "Nd",
        
            "Pm",
        
            "Sm",
        
            "Eu",
        
            "Gd",
        
            "Tb",
        
            "Dy",
        
            "Ho",
        
            "Er",
        
            "Tm",
        
            "Yb",
        
            "Lu",
        
            "Ac",
        
            "Th",
        
            "Pa",
        
            "U",
        
            "Np",
        
            "Pu",
        
            "Am",
        
            "Cm",
        
            "Bk",
        
            "Cf",
        
            "Es",
        
            "Fm",
        
            "Md",
        
            "No",
        
            "Lr",
        
]; 
  
