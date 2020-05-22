var AboutView = {
	init: function (callback) {
		var tab = $("#about"), self = this;
    	
		jQuery.ajaxSetup({async:false});
		$.get('about.html', function(data) {
      	  tab.html(data);
      	  if (callback) {
      		  callback();
      	  }
        });
		jQuery.ajaxSetup({async:true});
		
    	$(window).bind('resize', function () {
			self.resize(tab);
		});
    	this.resize(tab);
	},
	
	resize: function (tab) {
		var height = $(window).height() - 115, width = $(window).width();
		tab.css('height', height > 768 ? height : 768)
		   .css('width', width > 1024 ? width : 1024)
		   .find("div").css('width', (width > 1024 ? width : 1024) - 125);
	}
};