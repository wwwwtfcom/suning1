window.onload=function(){
    let box=document.querySelector('.banner_center');
    let ban=document.querySelectorAll('.banner_center li');
    let num=0;
    let left=document.querySelector('.zuojian');
    let right=document.querySelector('.youjian');
    let ju=document.querySelectorAll('.juji');
    let yeju=document.querySelectorAll('.xxk .bottom_five');
    let x=document.querySelectorAll('.br_word');
    let xx=document.querySelectorAll('.xxk1 li');
    let fls=document.querySelectorAll('.tl');
    for(let i=0;i<fls.length;i++){
        console.log(i)
    }
    function move(){
        num++;
        if(num>ban.length-1){
            num=0;
        }
        ban.forEach(function(val,index){
            val.classList.remove('active');
        });
        ban[num].classList.add('active')
    }
    let t=setInterval(move,1000);
    box.onmouseover=function(){
        clearInterval(t);
    };
    box.onmouseout=function(){
        t=setInterval(move,1000);
    };
    right.onclick=function(){
        move();
    };
    left.onclick=function(){
        num--;
        if(num<0){
            num=ban.length-1;
        }
        ban.forEach(function (val) {
            val.classList.remove('active');
        });
        ban[num].classList.add('active');
    }
    ju.forEach(function(val,index){
        val.onmouseover=function(){
            ju.forEach(function(val,index){
                val.classList.remove('active')
            })
            val.classList.add('active');
            yeju.forEach(function(val,index){
                val.classList.remove('active')
            })
            yeju[index].classList.add('active')
        }
    })
    x.forEach(function(val,index){
        val.onmouseover=function(){
            x.forEach(function(val,index){
                val.classList.remove('active')
            })
            val.classList.add('active');
            xx.forEach(function(val,index){
                val.classList.remove('active')
            })
            xx[index].classList.add('active')
        }
        val.onmouseout=function(){
            xx.forEach(function(val,index){
                val.classList.remove('active')
            })
        }
    })
}