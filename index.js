var myAudio= new Audio('sound/about-me.m4a');
document.querySelector(".about-me-btn").addEventListener("click",function(){

    myAudio.paused ? myAudio.play() : myAudio.pause();
      
});