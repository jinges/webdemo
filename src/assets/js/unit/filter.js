/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 17:17:18 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 17:23:31
 */
define([
  'require',
], function (require) {
  'use strict';

  return {
    strToObj: function (str) {
      let params = {};
      str.split('&').map(function (item) {
        var arr = item.split('=');
        var k = arr[0],v = arr[1];
        params[k] = v;
      })
      return params
    },
    objToStr: function (obj) {
      let res = ''
      for (let k in obj) {
        res += '&' + k + '=' + obj[k]
      }
      return res.slice(1)
    },
    formateDate: function(date, format) {
      if (!date) {
        return ''
      }
      date = new Date(date)
      var obj = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }

      if (new RegExp('(y+)').test(format)) {
        format = format.replace(RegExp.$1, obj['y+'])
      }
      for (var j in obj) {
        if (new RegExp('(' + j + ')').test(format)) {
          format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[j]) : (('00' + obj[j]).substr(('' + obj[j]).length)))
        }
      }
      return format
    }
  }
});