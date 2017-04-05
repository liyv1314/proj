// timer = new Array();
// temp = new Array();
var pics = document.getElementsByClassName('clients-content-item');
for(var i = 0;i < pics.length;i++){
	pack(pics[i].firstElementChild);
}

function pack(obj){
	obj.onmouseover = myup;
	obj.onmouseleave = mydown;
	var timer = null;
	var offset = 0;

	function myup(){
		// alert(this);
		clearTimeout(timer);
		moveup();
		// temp.style.marginTop = '-65px';
		function moveup() {
			if(offset > -130){
				offset -= 10;
				obj.style.marginTop = offset + 'px';
				timer = setTimeout(moveup,5);
			}
			else{
				clearTimeout(timer);
			}
		}
	}
	function mydown(){
		// alert(this);
		clearTimeout(timer);
		// offset = -130;
		movedown();
		// temp.style.marginTop = '-65px';
		function movedown() {
			if(offset < 0){
				offset += 10;
				obj.style.marginTop = offset + 'px';
				timer = setTimeout(movedown,5);
			}
			else{
				clearTimeout(timer)
			}
		}
	}
}