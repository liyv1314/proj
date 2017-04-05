var navList = document.getElementById('g-header-nav-list').children;

for(var i=0;i<navList.length;i++){
    mypack(navList[i]);
}

function mypack(obj) {
    if(obj.children.length>1){
        var ul = obj.lastElementChild;
        ul.style.height = "0px";
        var $height = ul.scrollHeight;
        var $type;
        obj.onmouseenter = function () {
            $type = "展开";
            zhankai();
            function zhankai() {
                var $num = parseFloat(ul.style.height);
                $num += 1;
                ul.style.height = $num + "px";
                if($num < $height){
                    if($type == "展开"){
                        setTimeout(zhankai,1)
                    }
                }else{
                    ul.style.height = $height + "px";
                }
            }
        }
        obj.onmouseleave = function () {
            $type = "收缩";
            shousuo();
            function shousuo() {
                var $num = parseFloat(ul.style.height);
                $num -= 1;
                ul.style.height = $num + "px";
                if($num > 0){
                    if($type == "收缩"){
                        setTimeout(shousuo,1)
                    }
                }else{
                    ul.style.height = "0px";
                }
            }
        }
    }
}