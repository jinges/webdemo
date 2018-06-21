/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 11:59:17 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 14:05:42
 */
define([
  'require',
  'hbars!error'
], function(require, template) {
  'use strict';
   document.body.innerHTML += template();
});