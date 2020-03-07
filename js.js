const o=document.getElementById('o'),px=1,time=1;
var tp=0,lf=0,ohw=10,key=32,w=119,s=115,d=100,a=97,space=32,width=document.body.offsetWidth,body=document.body,html=document.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);
setInterval(function(){Mover();},time);
document.addEventListener("keypress", logKey, false);
function logKey(e) {
    key=e.keyCode;
    if(key==w || key==s || key==d || key==a || key==space) Mover();
}

function Mover()
{
    if((height-ohw)>=tp && tp>0){
        if(key==s) tp+=px;
        else if(key==w) tp-=px;
    }
    else if(tp==0 && key==s) tp+=px;
    else if((height-ohw)<=tp && key==w) tp-=px;

    if((width-ohw)>=lf && lf>0){
        if(key==d) lf+=px;
        else if(key==a) lf-=px;
    }
    else if(lf==0 && key==d) lf+=px;
    else if((width-ohw)<=lf && key==a)  lf-=px;

    o.style.top=tp+'px';
    o.style.left=lf+'px';
}