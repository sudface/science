var QuizView = {
	types: ["name", "abbreviation", "atomicnumber"],
    userAnswers: [],
    currentQuiz: {},
    
    init: function (openFunc) {
    	var self = this;
    	
    	$("input[name='quiztype']").change(function () {
    		self.updateAutoSelection(parseInt($(this).attr('index'), 10));
    	});
    	
    	$("#quiz-start").click(function () {self.startQuiz(); return false;});
    	$("#quiz-next").click(function () {self.nextQuestion(); return false;});
        $("#quiz-details").click(function() {self.toggleDetails(); return false;});
    	$("#quiz-close").click(function () {$('#quiz-form').dialog('close');return false;});
    	
    	$( "#quiz-form" ).dialog({autoOpen: false, height: 400,width: 600, resizable: false, modal: true, open: openFunc});
    	$(window).bind('resize', function () {
			self.resize();
		});
    	this.resize();
    },
    
    resize: function () {
    	var height = $(window).height() - 115, width = $(window).width(), tab = $("#tabs-2");
    	tab.css('height', height > 768 ? height : 768)
		   .css('width', width > 1024 ? width : 1024);
    },
    
    tabSelected: function () {
    	var prefs = Prefs.quizPreferencs(),
    	    index = prefs.remember ? prefs.autoSelection : prefs.prefSelection;
    	$("input:radio[name=quiztype]").filter("[index=" + index + "]").prop("checked",true);
	},
    
    updateAutoSelection: function (index) {
    	if (Prefs.quizPreferencs().remember) {
    		Prefs.saveQuizProperty("autoSelection", index);
    	}
    },
    
    startQuiz: function () {
        $("#quiz-result-details").hide();
        $("#quiz-result-table").empty();
        $("#quiz-details").button("option", "label", "Details");
        this.userAnswers = [];
    	this.randomize(ptElementKeys);
        this.currentQuiz.currentIndex = 0;
        this.currentQuiz.correct = 0;
        this.currentQuiz.currentType = "";
        this.currentQuiz.totalQuestions = 20;
        this.currentQuiz.starttime = new Date().getTime();
        this.updateQuiz();
        $("#quiz-percent").show();
        $("#quiz-current").show();
        $("#quiz-view").show();
        $("#quiz-next").show();
        $("#quiz-details").hide();
        $("#quiz-next").removeAttr("disabled");
        $("#quiz-summary").hide();
        $("#quiz-close").hide();
        $('#quiz-form').dialog('open');
    },
    
    updateQuiz: function () {
    	var value = $('input:radio[name=quiztype]:checked').val();
        if (value === 'random') {
            this.randomize(this.types);
            value = this.types[0];
        }
        this.currentQuiz.currentType = value;
        var element = ptElements[ptElementKeys[this.currentQuiz.currentIndex]];
        if (value === "name") {
        	this.updateQuizElement("???",element.general.symbol, element.general.number, 'What is the name?'); 
        } else if (value === "abbreviation") {
        	this.updateQuizElement(element.general.name, "???", element.general.number, 'What is the symbol?');
        } else if (value === "atomicnumber") {
        	this.updateQuizElement(element.general.name, element.general.symbol, "???", 'What is the atomic number?');
        }
        $("#quiz-element").attr('fill', this.elementColor(element.general.catagory.key));
        $("#quiz-percent").html(this.percentCorrect() + "%");
        $("#quiz-current").html((this.currentQuiz.currentIndex + 1) + "/" + this.currentQuiz.totalQuestions);
        $("#answer").val("");
        $("#answer").focus();
    },
    
    updateQuizElement: function (name, symbol, number, question) {
    	$("#question").html(question);
        $("#quiz-symbol").text(symbol);
        var numericValue = parseInt(number, 10);
        var formattedNumber = isNaN(numericValue) ? number : (numericValue < 10 ? ("00" + number) : (numericValue < 100 ? ("0" + number) : number));
        $("#quiz-number").text(formattedNumber);
        $("#quiz-name").text(name);
    },
    
    nextQuestion: function () {
    	var element = ptElements[ptElementKeys[this.currentQuiz.currentIndex]];
        var value = $("#answer").val().trim();
        var self = this;
        if (this.currentQuiz.currentType === "name") {
        	this.verifyAnswer(element.general.name, value, false);
        } else if (this.currentQuiz.currentType === "abbreviation") {
        	this.verifyAnswer(element.general.symbol, value, false); 
        } else if (this.currentQuiz.currentType === "atomicnumber") {
        	this.verifyAnswer(element.general.number, value, true); 
        }
        $("#quiz-next").attr("disabled", "disabled");
        $("#quiz-view").hide("slide", { direction: "left" }, 500, function (){
            self.currentQuiz.currentIndex++;
            if (self.currentQuiz.currentIndex === self.currentQuiz.totalQuestions) {
                $("#quiz-summary").html("<center>" + self.percentCorrect() + "% correct<br /><br />total time: " + self.quizTime() + "</center>");
                $("#quiz-summary").show();
                $("#quiz-percent").hide();
                $("#quiz-current").hide();
                $("#quiz-next").hide();
                $("#quiz-details").show();
                self.populateDetails();
                $("#quiz-close").show();
            } else {
                self.updateQuiz();
                $("#quiz-next").removeAttr("disabled");
                $("#quiz-view").show("slide", { direction: "right"}, 500, function() {
                    $("#answer").focus();
                });
            }
        });
    },
    
    percentCorrect: function () {
    	return Math.round((this.currentQuiz.currentIndex === 0 ? 0 : this.currentQuiz.correct / this.currentQuiz.currentIndex) * 100);
    },
    
    quizTime: function () {
    	var milliseconds = new Date().getTime();
        var totalSecs = Math.round((milliseconds - this.currentQuiz.starttime) / 1000);
        var seconds = (totalSecs)%60;
        var minutes = Math.round(totalSecs/60)%60;

        if (minutes < 10) 
         minutes = '0' + minutes;

        if (seconds < 10) 
         seconds = '0' + seconds;

        return minutes + ":" + seconds;
    },
    
    verifyAnswer: function (actual, guess, number) {
    	var valid = false;
        if (number) {
            valid = !isNaN(guess) && parseInt(guess, 10) === parseInt(actual, 10);
        } else {
            valid = actual.toLowerCase() === guess.toLowerCase();
        }
        this.userAnswers.push({
            "correct": valid,
            "userAnswer": guess,
            "actualAnswer": actual,
            "question": $("#question").text(),
            "element": $("#quiz-element").parent().clone(true)
        });
        this.currentQuiz.correct += valid ? 1 : 0;
    },
    
    populateDetails: function () {
        var table = $("#quiz-result-table").empty(), tr, td, span;
        $.each(this.userAnswers, function(index, value) {
            tr = $("<tr />");
            
            td = $("<td />").text(index + 1).css("width", "5%").css("padding-right", "10px");
            tr.append(td);
            
            td = $("<td />").css("width", "100px").append(value.element.find("#quiz-element").attr("id", "quiz-element-" + index).parent().css("width", "100px").css("margin-bottom", "0px"));
            tr.append(td);
               
            td = $("<td />").text(value.question);
               td.append("<br />");
            span = $("<span />").text(value.userAnswer === "" ? "NO ANSWER" : (value.correct ? value.actualAnswer : value.userAnswer));
            td.append(span.css("color", value.correct ? "green" : "red"));
            if (!value.correct) {
               span = $("<span />").text(" / " + value.actualAnswer);
               td.append(span);
            }
            tr.append(td);
            
            table.append(tr);
        });
    },
    
    toggleDetails: function () {
        var detailView = $("#quiz-result-details"), summaryView = $("#quiz-summary");
        if (detailView.is(":visible")) {
            detailView.hide();
            summaryView.show();
            $("#quiz-details").button("option", "label", "Details");
        } else {
            detailView.show();
            summaryView.hide();
            $("#quiz-details").button("option", "label", "Summary");
        }
    },
    
    randomize: function (myArray) {
    	var i = myArray.length;
	    if ( i == 0 ) {
	    	return false;
	    }
	    while ( --i ) {
	    	var j = Math.floor( Math.random() * ( i + 1 ) );
	        var tempi = myArray[i];
	        var tempj = myArray[j];
	        myArray[i] = tempj;
	        myArray[j] = tempi;
	    }
    },
    
    elementColor: function (key) {
    	if (key === 'nonmetal') {
            return "#00EE00";
        } else if (key === 'alkalimetal') {
            return "#FFAA00";
        } else if (key === 'alkalineearthmetal') {
            return "#F3F300";
        } else if (key === 'metalloid') {
            return "#55CC55";
        } else if (key === 'posttransitionmetals') {
            return "#99BBAA";
        } else if (key === 'halogen') {
            return "#00DDBB";
        } else if (key === 'noblegases') {
            return "#66AAFF";
        } else if (key === 'transitionmetal') {
            return "#DD9999";
        } else if (key === 'lanthanide') {
            return "#FFAA88";
        } else if (key === 'actinide') {
            return "#DDAACC";
        }
    }
};
