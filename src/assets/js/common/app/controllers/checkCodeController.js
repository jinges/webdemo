define(['../common/app/models/checkCodeModel'], function (checkCode) {
	var isSend = true;
	return function (mobile, flag, obj, cb) {
		var reg= /^[1][34578]\d{9}$/;
		if(!isSend){
			return false;
		}

		if(!reg.test(mobile)){
			cb('请填写正确的手机号码');
			return false;
		}

		setBtnText(obj);

		checkCode(mobile, flag, function (err, data) {
			cb(err, data);
		});
	};

	function setBtnText (obj) {
		var second = 60;
		isSend = false;
		var time = setInterval(function(){
			second--;
			obj.text(second+'秒')
			if(second < 0 ){
				isSend = true;
				obj.text('获取验证码');
				clearInterval(time);
			}
		}, 1000);
	}
});