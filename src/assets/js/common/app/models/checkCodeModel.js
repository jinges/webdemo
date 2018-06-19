define(['configer'], function(base) {
	return function (mobile, flag, cb) {
		$.ajax({
			type: 'get',
			url: base.URL+'nland/getVerifyCode.do?'+ new Date().getTime(),
			data: {
				mobile: mobile,
				loginFlag: flag
			},
			success: function (result) {
				if(result){
					var data = JSON.parse(result);
					cb(null, data);
				}
			}
		});
	};
});