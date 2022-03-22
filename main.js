 var video="";
var status1="";
 function setup(){
canvas=createCanvas(400,400);
canvas.center();
}

function draw(){
image(video,0,0,400,400);
}

function preload(){
video=createVideo("video.mp4");    
video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
    }

    function modelLoaded(){
        console.log("modelLoaded");
        status1=true;
        video.loop();
        video.speed(1);
        video.volume(1);

    }