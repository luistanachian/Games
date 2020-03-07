const pj=document.getElementById('pj'),px=1;
var tp=0,lf=0,key=32,width=document.body.offsetWidth,body=document.body,html=document.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);
setInterval(function(){Mover();},1);
document.addEventListener("keypress", logKey, false);

function logKey(event) {
    key = event.keyCode;
    if(key == 115 || key == 119 || key == 100 || key == 97  || key == 32) {
        Mover();
    }
}

function Mover()
{
    if((height - 10) >=  tp && tp > 0){
        if(key == 115) {
            tp += px;
        }
        else if(key == 119) {
            tp -= px;
        } 
    }
    else if(tp == 0 && key == 115) {
        tp += px;
    }
    else if((height - 10) <=  tp && key == 119){
        tp -= px;
    }




    if((width - 10) >=  lf && lf > 0){
        if(key == 100) {
            lf += px;
        }
        else if(key == 97) {
            lf -= px;
        }
    }
    else if(lf == 0 && key == 100){
        lf += px;
    }
    else if((width - 10) <=  lf && key == 97) {
        lf -= px;
    }

    pj.style.top = tp + 'px';
    pj.style.left = lf + 'px';
}