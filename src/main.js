/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 10:55:15 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 13:47:07
 */

require(['./assets/js/config'], function () {
  const hash = window.location.hash;
  fildStr = hash ? hash.substr(1): 'error'
  require(['./components/' + fildStr + '/controller.js'],function(){},function(err){
    require(['./components/error/controller.js'])
  })
})