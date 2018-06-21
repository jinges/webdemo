define([
  'require',
  'alert',
  'hbars!test2'
], function (require, alert, template) {
  'use strict';
  
  document.body.innerHTML += template({
    title: '第二个测试speaking'
  });
});