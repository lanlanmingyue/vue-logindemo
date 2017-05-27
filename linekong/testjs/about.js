require(['http://wap.bdline.com/js/config/config.js'], function () {
    require(['jquery','util','fastclick'], function ($, util,FastClick) {
        FastClick.attach(document.body);
          var $nav_li=$(".about-nav-box ul li");
         var flag=0;
        var $profileBtn=$(".about-nav-box ul li.profile");
        var $historyBtn=$(".about-nav-box ul li.history");
        var $contactBtn=$(".about-nav-box ul li.contact");
        var profileHeight=$(".about-profile-title").offset().top;
        var historyHeight=$(".about-history-title").offset().top;
        var contactHeight=$(".about-contact-tit").offset().top;

        $profileBtn.click(function(){
            flag=1;
            $(this).addClass("active").siblings().removeClass("active");
            $("body,html").animate({scrollTop:profileHeight},200,function(){
                flag=0;
            });
        });
         $historyBtn.click(function(){
            flag=1;
            $(this).addClass("active").siblings().removeClass("active");
            $("body,html").animate({scrollTop:historyHeight},800,function(){
                flag=0;
            });
        });
          $contactBtn.click(function(){
            flag=1;
            $(this).addClass("active").siblings().removeClass("active");
            $("body,html").animate({scrollTop:contactHeight},1200,function(){
                flag=0;
            });
        })
          //滚动定位
            var ismypc=util.ismypc();
                   $(window).scroll(function(event) {
                        var sinHei;
                        var winScrollTop=$(window).scrollTop();
                        if(ismypc){
                            sinHei=140;
                        }else{
                            sinHei=72;
                        }
                        if(winScrollTop>(profileHeight-sinHei)){
                            $(".about-nav-box").addClass("fixed");
                        }else{
                            $(".about-nav-box").removeClass("fixed");
                        }
        
                        if(winScrollTop>=0&&flag==0){
                                    $profileBtn.addClass("active").siblings().removeClass("active");
                               }
                               if(winScrollTop>=(historyHeight-sinHei)&&flag==0){
                                    $historyBtn.addClass("active").siblings().removeClass("active");
                               }
                               if(winScrollTop>=(contactHeight-sinHei*3)&&flag==0){
                                    $contactBtn.addClass("active").siblings().removeClass("active");
                               }
                      

                   });
           util.bottomScroll();
    });
});
