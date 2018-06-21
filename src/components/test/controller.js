define([
  'require',
  'alert',
  'Handlebars',
  'hbars!test',
  'hbars!test2'
],
function (require, alert, Handlebars, template, test2) {
  'use strict';
  var context = {
    title: "测试listion",
    body: "This is my first post!",
    comments: [{
          name: '张三',
          comment: '很好，真的很不错',
          like: 1
        }, {
          name: '李四',
          comment: '6666',
            like: 1
        }, {
          name: '王五',
          comment: '没有什么要说的，反正很好',
            like: 1
        }
    ]
  };

  Handlebars.registerHelper("children", function (context, options) {
    var res = '';
    for(var i=0, len= context.length; i< len; i++) {
      var data = context[i];
      data.index = i;
      res += test2(data)
    }
    return res;
  });
  /**
   * 父组件的事件
   */
  $('body').on('click', '#btn', function(){
    alert("测试点击事件")
  }).on('click', '#btn-like', function () {
    var index = $(this).attr('data-index')
    context.comments[index].like+=1;
    $(this).prev().find('em').text(context.comments[index].like)
    alert('喜欢 ' + context.comments[index].name + ' +1')
  })
  context.brandId = $router.params.brandId;
  document.body.innerHTML += template(context);
});