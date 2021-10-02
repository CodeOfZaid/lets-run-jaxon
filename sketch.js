 var jakeImg,pathImg,path,jake,left_boundary,right_boundary,coin,coinImg,bomb,bombImg,energyDrink,energyDrinkImg,power,powerimg;

function preload(){
  //pre-load images
  jakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
 pathImg = loadImage("path.png");
coinImg = loadImage("coin.png");
bombImg = loadImage("bomb.png");
energyDrinkImg = loadImage("energyDrink.png");
powerimg = loadImage("power.png");

}

function setup(){
  createCanvas(600,600);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=5;
path.scale=1.2;
jake=createSprite(180,340,50,170);
jake.addAnimation("running",jakeImg);
coin=createSprite(200,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;
coin=createSprite(100,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;
coin=createSprite(300,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;
left_boundary=createSprite(0,300,100,600)
right_boundary=createSprite(390,300,80,600)
left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
path.velocityY=5
jake.x=World.mouseX;






//code to reset the background
if (path.y>400) {
  path.y = height/2;
}
jake.collide(left_boundary);
jake.collide(right_boundary);
edges=createEdgeSprites();
 jake.collide(edges[3]); 
drawSprites;
}
