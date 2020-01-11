window.onload = function() {
// 支付宝-赞助
	document.getElementById("alipay").onclick = function() {
		document.getElementById("qrcodeAli").className = "qrcode show showIn"
	};
	document.getElementById("qrcodeAli").onclick = function() {
		document.getElementById("qrcodeAli").className = "qr"
	};
	
// 微信-赞助
	document.getElementById("wechat").onclick = function() {
		document.getElementById("qrcodeWechat").className = "qrcode show showIn"
	};
	document.getElementById("qrcodeWechat").onclick = function() {
		document.getElementById("qrcodeWechat").className = "qr"
	};
	
// QQ-赞助
	document.getElementById("qq").onclick = function() {
		document.getElementById("qrcodeQQ").className = "qrcode show showIn"
	};
	document.getElementById("qrcodeQQ").onclick = function() {
		document.getElementById("qrcodeQQ").className = "qr"
	};
	
// Venmo-赞助
	document.getElementById("venmo").onclick = function() {
		document.getElementById("qrcodeVenmo").className = "qrcode show showIn"
	};
	document.getElementById("qrcodeVenmo").onclick = function() {
		document.getElementById("qrcodeVenmo").className = "qr"
	}
	
// 四合一-服务器
	document.getElementById("MgpayS1").onclick = function() {
		document.getElementById("qrcodeMgpayS1").className = "qrcode show showIn"
	};
	document.getElementById("qrcodeMgpayS1").onclick = function() {
		document.getElementById("qrcodeMgpayS1").className = "qr"
	}
	
// 菜单栏
	document.getElementById("menu1").onclick = function() {
		document.getElementById("menu1").className = "menuLinkContainer activeMenu";
		document.getElementById("link1").className = "activeLink menuLink";
		document.getElementById("menu2").className = "menuLinkContainer";
		document.getElementById("link2").className = "menuLink";
		document.getElementById("menu3").className = "menuLinkContainer";
		document.getElementById("link3").className = "menuLink";
		document.getElementById("menu4").className = "menuLinkContainer";
		document.getElementById("link4").className = "menuLink";
	}
	document.getElementById("menu2").onclick = function() {
		document.getElementById("menu2").className = "menuLinkContainer activeMenu";
		document.getElementById("link2").className = "activeLink menuLink";
		document.getElementById("menu1").className = "menuLinkContainer";
		document.getElementById("link1").className = "menuLink";
		document.getElementById("menu3").className = "menuLinkContainer";
		document.getElementById("link3").className = "menuLink";
		document.getElementById("menu4").className = "menuLinkContainer";
		document.getElementById("link4").className = "menuLink";
	}
	document.getElementById("menu3").onclick = function() {
		document.getElementById("menu3").className = "menuLinkContainer activeMenu";
		document.getElementById("link3").className = "activeLink menuLink";
		document.getElementById("menu1").className = "menuLinkContainer";
		document.getElementById("link1").className = "menuLink";
		document.getElementById("menu2").className = "menuLinkContainer";
		document.getElementById("link2").className = "menuLink";
		document.getElementById("menu4").className = "menuLinkContainer";
		document.getElementById("link4").className = "menuLink";
	}
	document.getElementById("menu4").onclick = function() {
		document.getElementById("menu4").className = "menuLinkContainer activeMenu";
		document.getElementById("link4").className = "activeLink menuLink";
		document.getElementById("menu1").className = "menuLinkContainer";
		document.getElementById("link1").className = "menuLink";
		document.getElementById("menu2").className = "menuLinkContainer";
		document.getElementById("link2").className = "menuLink";
		document.getElementById("menu3").className = "menuLinkContainer";
		document.getElementById("link3").className = "menuLink";
	}
	
}

// PayPal Button  
function openbox() {

	var paypal = "https://www.paypal.me/andrewsun74";
	
	//window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
	var iWidth = 500;                         //弹出窗口的宽度;
	var iHeight = 640;                        //弹出窗口的高度;
	var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;  
	var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;
	
    selected = "yes";
    window.open(
      paypal,
      "_blank",
      'height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no'
	)
}
