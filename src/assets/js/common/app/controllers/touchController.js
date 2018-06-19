define(function () {
	var panel = document.body;
    var touchObj = {};
    panel.addEventListener('touchstart', function (e) {
        var touch = e.changedTouches[0];

        touchObj.startX = touch.pageX;
        touchObj.startY = touch.pageY;
        touchObj.startTime = new Date().getTime();
    }, false);

    panel.addEventListener('touchmove', function (e) {
        // e.stopPropagation();
    }, false);

    panel.addEventListener('touchend', function (e) {
        var touch = e.changedTouches[0];

        touchObj.endX = touch.pageX;
        touchObj.endY = touch.pageY;
        touchObj.endTitme = new Date().getTime();
        
        setDirection();
    }, false)

    panel.addEventListener('touchcancel', function (e) {
        var touch = e.changedTouches[0];

        touchObj.endX = touch.pageX;
        touchObj.endY = touch.pageY;
        touchObj.endTitme = new Date().getTime();
        
        setDirection();
    });

    function setDirection () { 
        if(touchObj.endTitme - touchObj.startTime < 60) {
            return false;
        }

        if((touchObj.endX - touchObj.startX) > 0) {
            
        } else if ((touchObj.startX - touchObj.endX) > 0 ) {
            
        }
    }

    return function (cb) {
    	cb();
    }
});