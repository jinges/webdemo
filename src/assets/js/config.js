/*
 * @Author: 大明冯 
 * @Date: 2018-06-21 10:25:44 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-06-21 14:17:49
 */

require.config({
  baseUrl: 'components/',
  paths: {
    zepto: '/assets/js/libs/zepto.min',
    chunk1: '/assets/js/libs/1.chunk',
    chunk2: '/assets/js/libs/2.chunk',
    Handlebars: '/assets/js/libs/handlebars',
    configer: '/assets/js/common/configer',
    hbars: '/assets/js/libs/hbars',
    text: '/assets/js/libs/text',
    alert: 'alert/controller'
  },
  shim: {
    zepto: {
      exports: '$'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    chunk1: {
      exports: '1.chunk'
    },
    chunk2: {
      exports: '2.chunk'
    }
  },
  urlArgs: "bust=" + (new Date()).getTime(),
  hbars: {
    extension: '/view.html', // default = '.html'
    compileOptions: {} // options object which is passed to Handlebars compiler
  },
  // catchError: true
});