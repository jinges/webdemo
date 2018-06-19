define(function(){
	var url = decodeURI(location.href);
	if(url.indexOf('?')<0) {
		return false;
	}
	var params = url.split("?")[1].split('&');
	var param={};
	for(var i=0,len=params.length;i<len;i++){
		var item = params[i].split('=');
		param[''+ item[0] +'']=item[1];
	}
	return {
		'url' : url,
		'param': param
	};
});