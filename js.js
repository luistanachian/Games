const pj = document.getElementById('pj');

var intTop = 0;
var intLeft = 0;
const pxMov = 1;
var mov = 32;

var width = document.body.offsetWidth;
var body = document.body,  html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


setInterval(function () { Mover(); }, 1);


//document.addEventListener("keydown", logKey, false);
document.addEventListener("keypress", logKey, false);
//document.addEventListener("keyup", logKey, false);

function logKey(event) {
    var key = event.keyCode;
    if(key == 115 || key == 119 || key == 100 || key == 97  || key == 32) {
        mov = key;
        Mover();
    }
}

function Mover()
{
    if((height - 10) >=  intTop && intTop > 0){
        if(mov == 115) {
            intTop += pxMov;
        }
        else if(mov == 119) {
            intTop -= pxMov;
        } 
    }
    else if(intTop == 0 && mov == 115) {
        intTop += pxMov;
    }
    else if((height - 10) <=  intTop && mov == 119){
        intTop -= pxMov;
    }




    if((width - 10) >=  intLeft && intLeft > 0){
        if(mov == 100) {
            intLeft += pxMov;
        }
        else if(mov == 97) {
            intLeft -= pxMov;
        }
    }
    else if(intLeft == 0 && mov == 100){
        intLeft += pxMov;
    }
    else if((width - 10) <=  intLeft && mov == 97) {
        intLeft -= pxMov;
    }

    pj.style.top = intTop + 'px';
    pj.style.left = intLeft + 'px';
}