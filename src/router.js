/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 14:34:00 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 15:44:44
 */

define([
  'require',
], function (require) {
  'use strict';
  return [
    {
      path: '/test',
      component: '/components/test'
    },
    {
      path: '/test2',
      component: '/components/test2'
    },
    {
      path: '/',
      component: '/components/error'
    }
  ]
});