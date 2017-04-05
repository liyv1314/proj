var container = document.getElementById('test-content-wrap');
var points = document.getElementById('test-content-control').children;
points[0].onclick = function() {
	container.firstElementChild.style.marginLeft = '-1200px';
	points[0].className = 'point active';
	points[1].className = 'point';
	myspeed = 50;
	mymove();
}
points[1].onclick = function() {
	container.firstElementChild.style.marginLeft = '0px';
	points[1].className = 'point active';
	points[0].className = 'point';
	myspeed = -50;
	mymove();
}

function mymove() {
	var offset = parseFloat(container.firstElementChild.style.marginLeft);
	// alert(offset);
	offset += myspeed;
	container.firstElementChild.style.marginLeft = offset + "px";
	if(myspeed < 0){
		if(offset > -1200){
			setTimeout(mymove,10);
		}
		else{
			// container.firstElementChild.style.marginLeft = "-1200px";
		}
	}
	if(myspeed > 0){
		if(offset < 0){
			setTimeout(mymove,10);
		}
		else{
			// container.firstElementChild.style.marginLeft = "0px";
		}
	}
}