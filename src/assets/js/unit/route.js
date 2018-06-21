/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 15:06:59 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 22:55:06
 */


define([
  'require',
  '/assets/js/unit/filter.js'
],
function (require, filter) {
  'use strict';
  return function(routes){
    let hash = window.location.hash;
    let path = '/';
    let params = {};
    if (hash) {
      const queryArr = hash.substr(1).split('?')
      path = queryArr[0];
      params = filter.strToObj(queryArr[1])

      window.$router = {
        path: path,
        params: params
      }
    }
    
    for(let item of routes) {
      if (item.path == path) {
        require([item.component + '/controller.js'])
        break;
      }
    }
  }
});