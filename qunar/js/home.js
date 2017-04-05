
function display_aside(whichItem){
	var className = whichItem.getAttribute("class");
	var displayItem = document.getElementById("header_aside_"+className);
	displayItem.setAttribute("style","display: block;");
	}

function display_cancel(whichItem){
	var className = whichItem.getAttribute("class");
	var displayItem = document.getElementById("header_aside_"+className);
	displayItem.setAttribute("style","display: none;");
	}

function up_slide(whichItem,num){
	var desc = "top: "+num+";";
//	alert(desc);
	whichItem.setAttribute("style",desc);
}

function down_slide(whichItem){
	whichItem.setAttribute("style","");
}

function unfold(whichItem){
	whichItem.setAttribute("style","left: -57px;");
	var item = document.getElementById("unfold_content");
	item.setAttribute("style","left: 0;");
}

function close_content(){
	var item1 = document.getElementById("unfold_content");
	item1.setAttribute("style","left: -335px;");
	var item2 = document.getElementById("unfold_menu");
	item2.setAttribute("style","left: -7px;");
}


