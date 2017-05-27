define(function () {
    var util = {
    ismypc:function(){
         var userAgentInfo = navigator.userAgent;  
       var Agents = new Array("Android", "android", "iPhone", "iphone", "SymbianOS", "symbianos", "Windows Phone", "windows phone", "iPad", "ipad", "iPod", "ipod", "WPDesktop", "wpdesktop");  
       var flag = true;  
       for (var v = 0; v < Agents.length; v++) {  
           if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
       }  
       return flag;  
    },
        get: function (url, data, fn) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                contentType: 'application/json',
                data: data,
                error: function () {
                    console.log('error');
                },
                success: function (data) {
                    fn.call(window, data, url);
                }
            });
        },
        ieVersion: function () {
            var ua = navigator.userAgent.toLowerCase(),
                isIE = ua.indexOf("msie") > -1;
            if (isIE) {
                return parseInt(ua.match(/msie ([\d.]+)/)[1].split('.')[0]);
            } else {
                return false;
            }
        },
        browserTips: function () {
            var ie8Blow = util.ieVersion() < 8 && util.ieVersion() != false,
                ie8Little = util.ieVersion() == 8 && parseInt($(window).width()) <= 900;
            if (ie8Blow || ie8Little) {
                var styleSheet = 'body,div,p,a,h1,h3{margin:0;padding:0;font-family:"Microsoft YaHei UI Light","Microsoft YaHei";font-weight:normal}' +
                    'a{text-decoration:none;cursor:pointer}' +
                    'html,body{background:#faf8f5;height:100%;width:100%}' +
                    '.main{margin:0 auto;padding-top:260px;width:500px;color:#454545}' +
                    '.tips h1{display:block;margin-top:25px;text-align:center}' +
                    '.tips h3{margin:20px 20px 0;font-size:16px;line-height:24px}' +
                    '.tips p{margin-top:40px;text-align:center}' +
                    '.tips p a{margin:0 10px;display:inline-block;color:#4087e0}' +
                    '.tips p a:hover{color:#0050b5}';
                util.loadStyleString(styleSheet);

                document.body.innerHTML = '<div class="main"><div class="tips">' +
                    '<h1>浏览器版本过低</h1>' +
                    '<h3>您好，我们检测到您的浏览器版本过低，可能存在安全风险！我们建议您使用以下浏览器，您将获得更好更安全的体验。</h3>' +
                    '<p>' +
                    '<a href="http://se.360.cn">360安全浏览器</a>' +
                    '<a href="http://browser.qq.com">QQ安全浏览器</a>' +
                    '<a href="http://ie.sogou.com">搜狗极速浏览器</a>' +
                    '</p></div></div>';
            }
        },
        loadStyleString: function (css) {
            var style = document.createElement("style");
            style.type = "text/css";
            try {
                style.appendChild(document.createTextNode(css));
            } catch (ex) {
                style.styleSheet.cssText = css;
            }
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(style);
        },
        bottomScroll:function(){
              //首先将#back-to-top隐藏
            $("#back-to-top").hide();
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#back-to-top").fadeIn(500);
                }
                else
                {
                    $("#back-to-top").fadeOut(500);
                }
            });
            $("#back-to-top").click(function(){
                $('body,html').animate({scrollTop:0},800);
                return false;
            });
        },
        public:function(){
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
    }
    };

    util.browserTips();
    util.public();
    return util;
});