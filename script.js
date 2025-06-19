 
    'use strict';
const a = document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerText);
        buttanimation(this.innerText);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttanimation(event.key);
});

function makesound(key){
switch (key) {
        case "w":
            var sound = new Audio("./tom-4.mp3");
            sound.play();           
            break;
        case "a":
            var sound = new Audio("./tom-1.mp3");
            sound.play(); 
            break;
        case "s":
            var sound = new Audio("./tom-2.mp3");
            sound.play(); 
            break;
        case "d":
            var sound = new Audio("./tom-3.mp3");
            sound.play(); 
            break;
        case "j":
            var sound = new Audio("./snare.mp3");
            sound.play(); 
            break;
        case "k":
            var sound = new Audio("./crash.mp3");
            sound.play(); 
            break;
        case "l":
            var sound = new Audio("./kick-bass.mp3");
            sound.play(); 
            break;        
        default:
           alert("press w,a,s,j,k,l to play.");
  }

}

function buttanimation(key){
    let butt=document.querySelector("."+key);
    butt.classList.add("pressed");
    setTimeout(function(){
        butt.classList.remove("pressed")
    },400);
}