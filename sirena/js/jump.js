var iconWraps = document.getElementById('icon-wrap').children;
for(var i = 0;i < iconWraps.length;i++){
	pack2(iconWraps[i]);
}

function pack2(obj){
	obj.onmouseover = myup;
	obj.onmouseleave = mydown;
	var timer = null;
	var offset = 0;

	function myup(){
		// alert(this);
		obj.firstElementChild.firstElementChild.style.color = '#673ab7';
		clearTimeout(timer);
		moveup();
		// temp.style.marginTop = '-65px';
		function moveup() {
			if(offset > -30){
				offset -= 1;
				obj.firstElementChild.firstElementChild.style.marginTop = offset + 'px';
				timer = setTimeout(moveup,5);
			}
			else{
				clearTimeout(timer);
			}
		}
	}
	function mydown(){
		// alert(this);
		obj.firstElementChild.firstElementChild.style.color = '#000';
		clearTimeout(timer);
		// offset = -130;
		movedown();
		// temp.style.marginTop = '-65px';
		function movedown() {
			if(offset < 0){
				offset += 1;
				obj.firstElementChild.firstElementChild.style.marginTop = offset + 'px';
				timer = setTimeout(movedown,5);
			}
			else{
				clearTimeout(timer)
			}
		}
	}
}