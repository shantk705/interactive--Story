document.getElementById("myvideo").style.visibility = "hidden";

function play_video()
{
  document.getElementById("myvideo").play();
  document.getElementById("myvideo").style.visibility="visible";
  document.getElementById("myvideo").style.opacity="1";
  document.getElementById("myvideo").style.width="80%";
  document.getElementById("myvideo").style.height="740px";


}
  



function videoEnded() {
    location.href="../LEVEL7/index.html";
 }