document.getElementById("myvideo").style.visibility = "hidden";

function play_video()
{
  document.getElementById("myvideo").play();
  document.getElementById("myvideo").style.visibility="visible";
  document.getElementById("myvideo").style.opacity="1";
  document.getElementById("myvideo").style.width="52%";
  document.getElementById("myvideo").style.height="800px";


}
  



function videoEnded() {
    location.href="../LEVEL5/index.html";
 }

 function bluePill(){
  location.href="/MATRIX/RED-LEVELS/LEVEL8/missing-number.html";
 }