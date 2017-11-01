webpackJsonp([2],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @Author: Jecyu
 * @Date: 2017-10-23 10:38:07 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-26 10:46:42 pm 
 */



__webpack_require__(32);
__webpack_require__(0);
__webpack_require__(33);
// require('bootstrap-loader');




/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @Author: Jecyu
 * @Date: 2017-10-26 5:44:12 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-26 5:47:12 pm 
 */



__webpack_require__(34)

// 导航
var nav = {
    init: function() {
        this.bindEvent(); 
        return this; 
    },
     bindEvent: function() {
 
         var sections  = $('section');
         var nav       = $('nav');
         var navHeight = nav.outerHeight();
 
         // 实现页面滚动时，改变导航按钮激活状态
         $(window).on('scroll', function() {
             var curPos = $(this).scrollTop();
             sections.each(function() {
                 var top    = $(this).offset().top - navHeight;
                 var bottom = top + $(this).outerHeight();
         
                 // 检测滚动条的位置是否在当前section的区间内
                 if (curPos >= top && curPos <= bottom) {
                    nav.find('a').parent().removeClass('active');
                    sections.removeClass('active');
                    
                    $(this).addClass('active');
                    nav.find('a[href="#'+ $(this).attr('id') +'" ]').parent().addClass('active');
                 }
             })
         })
         
         // 实现平滑跳转效果
         var $root = $('html, body');
         nav.find('a').on('click', function() {
             var href = $.attr(this, 'href');
             $root.animate({
                 scrollTop: $(href).offset().top - navHeight
             }, 500, function() {
                 // window.location.hash = href;    // TODO 该行代码会导致单击按钮时跳转到准确位置，当前出现跳帧错误现象
             });
             // 添加active
             // $(this).parent().addClass('active').siblings('.nav-item').removeClass('active');
 
             return false;
         })
 
         
     }
 };
 
 module.exports = nav.init();

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[30]);