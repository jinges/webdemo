define(['zepto'], function ($) {
	// 0: 提示； 1： success; 2: danger
	var info = ['info','success','danger']; 
	var dialog = 
	function (title, num) {
		var str = 
		' <section>'+
	    '    <div class="mask">'+
	    '    </div>'+
	    '    <div class="dialog alert '+ info[num] +'">'+
	    '        <p>'+ title +'</p>'+
	    '    </div>'+
	    '</section>';

	    $("body").append(str);

	    setTimeout(function(){
	    	$('.mask').parent().remove();
	    }, 800);
	};

	return dialog;
});