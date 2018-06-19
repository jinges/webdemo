define (function () {
	var confirm = 
	function (obj) {
		// obj = {'title': 'title','btnUrl': 'btnUrl', 'btnName': 'btnName'}
		var str = 
		' <section>'+
	    '    <div class="mask">'+
	    '    </div>'+
	    '    <div class="dialog confirm">'+
	    '        <p>'+ obj.title +'</p>'+
	    '        <div class="db_f">'+
	    '            <span class="bf1"></span>'+
	    '            <span class="close">取消</span> '+
	    '            <a href="'+ obj.btnUrl +'" class="assetBtn">'+ obj.btnName +'</a> '+
	    '        </div>'+
	    '    </div>'+
	    '</section>';

	    $("body").append(str);
	    
	    $(".close").live('tap', function(){
	    	$(".mask").parent().remove();
	    });
	};

	return confirm;
});