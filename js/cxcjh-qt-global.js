/**
 * Created by QXT on 2017/6/15.
 */

var win = isWindows();

var w = $(window).width();
var wh = $(window).height();
$(function () {

   /*if (win == false) {
      $('body').css({fontFamily: '微软雅黑MAC'});
   }*/

   $('a').click(function () {
      if ($(this).attr('href') == 'javascript:') {
         msg();
      }
   });

//   左右高度相等
   if (w > 993) {
      setTimeout(function () {
         // var sec = $('section').outerHeight();
         // $('.pub-rt,.pub-le').css({minHeight: sec - 40 - $('.info-top').outerHeight()});
         var rth = $('.pub-rt').outerHeight();
         $('.pub-le').css({height: rth});
      }, 180);
   }


//   tab切换调用
   $.tab({
      triggerObj: ".tab-hover-li",
      obj: ".tab-hover-sec",
      trigger: "hover",
      class: "active"
   });
   $.tab({
      triggerObj: ".tab-click-li",
      obj: ".tab-click-sec",
      trigger: "click",
      class: "active"
   });

});

//左对齐
function mar(ma, num) {
   $(ma).parent().each(function () {
      $(this).children(ma).each(function (index) {
         if (index % num == 0) {
            $(this).css('margin-left', '0px');
         }
      });
   });
}

function msg() {
   layer.msg('功能正在开发中');
}


jQuery.fn.size = function () {
   return this.length;
};

//判断是否为 windows 操作系统
function isWindows() {
   return /windows|win32/i.test(navigator.userAgent);
}
