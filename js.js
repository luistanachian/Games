const pj=document.getElementById('pj'),pxMov=1;
var tp=0,lf=0,mov=32,width=document.body.offsetWidth,body=document.body,html=document.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);
setInterval(function(){Mover();},1);
document.addEventListener("keypress", logKey, false);

function logKey(event) {
    var key = event.keyCode;
    if(key == 115 || key == 119 || key == 100 || key == 97  || key == 32) {
        mov = key;
        Mover();
    }
}

function Mover()
{
    if((height - 10) >=  tp && tp > 0){
        if(mov == 115) {
            tp += pxMov;
        }
        else if(mov == 119) {
            tp -= pxMov;
        } 
    }
    else if(tp == 0 && mov == 115) {
        tp += pxMov;
    }
    else if((height - 10) <=  tp && mov == 119){
        tp -= pxMov;
    }




    if((width - 10) >=  lf && lf > 0){
        if(mov == 100) {
            lf += pxMov;
        }
        else if(mov == 97) {
            lf -= pxMov;
        }
    }
    else if(lf == 0 && mov == 100){
        lf += pxMov;
    }
    else if((width - 10) <=  lf && mov == 97) {
        lf -= pxMov;
    }

    pj.style.top = tp + 'px';
    pj.style.left = lf + 'px';
}