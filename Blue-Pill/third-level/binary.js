function myFunction() {
    if(document.getElementById("answer").value==697){
        document.getElementById("answer").style.border="5px solid green"
        alert("OOPS! There is a message from Smith to you: We're not here because we're free. We're here because we're not free. There's no escaping reason. No denying purpose. Because as we both know without purpose, we would not exist." ) 
        //go to next level
        if (confirm = true) {
          location.href="Raoul here you should addddddddddddd theeee  Rifaat url"
    }
}
    else if(document.getElementById("answer").value!=697){
   document.getElementById("answer").style.border="5px solid red"
  }
}
function countDown(secs,elem){
  var element=document.getElementById(elem);
  element.innerHTML="You still have "+secs+" seconds to complete the challenge";
  element.style.color="#32CD32"
  if(secs<1){
      clearTimeout(timer);
      alert("Gameover! But you have another chance to search for more clues about Smith" )
      location.href="/third-level/binary.html"
  }
  secs--;
  var timer= setTimeout('countDown('+secs+',"'+elem+'")',1000);
}