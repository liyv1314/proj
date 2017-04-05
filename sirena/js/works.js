var works = document.getElementById('works').children;

for(var i = 0;i < works.length;i++){
	mypack(works[i].firstElementChild);
}

function mypack(obj){
	var offset = 0;
	var timer = null;
	obj.onmouseover = function() {
		// this.style.marginTop = '-90px';
		var temp = this;
		var speed = -5;
		workMove();
		function workMove() {
			clearTimeout(timer);
			offset += speed;
			temp.style.marginTop = offset + 'px';
			if(offset > -90){
				timer = setTimeout(workMove,30);
			}
			else{
				temp.style.marginTop = "-90px";
				clearTimeout(timer);
			}
		}
	}
	obj.onmouseleave = function() {
		// this.style.marginTop = '0px';
		clearTimeout(timer);
		var temp = this;
		offset = parseFloat(temp.style.marginTop);
		var speed = 5;
		workMove();
		function workMove() {
			offset += speed;
			temp.style.marginTop = offset + 'px';
			if(offset < 0){
				timer = setTimeout(workMove,30);
			}
			else{
				temp.style.marginTop = "0px";
				clearTimeout(timer);
			}
		}
	}
}