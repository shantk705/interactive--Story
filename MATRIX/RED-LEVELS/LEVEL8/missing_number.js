
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}


function myFunction() {
    if(document.getElementById("answer").value==6){
       
        document.getElementById("answer").style.border="5px solid green";

          location.href="../LEVEL8/missing-number-act.html"
  
    }
  
    
    else if(document.getElementById("answer").value!=6){
   document.getElementById("answer").style.border="5px solid red"
  }
}
  function countDown(secs,elem){
    var element=document.getElementById(elem);
    element.innerHTML="You still have "+secs+" seconds to complete the challenge";
    element.style.color="#32CD32"
    if(secs<1){
        clearTimeout(timer);
        element.innerHTML='<h2>Game Over!!! But you have another try</h2>';
        alert("Gameover! But you have another chance to search for more clues about Smith" )
        location.href="../LEVEL8/missing-number.html"
    }
    secs--;
    var timer= setTimeout('countDown('+secs+',"'+elem+'")',1000);
  }