var pics = document.getElementById('footer4-pics');
picItems = pics.children;
// alert(picItems[0].lastElementChild);
for(var i = 0;i < picItems.length;i++){
	picItems[i].lastElementChild.onmouseover = function() {
		for(var i = 0;i < picItems.length;i++){
			picItems[i].lastElementChild.style.opacity = "0.3";
		}
		this.style.opacity = "0";
	}
	pics.onmouseleave = function() {
		for(var i = 0;i < picItems.length;i++){
			picItems[i].lastElementChild.style.opacity = "0";
		}
	}
}