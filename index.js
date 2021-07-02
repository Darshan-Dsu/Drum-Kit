var btn=document.querySelectorAll(".drum");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        
        var txt=this.textContent;
        var s;
        addGraphics(txt);
        if(txt==="w"){
           s="sounds/crash.mp3";
        }
        else if(txt==="a"){
            s="sounds/kick-bass.mp3";
        }
        else if(txt==="s"){
             s="sounds/snare.mp3";
        }
        else if(txt=="d"){
            s="sounds/tom-1.mp3";
        }
        else if(txt=="j"){
            s="sounds/tom-2.mp3";
        }
        else if(txt=="k"){
            s="sounds/tom-3.mp3";
        }
        else if(txt=="l"){
            s="sounds/tom-4.mp3";
        }
var audio = new Audio(s);
        audio.play();
        
    })
}

var btn=document.querySelectorAll(".drum");
for(var i=0;i<btn.length;i++){
document.addEventListener("keypress",function(event){
    // console.log(event);
    var txt=event.key;
    var s;
    addGraphics(txt);
        if(txt==="w"){
           s="sounds/crash.mp3";
        }
        else if(txt==="a"){
            s="sounds/kick-bass.mp3";
        }
        else if(txt==="s"){
             s="sounds/snare.mp3";
        }
        else if(txt=="d"){
            s="sounds/tom-1.mp3";
        }
        else if(txt=="j"){
            s="sounds/tom-2.mp3";
        }
        else if(txt=="k"){
            s="sounds/tom-3.mp3";
        }
        else if(txt=="l"){
            s="sounds/tom-4.mp3";
        }
var audio = new Audio(s);
        audio.play();
        
    })
}

function addGraphics(char){
    var s=document.querySelector("."+char);
    s.classList.add("pressed");
    // 
    setTimeout(function(){
        s.classList.remove("pressed");
    },100)
}

