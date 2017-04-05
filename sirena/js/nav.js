var header = document.getElementById('g-header');
var body = document.getElementsByTagName('body')[0];
var headerLogo = document.getElementById('head-logo');

var headerNavList = document.getElementById('g-header-nav-list').children;
var headerIconList = document.getElementById('g-header-icon-list').children;
var temp = 300;
document.onscroll = function() {
	if(body.scrollTop >= 300){
		header.style.background = "#673ab7";
		header.style.height = '60px';
		headerLogo.style.height = '50px';
		headerLogo.style.width = '50px';
		headerLogo.style.marginTop = '5px';
		for(var i = 0;i < headerNavList.length;i++){
			headerNavList[i].style.height = '60px';
			headerNavList[i].style.lineHeight = '60px';
		}
		for(var i = 0;i < headerIconList.length;i++){
			headerIconList[i].style.padding = '18px 0';
		}
	}
	else{
		header.style.background = "rgba(255,255,255,0)";
		header.style.height = '146.594px';
		headerLogo.style.height = '100px';
		headerLogo.style.width = '100px';
		headerLogo.style.marginTop = '20px';
		for(var i = 0;i < headerNavList.length;i++){
			headerNavList[i].style.height = '146.594px';
			headerNavList[i].style.lineHeight = '146.594px';
		}
		for(var i = 0;i < headerIconList.length;i++){
			headerIconList[i].style.padding = '61px 0';
		}
	}
}