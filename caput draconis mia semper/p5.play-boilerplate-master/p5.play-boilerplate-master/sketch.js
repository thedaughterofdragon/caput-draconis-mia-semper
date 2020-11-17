var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);


  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect=createSprite(600,200,50,50); 
  movingRect.shapeColor="green" 
}

function draw() {
  background("blue");
  console.log(movingRect.x-fixedRect.x)
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
       ){
    fixedRect.shapeColor="yellow"
    movingRect.shapeColor="pink"

  }
  else{
    fixedRect.shapeColor="red"
    movingRect.shapeColor="green"

  }
  drawSprites();
}