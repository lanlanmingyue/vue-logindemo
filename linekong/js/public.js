$(function(){
    FastClick.attach(document.body);
             var weiboBtn=$(".foot-us-weibo");
        var weixinBtn=$(".foot-us-weixin");
        //手机端链接切换
        var $linkwrap = $('.link-wrap'),
            $linkdt = $linkwrap.find('dt'),
            $linkdl = $linkwrap.find('dl');

            if(!(weiboBtn.css("display")=="block")){
                    $linkdt.click(function () {
                    var $dl = $(this).parent('dl');
                    if ($dl.hasClass('active')) {
                        $dl.removeClass('active');
                    } else {
                        $linkdl.removeClass('active');
                        $(this).parent('dl').addClass('active');
                    }
                });
            }

        //手机端头部导航开关
        var $headerclose=$(".mb-header-close");
        var $headercon=$(".mb-header-pop");
        var $headerbtn=$(".mb-header-menu");
        $headerclose.click(function(){
            if ($headercon.hasClass('active')) {
                $headercon.removeClass('active');
            } 
           $("body").removeClass("overflow");
        });
        $headerbtn.click(function(){
            if (!$headercon.hasClass('active')) {
                $headercon.addClass('active');
            }
             $("body").addClass("overflow");
        });

   
        if(weiboBtn.css("display")=="block"){
            weiboBtn.mouseover(function(){
                $(this).find(".foot-us-imgbox").css("display","block");
                 }).mouseout(function(event) {
               $(this).find(".foot-us-imgbox").css("display","none");
            });
             weixinBtn.mouseover(function(){
                $(this).find(".foot-us-imgbox").css("display","block");
                }).mouseout(function(event) {
               $(this).find(".foot-us-imgbox").css("display","none");
            });
        }
})