"utf-8"
说明:</br>
1.此为静态网站</br>
2.启动网站之前需要先：在cmd中输入 grunt</br>
3.可直接打开，也可设置站点之后打开。</br>
//grunt+requirejs </br>
js: 此为原文件js（本地写代码时，文件引用此处代码，便于调试）</br>
dist/css:由sass转化之后的样式，（本地测试用。css:dist/css 为scss生成的，压缩为assets/css）</br>
dist/js:压缩之后的文件（上线时调用）</br>
assets/js为压缩后的js（仅为首页js,上线时调用）</br>
assets/css/linkongfront.min.css  全部css按顺序压缩之后。上线样式只调用这一个便可</br>
lib:是一些模块和库</br>

注意：</br>
首页js是 js/config/main 压缩成的 ./assets/js/linkongfront.min.js</br>
上线时：assets,dist/js,images,lib,html即可</br>

大体思路：库每个页面按需引入</br>

上线时替换成：<link href="./assets/css/linkongfront.min.css" rel="stylesheet"></br>
<script type="text/javascript" src='./assets/js/linkongfront.min.js'></script></br>

手机端：banner需要换图，最好尺寸是 640*400</br>

测试js:</br>
<script type="text/javascript" charset="utf-8"  src="./lib/js/jquery-1.7.2.min.js"></script></br>
<script type="text/javascript" charset="utf-8"  src="./lib/js/swiper2.min.js">
</script></br>
<script type="text/javascript" charset="utf-8"  src="./lib/js/fastclick.js"></script></br>
<script type="text/javascript" charset="utf-8"  src="./testjs/util.js"></script></br>
<script type="text/javascript" charset="utf-8"  src="./testjs/index.js"></script></br>

