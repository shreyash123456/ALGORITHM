var object,object1

function setup() {
  createCanvas(800,400);
 object= createSprite(400, 200, 50, 50);
 object1=createSprite(400,300,50,50);
 object.shapeColor="red";
 object1.shapeColor="red";
  
}

function draw() {
  
  background("black");
  object.x=mouseX  
  object.y=mouseY
  console.log(object.x-object1.x);
  if(object.x-object1.x<object.width/2+object1.width/2&&object1.x-object.x<object.width/2+object1.width/2
    &&object.y-object1.y<object.width/2+object1.width/2&&object1.y-object.y<object.width/2+object1.width/2){
object.shapeColor="blue";
object1.shapeColor="blue";
  }
  else{
    object.shapeColor="red";
    object1.shapeColor="red";
       
  }
  drawSprites();
}