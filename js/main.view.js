var MainView = {
	init: function () {
		var self = this;
		$(function() {
            $("#maintabs").tabs();
            $("#maintabs").bind("tabsselect", function (event, ui) {
            	if (ui.index === 0) {
            		$("#searchbox").show();
            	} else {
            		$("#searchbox").hide();
            	}
            	
            	if (ui.index === 1) {
            		QuizView.tabSelected();
            	} else if (ui.index === 2) {
            		PreferenceView.tabSelected();
                } else if (typeof ToolsView !== "undefined" && ui.index === 3) {
                    ToolsView.tabSelected();
                }
            	$(".main-tab-img").removeClass("maintab-selected");
            	$($(".main-tab-img")[ui.index]).addClass("maintab-selected");
            });
            $( "input:submit").button();
            TableView.init(self.resizeOverlay);
			QuizView.init(self.resizeOverlay);
			PreferenceView.init();
			if (typeof ToolsView !== "undefined") {
				ToolsView.init(self.resizeOverlay);
			} else {
				//$('#maintabs').tabs('disable', 3);
				$('#tools-tab').hide();
			}
			AboutView.init(function () {
//				var adContainer, elements = [], index = 0;
//				if (chrome.runtime && typeof (chrome.runtime.getManifest) === "function" &&
//						chrome.runtime.getManifest().name.indexOf("lite") > 0) {
//					adContainer = $("<div />").css("padding-left", "10px").css("position", "absolute").css("left", "0").css("bottom", "0");
//					$("#table-content").append(adContainer);
//					$.each($("#store-availability-free a").clone(), function () {
//						elements.push({'element': this, 'text': 'Also available on:'});
//					});
//					$.each($("#store-availability-paid a").clone(), function () {
//						elements.push({'element': this, 'text': 'Paid version available on:'});
//					});
//					setInterval(function () {
//						adContainer.empty().append($("<div />").text(elements[index].text)).append(elements[index].element);
//						index++;
//						if (index >= elements.length) {
//							index = 0;
//						}
//					}, 5000);
//				}
			});
			$(window).bind('resize', function () {self.resizeOverlay();});
        });
	},
	
	resizeOverlay: function () {
		var height = $("#maintabs").height() + 30, overlay = $(".ui-widget-overlay");
    	overlay.css('height', height);
	}
};

$(document).ready(function() {
	$("body").hide();
	PreferenceView.changeTheme(Prefs.getGeneralPrefs().theme, function () {
		MainView.init();
		$("body").show();
	});
});
