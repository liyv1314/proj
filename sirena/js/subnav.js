var Items = document.getElementById('g-header-nav-list').children;
			var items = new Array();
			var xialaTimer = new Array();
			var yanshiTimer = new Array();
			for(var i = 0;i < Items.length-1;i++){
				xialaTimer[i] = null;
				yanshiTimer[i] = null;
				items[i] = 0;
				Items[i].index = i;
				if(Items[i].lastElementChild.tagName=="UL"){
					items[i] = Items[i].lastElementChild.children.length;
				}
			}
			for(var i = 0;i < Items.length;i++){
				if(items[i] != 0){
					Items[i].onmouseover = function() {
						// this.lastElementChild.style.height = items[this.index] * 30 + 'px';
						clearTimeout(yanshiTimer[this.index]);
						clearTimeout(xialaTimer[this.index]);
						var real = this;
						var max = items[this.index] * 48;
						var i = 0;
						zhankai();
						function zhankai() {
							i++;
							real.lastElementChild.style.height = i + "px"; 
							if(i < max)
								xialaTimer[real.index] = setTimeout(zhankai,10);
						}
					}
					Items[i].onmouseout = function() {
						clearTimeout(yanshiTimer[this.index]);
						clearTimeout(xialaTimer[this.index]);
						var real = this;
						var i = parseFloat(this.lastElementChild.style.height);
						yanshiTimer[this.index] = setTimeout(function(){
							shousuo();
						},1000);
						function shousuo() {
							i--;
							real.lastElementChild.style.height = i + "px"; 
							if(i > 0)
								xialaTimer[real.index] = setTimeout(shousuo,10);
						}
					}
				}
			}