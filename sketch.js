const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var snow, boy,boyimage;
var snowflake,snowflakeImg
var test;

 function getBackGroundImg(){
  
  backgroundImg = loadImage ("snow2.jpg");

}

function preload() {
  getBackGroundImg();
  boyimage=loadImage("boy1.png");
  snowflakeImg = loadImage("snow4.webp");
}

function setup(){
    createCanvas(1000,500)
    engine = Engine.create()
    world = engine.world

    ground = new Ground(600,height,1200,20);
   


    boy1=createSprite(680,360,600,10);
    boy1.addImage("boyimage",boyimage);
    boy1.scale = 0.5;
  
 
}


function draw(){

    background(backgroundImg);     
  
    Engine.update(engine)

    ground.display();
    drawSprites();
    createSnowflake();
    console.log(boy1.x)
   
    
   


  

  if(keyCode === 37 && boy1.x > 100){
 
    boy1.x = boy1.x - 10
 
   
}

if(keyCode === 39 && boy1.x < 900){
 
  boy1.x = boy1.x + 10
 
}

}

function mouseDragged(){
   // Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){
//rope.shoot()

}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
