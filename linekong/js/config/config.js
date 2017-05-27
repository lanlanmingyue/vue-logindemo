/**
 * Author：wff
 * Time：2017-05-25
 * Description：Description
 */
define(function () {
    require.config({
        paths: {
            'jquery': 'http://wap.bdline.com/lib/js/jquery-1.7.2.min',
            'swiper': 'http://wap.bdline.com/lib/js/swiper2.min',
            'util': 'http://wap.bdline.com/js/util',
            'fastclick':"http://wap.bdline.com/lib/js/fastclick"
        },
        shim: {
            'util': ['jquery']
        }
    });
});
