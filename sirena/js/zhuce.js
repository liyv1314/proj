var signUp = document.getElementById('zhuce');
var button = document.getElementById('sign-up-button');
var zhuceClose = document.getElementById('zhuce-close');
var mask = document.getElementById('mask');
var zhuceReset = document.getElementById('zhuce-reset');

button.onclick = function() {
	signUp.style.display = "block";
	mask.style.display = 'block';
	header.style.opacity = '0.5';
}

zhuceClose.onclick = function() {
	zhuceReset.click();
	signUp.style.display = "none";
	mask.style.display = 'none';
	header.style.opacity = '1';
}

myform.onsubmit = function() {
	checkUid();
	checkPwd();
	checkTel();
	checkEmail();
	if(checkUid() && checkPwd() && checkTel() && checkEmail())
		return true;
	else
		return false;
}

zhuceReset.onclick = function() {
	// location.reload();
	document.myform.uid.nextElementSibling.innerHTML = '';
	document.myform.pwd.nextElementSibling.innerHTML = '';
	document.myform.tel.nextElementSibling.innerHTML = '';
	document.myform.email.nextElementSibling.innerHTML = '';
	// alert(1);
}

myform.uid.onfocus = function() {
	this.nextElementSibling.innerHTML = 'please input 6-18 chars contains [a-zA-Z0-9_]';
}

myform.pwd.onfocus = function() {
	this.nextElementSibling.innerHTML = 'please input 6-18 chars';
}

myform.tel.onfocus = function() {
	this.nextElementSibling.innerHTML = 'please input phone number';
}

myform.email.onfocus = function() {
	this.nextElementSibling.innerHTML = 'please input your email';
}

myform.uid.onblur = checkUid;
myform.pwd.onblur = checkPwd;
myform.tel.onblur = checkTel;
myform.email.onblur = checkEmail;


function checkUid() {
	// return false;
	var username = myform.uid.value;
	if(username==''){
		myform.uid.nextElementSibling.innerHTML = 'username is empty';
		return false;
	}
	else{
		if(validUid(username)){
			myform.uid.nextElementSibling.innerHTML = 'correct';
				return true;
		}
		else{
			myform.uid.nextElementSibling.innerHTML = 'error input';
			return false;
		}
	}
}

function validUid(args) {
	var re = /^[a-zA-Z]\w{5,17}$/;
	res = re.test(args);
	return res;
}

function checkPwd() {
	var userpwd = myform.pwd.value;
	var secure = myform.pwd.nextElementSibling.nextElementSibling.children;
	var weak = secure[0];
	var mid = secure[1];
	var hard = secure[2];
	weak.style.background = '';
	mid.style.background = '';
	hard.style.background = '';
	if(userpwd == ''){
		myform.pwd.nextElementSibling.innerHTML = 'password is empty';
		return false;
	}
	else{
		if(validPwd(userpwd)){
			myform.pwd.nextElementSibling.innerHTML = 'correct';
			var classpwd = getClassPwd(userpwd);
			if(classpwd == 'weak')
				weak.style.background = 'red';
			else if(classpwd == 'mid')
				mid.style.background = 'red';
			else
				hard.style.background = 'red';
			return true;
		}
		else{
			myform.pwd.nextElementSibling.innerHTML = 'error input';
			return false;
		}
	}
}

function validPwd(args) {
	// 请填写6-20位字母、数字和特殊字符
	var re = /^[\S ]{6,18}$/;
	res = re.test(args);
	return res;
}

function getClassPwd(args) {
	if(args.length <= 10)
		res = 'weak';
	else{
		if(/^\d+$/.test(args)){
			res = 'weak';
		}
		else if(args.search(/[a-zA-Z]/) != -1 && args.search(/\d/) != -1 && args.search(/[\W_]/) == -1){
			res = 'mid';
		}
		else{
			res = 'hard';
		}
	}
	return res;
}

function checkTel() {
	var usertel = myform.tel.value;
	if(usertel == ''){
		myform.tel.nextElementSibling.innerHTML = 'phone number is empty';
		return false;
	}
	else{
		if(validTel(usertel)){
			myform.tel.nextElementSibling.innerHTML = 'correct';
				return true;
		}
		else{
			myform.tel.nextElementSibling.innerHTML = 'error input';
			return false;
		}
	}
}

function validTel(args) {
	var re = /^1\d{10}$/;
	res = re.test(args);
	return res;
}

function checkEmail() {
	var useremail = myform.email.value;
	if(useremail == ''){
		myform.email.nextElementSibling.innerHTML = 'email is empty';
		return false;
	}
	else{
		if(validEmail(useremail)){
			myform.email.nextElementSibling.innerHTML = 'correct';
				return true;
		}
		else{
			myform.email.nextElementSibling.innerHTML = 'error input';
			return false;
		}
	}
}

function validEmail(args) {
	//liyv1314@sina.com
	//1@1.cn
	//6-18
	if(args.length<18){
		var re = /\w+@\w+\.[a-zA-Z]{2,3}/;
		res = re.test(args);
	}
	else{
		res = false;
	}
	return res;
}