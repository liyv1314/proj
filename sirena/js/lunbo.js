    var left = document.getElementById('leftBtn');
    var right = document.getElementById('rightBtn');
    var imglist = document.getElementById('lunbo');
    var images = imglist.firstElementChild.children;
    var btnlist = document.getElementById('btnlist');
    var btns = btnlist.children;
    timer1 = null;
    timer2 = null;
    timer3 = null;

    type = 'init';
    var n = 0;
    trans();
    function trans() {
        clearTimeout(timer3);
        if(n > 2){
            n = 0;
        }
        // imglist.firstElementChild.style.marginLeft = -n * 400 + 'px';
        for(var m = 0;m < btns.length;m++){
            btns[m].className = '';
        }
        btns[n].className = 'act';        

        if(n==0 && type=='init'){
            //暂停5s
            imglist.firstElementChild.style.marginLeft = '-1356px';
            type = 'notInit';
            n++;
            timer2 = setTimeout(trans,5000);
        }else{
            offset = -n * 1356;
            move = 0;
            transMove();
            function transMove(){
                if(move < 1356){
                    move+=12;
                    offset-=12;
                    imglist.firstElementChild.style.marginLeft = offset + 'px';
                    setTimeout(transMove,5);
                }
                else{
                    n++;
                    timer1 = setTimeout(trans,5000);

                }
            }
        }
    }


    for(var i = 0;i < btns.length;i++){
        btns[i].index = i;
        btns[i].onclick = function() {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            n = this.index;
            if(n > 2){
                n = 0;
            }
            for(var m = 0;m < btns.length;m++){
                btns[m].className = '';
            }
            btns[n].className = 'act';
            imglist.firstElementChild.style.marginLeft = -(n+1) * 1356 +'px';
            n++;
            timer3 = setTimeout(trans,5000);
        }
    }

    left.onclick = function() {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        n = document.getElementsByClassName('act')[0].index;
        for(var m = 0;m < btns.length;m++){
            btns[m].className = '';
        }
        n--;
        if(n < 0)
            n = 2;
        btns[n].className = 'act';
        imglist.firstElementChild.style.marginLeft = -(n+1) * 1356 +'px';
        n++;
        timer3 = setTimeout(trans,5000);
    }

    right.onclick = function() {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        // trans();
        n = document.getElementsByClassName('act')[0].index;    
        for(var m = 0;m < btns.length;m++){
            btns[m].className = '';
        }
        n++;
        if(n > 2)
            n = 0;
        btns[n].className = 'act';
        imglist.firstElementChild.style.marginLeft = -(n+1) * 1356 +'px';
        n++;
        timer3 = setTimeout(trans,3000);
    }