document.getElementById('container').style.visibility = 'hidden';

function lol(){
    document.getElementById('container').style.visibility = 'visible';
    document.getElementById('container').style.opacity = '1';

}

document.getElementById('vid').style.visibility = 'hidden';

function loading(){
    document.getElementById('load').style.width = '16%';
    setTimeout(function(){
        document.getElementById('vid').style.visibility = 'visible'
    }, 4500)
}
 