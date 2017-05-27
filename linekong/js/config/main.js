/**
 * Author：wff
 * Time：2017/3/9
 * Description：index
 */
require(['http://wap.bdline.com/js/config/config.js'], function () {
    require(['jquery','swiper','util','fastclick'], function ($, swiper, util,FastClick) {
            FastClick.attach(document.body);
           var index = {
            imgLoaded: function (type) {
                var img = new Image(),
                src = $('#bannerSwiperWrapper .swiper-slide:eq(0) a.banner-img').data(type);
                img.src = src;
                if(util.ieVersion() == 8){
                    index.bannerImg(type);
                }else{
                    img.onload = function () {
                        index.bannerImg(type);
                    };
                }
            },
            bannerImg: function (type) {
                if (util.ieVersion() == 8) {
                    $('.banner .banner-img').each(function (i) {
                        var url = $(this).data(type),
                        cssLeft = (1920 - parseInt($(window).width())) / 2;
                        $(this).html('<img style="left: ' + -cssLeft + 'px" src="' + url + '" / > ');
                    });
                } else {
                    $('.banner .banner-img').each(function (i) {
                        var $this = $(this);

                            //设置背景
                            var url = $this.data(type);
                            $this.css('background-image', 'url("' + url + '")');

                            //设置链接
                            var href = $this.attr('href');
                            if (href == '') {
                                $this.removeAttr('href').addClass('nohref');
                            }
                        });
                }
            },
            setBannerImgLeftIe8: function () {
                $('.banner .banner-img').each(function (i) {
                    $(this).children('img').css('left', (1920 - parseInt($(window).width())) / 2);
                });
            }
        };
        var swiper = new Swiper('.swiper-container', {
             pagination : '.swiper-pagination',
             paginationClickable :true,
            autoplay: 5000,//可选选项，自动滑动
            autoplayDisableOnInteraction : false
        });
            //根据屏幕尺寸加载图片
            var wWidth = parseInt($(window).width());
            if (wWidth > 1024) {
                index.imgLoaded('large');
            } else if (wWidth > 750) {
                index.imgLoaded('middle');
            } else {
                index.imgLoaded('little');
            }
        
            $(window).resize(function () {
                index.setBannerImgLeftIe8();
            //根据屏幕设置图片
                var wWidth = parseInt($(window).width());
                if (wWidth > 1024) {
                    index.bannerImg('large');
                } else if (wWidth > 750) {
                    index.bannerImg('middle');
                } else {
                    index.bannerImg('little');
                }
            });

    });
});