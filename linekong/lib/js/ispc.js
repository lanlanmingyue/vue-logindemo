	function ismypc(){  
	   var userAgentInfo = navigator.userAgent;  
	   var Agents = new Array("Android", "android", "iPhone", "iphone", "SymbianOS", "symbianos", "Windows Phone", "windows phone", "iPad", "ipad", "iPod", "ipod", "WPDesktop", "wpdesktop");  
	   var flag = true;  
	   for (var v = 0; v < Agents.length; v++) {  
		   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	   }  
	   return flag;  
	}
	var ismypc = ismypc();