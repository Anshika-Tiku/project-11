var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png", "ship-2.png")


}

function setup(){
  createCanvas(400,400);
  background("blue");

 
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  


  if(keyWentDown("up")){
    ship.velocityY=-3
  }
  

  if(keyWentDown("down")){
    ship.velocityY=3
  }
 

  if(keyWentDown("right")){
    ship.velocityX=3
  }
  


  if(keyWentDown("left")){
    ship.velocityX=-3
  }
  

  drawSprites();
}
