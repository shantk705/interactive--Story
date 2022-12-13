function myFunction() {
    if(document.getElementById("answer").value==24){
        document.getElementById("answer").style.border="5px solid green"
        alert("Congratulations!!! You pass the second level and now we are going to inform you a new information about Smith:Agent Smith is a former Agent of the Matrix and the main antagonist of the trilogy. After being initially destroyed by Neo, he became an Exile and manifested as a computer virus with the uncanny ability to copy himself over the minds of Bluepills, Redpills and programs alike." ) 

        if (confirm = true) {
          
          location.href="/third-level/binary.html"
    }
}
    else if(document.getElementById("answer").value!=24){
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
      location.href="/Next-level/matrices.html"
  }
  secs--;
  var timer= setTimeout('countDown('+secs+',"'+elem+'")',1000);
}