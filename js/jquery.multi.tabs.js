/**
 * Created by QXT on 2017/8/21.
 */
;(function ($) {
   var a = {
      triggerObj: "",
      obj: "",
      trigger: "",
      class: ""
   };

   $.tab = function (a) {
      switch (a.trigger) {
         case "click":
            tabs(a.triggerObj, a.obj, a.class);
            break;
         case "hover":
            tabHover(a.triggerObj, a.obj, a.class);
            break;
         case "hover-click":
            hoverClick(a.triggerObj, a.obj, a.class);
      }
   };

   // 点击切换
   function tabs(cli, sec, cla) {
      $(cli).parent().each(function (index) {
         $(this).children(cli).each(function (ind) {
            $(this).click(function () {
               add(this, sec, ind, index, cla);
            });
         });
      });
   }

   // 悬停切换
   function tabHover(cli, sec, cla) {
      $(cli).parent().each(function (index) {
         $(this).children(cli).each(function (ind) {
            $(this).hover(function () {
               add(this, sec, ind, index, cla);
            });
         });
      });
   }

   // 悬停预览、点击切换
   function hoverClick(cli, sec, cla) {
      var i;
      $(cli).parent().each(function (index) {
         $(this).children(cli).each(function (ind) {
            if ($(this).hasClass(cla)) {
               i = ind;
            }
            $(this).hover(function () {
               $($(sec).parent()[index]).children(sec).removeClass(cla);
               $($($(sec).parent()[index]).children(sec)[ind]).addClass(cla);
            }, function () {
               if ($(this).hasClass(cla)) {
                  i = ind;
               }
               $($(sec).parent()[index]).children(sec).removeClass(cla);
               $($($(sec).parent()[index]).children(sec)[i]).addClass(cla);
            });
            $(this).click(function () {
               add(this, sec, ind, index, cla);
            });
         });
      });
   }

   function add(th, sec, ind, index, cla) {
      $(th).siblings().removeClass(cla);
      $(th).addClass(cla);
      $($(sec).parent()[index]).children(sec).removeClass(cla);
      $($($(sec).parent()[index]).children(sec)[ind]).addClass(cla);
   }

})(jQuery);


//调用
$.tab({
   triggerObj: ".tab-hover-li", //class名字不限定（CLASS包含: active 当前栏目样式）
   obj: ".tab-hover-sec", //class名字不限定（CLASS包含: active 视为显示状态）
   trigger: "hover-click",  // 取值click, hover, hover-click
   class: "active"   //状态class
});
