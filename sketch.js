
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
var background,backgroundImage
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage=loadImage("jungle.jpg");
}



function setup() {
  createCanvas(400,400);
  background=createSprite(200,200);
  background.addImage(backgroundImage);
  //background.scale=2;
monkey=createSprite(80,350,20,20);
monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  score=0;
  ground=createSprite(400,395,900,10);
  //ground.velocityX=-4;
  //ground.x=ground.width/2;
  //console.log(ground.x);
  ground.visible=false;
  background.velocityX=-4;
  obstacleGroup=new Group();
  bananaGroup=new Group();
}


function draw() {
//background("white");
  if (background.x < 0){
      background.x = background.width/2;
    }
  
  if(keyDown("space")) {
        monkey.velocityY = -20;
        
    }
  monkey.velocityY = monkey.velocityY + 0.8
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      score=score+2;
      
    }
  
  if(score==10){
     monkey.scale=0.15
     }
   if(score==20){
     monkey.scale=0.2
     }
   if(score==30){
     monkey.scale=0.25
     }
   if(score==40){
     monkey.scale=0.3
     }
  if(monkey.isTouching(obstacleGroup)){
     monkey.scale=0.1;
     }
    //add gravity
    
  console.log(monkey.y);
  monkey.collide(ground);
  spawnObstacles();
  spawnBanana();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 250,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+survivalTime, 10,50);
}

function spawnObstacles(){
   if(frameCount%300==0){
      Obstacle=createSprite(400,355,10,10);
     Obstacle.addImage(obstacleImage);
     Obstacle.scale=0.15;
     Obstacle.velocityX=-5;
     obstacleGroup.add(Obstacle);
      }
}


function spawnBanana(){
   if(frameCount%150==0){
      banana=createSprite(400,270,10,10);
     banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.velocityX=-7;
     bananaGroup.add(banana);
      }
}


