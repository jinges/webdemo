/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 13:05:42 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 14:17:54
 */

define('alert', [
    'zepto',
    'hbars!/components/alert'
  ],
  function ($, template) {
    // 0: 提示； 1： success; 2: danger
    var classArr = ['info', 'success', 'danger'];
    return function (context, num) {
      $('.dialog').remove();
      $("body").append(template({
        context: context,
        style: classArr[num|| 0]
      }));

      setTimeout(function () {
        $('.dialog').remove();
      }, 800);
    };
  });