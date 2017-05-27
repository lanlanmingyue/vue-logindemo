require(['http://wap.bdline.com/js/config/config.js'], function () {
    require(['jquery','util','fastclick'], function ($, util,FastClick) {
        FastClick.attach(document.body);
        util.bottomScroll();
    });
});