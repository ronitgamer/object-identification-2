img="";
Status="";
function setup(){
canvas=createCanvas(640,460);
canvas.center()

}
function preload(){
img=loadImage("dog_cat.jpg");
objectDetector=ml5.objectDetector("cocssd",modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw(){
image(img,0,0,640,460);
fill("#ff0000");
text("Dog",75,47);
noFill();
stroke("#ff0000");
rect(30,60,450,350);

fill("#008000");
text("Cat",355,100);
noFill();
stroke("#008000");
rect(200,75,450,350);

fill("#8F2EA5");
text("Bowl",300,355);
noFill();
stroke("#8F2EA5");
rect(150,300,250,350);
}

function modelLoaded(){
console.log("Model loaded!");
Status=true;
objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){

    console.log(error);
}
console.log("results")





}
