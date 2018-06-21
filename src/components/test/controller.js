define([
  'require',
  'alert',
  'hbars!test'
],
function (require, alert, template) {
  'use strict';
  var context = {
    title: "测试listion",
    body: "This is my first post!"
  };

  $('body').on('click', '#btn', function(){
    alert("测试点击事件")
  })
  document.body.innerHTML += template(context);
});