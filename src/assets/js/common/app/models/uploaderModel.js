define(['configer'], function(base) {
	return function (salesId, userId, borrowerId, fileId, relatedId, materialType, imgUrl, origin, cb)  {
		$.ajax({
            type: 'post',
            url: base.URL+'manage/uploadBase64File.do',
            data: {
                salesId: salesId,   ///销售员ID
                userId: userId,  //贷款人ID
                borrowerId: borrowerId,
                fileId: fileId,
                relatedId: relatedId,
                materialType: materialType,   //证件类型
                fileSize: origin.size,
                fileName: origin.name,
                fileType: origin.type,
                base64Image: imgUrl  //图片文件转换
            },
            success: function (result) {
                if(result) {
                	var data = JSON.parse(result);
                	cb(null, data);
                }
            },
            err: function (err) {
                cb(err);
            }
        });
    };
});