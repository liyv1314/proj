// timer = new Array();
// temp = new Array();
var pics = document.getElementsByClassName('clients-content-item');
for(var i = 0;i < pics.length;i++){
	timer = null;
	pics[i].firstElementChild.onmouseover = function(){
		// alert(this);
		clearTimeout(timer);
		temp = this;
		offset = 0;
		moveup();
		// temp.style.marginTop = '-65px';
		function moveup() {
			if(offset > -130){
				offset -= 10;
				temp.style.marginTop = offset + 'px';
				timer = setTimeout(moveup,5);
			}
			else{
				clearTimeout(timer);
			}
		}
	}
	pics[i].firstElementChild.onmouseleave = function(){
		// alert(this);
		clearTimeout(timer);
		temp = this;
		offset = -130;
		movedown();
		// temp.style.marginTop = '-65px';
		function movedown() {
			if(offset < 0){
				offset += 10;
				temp.style.marginTop = offset + 'px';
				timer = setTimeout(movedown,5);
			}
			else{
				clearTimeout(timer)
			}
		}
	}
}