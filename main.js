status1='';

function preload(){

}

function setup(){
    canvas=createCanvas(400, 400)
    canvas.center();
}

function draw(){
    image(canvas, 0, 0, 400, 400);
}

function start(){
    objectDetector1=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Detecting Objects";
}


function modelLoaded(){
    console.log('The model has been loaded');
    status1=true;
}