define(['uploadlib', '../common/app/models/uploaderModel'], function (lrz, uploaderModel) {
	return function (salesId, userId, borrowerId, fileId, relatedId, materialType, file, cb) {
		lrz(file, {
		    width: 800
		})
		.then(function (rst) {
	        cb(null, rst.base64);
	        return rst;
		})
		.then(function (rst) {
			var imgUrl = rst.base64.replace('data:image/jpeg;base64,','');
	        uploaderModel(salesId, userId, borrowerId, fileId, relatedId, materialType, imgUrl, file, function (err, data) {
	        	cb(err, null, data);
	        });
	    })
	    .catch(function (err) {
	    	cb(err);
	    });
	};
});