var frect,mrect;

function setup() {
  createCanvas(1200,800);
   frect=createSprite(600,400,50,80);
   frect.shapeColor="green";
   mrect=createSprite(300,400,80,30);
   mrect.shapeColor="green";

  // frect.debug=true;
  //mrect.debug=true;
}


function draw() {
  background(255,255,255);  
if(mrect.x-frect.x < frect.width/2+mrect.width/2
  && frect.x-mrect.x < frect.width/2+mrect.width/2
  &&mrect.y-frect.y < frect.height/2+mrect.height/2
  && frect.y-mrect.y < frect.height/2+mrect.height/2){
frect.shapeColor="red";
mrect.shapeColor="red";
}
else {
  frect.shapeColor="green";
  mrect.shapeColor="green";
}
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  drawSprites();
}
