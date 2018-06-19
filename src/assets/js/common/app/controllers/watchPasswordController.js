define(['zepto'], function ($) {
	$("#seePassword").bind('touchend', function(){
		var that = $(this);
		 if(that.hasClass("close")) {
		 	that.removeClass("close").prev().attr("type", 'password');
		 } else {
		 	that.addClass("close").prev().attr("type", 'text');
		 }
	});
});