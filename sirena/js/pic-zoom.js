var people = document.getElementById('people');
for(var i = 0;i < people.children.length;i++){
	var picObj = people.children[i].firstElementChild.lastElementChild;
	// alert(picObj);
	picObj.onmouseover = function() {
		this.previousElementSibling.style.width = '320px';
		this.previousElementSibling.style.height = '320px';
		this.previousElementSibling.style.marginLeft = '-10px';
		this.previousElementSibling.style.marginTop = '-10px';
		this.lastElementChild.style.display = 'block';
	}
	picObj.onmouseleave = function() {
		this.previousElementSibling.style.width = '300px';
		this.previousElementSibling.style.height = '300px';
		this.previousElementSibling.style.marginLeft = '0px';
		this.previousElementSibling.style.marginTop = '0px';
		this.lastElementChild.style.display = 'none';
	}
}