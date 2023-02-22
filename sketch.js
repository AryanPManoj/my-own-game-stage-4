let ground;
let bird;
var bird_img;
var bg_img;
var groundImg

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  bird_img = loadAnimation("assets/bird_1.png","assets/bird_2.png","assets/bird_3.png","assets/bird_4.png","assets/bird_6.png");
  bg_img = loadImage("assets/bgSky.png");
  groundImg=loadImage("assets/ground.png");
  pipe1Img=loadImage("assets/pipe1.png");
  pipe2Img=loadImage("assets/pipe2.png");
  pipe3Img=loadImage("assets/pipe3.png");
  pipe4Img=loadImage("assets/pipe4.png");
  pipe5Img=loadImage("assets/pipe5.png");
  pipeF_1Img=loadImage("assets/pipeF_1.png");
  pipeF_2Img=loadImage("assets/pipeF_2.png");
  pipeF_4Img=loadImage("assets/pipeF_4.png");
  pipeF_5Img=loadImage("assets/pipeF_5.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background("cyan")
  frameRate(80);
 ground=createSprite(width/2,height-100,width,100)
 ground.addImage(groundImg)
 ground.velocityX=-3
 ground.scale=1.5

  bird = createSprite(100,50,30,30);
  bird.addAnimation("bird_flying",bird_img);
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
 if(ground.x<0){
 ground.x=ground.width/2
 }
 if(keyDown("space")){
  bird.velocityY=-2
 }
 bird.velocityY+=0.05

  spawnPipes()
  spawnPipesF()

  drawSprites();
}
function spawnPipes(){
  if(frameCount%100===0){
    var pipe=createSprite(1400,height-100,20,30);
    pipe.velocityX= -4
    pipe.scale=0.8
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: pipe.addImage(pipe1Img);
              break;
      case 2:pipe.addImage( pipe2Img);
              break;
      case 3: pipe.addImage(pipe3Img);
              break;     
      case 4: pipe.addImage(pipe4Img);
              break;   
      case 5: pipe.addImage(pipe5Img);
              break;      
              
      default: break;
    }
  }
}
function spawnPipesF(){
  if(frameCount%100===0){
    var pipeF = createSprite(1400,height-700,20,30);
    pipeF.velocityX= -4
    pipeF.scale= 0.8
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: pipeF.addImage(pipeF_1Img);
             break;
      case 2:pipeF.addImage( pipeF_2Img);
             break;
     case 3: pipeF.addImage(pipeF_4Img);
             break;   
    case 4: pipeF.addImage(pipeF_5Img);
             break;    
             
    default: break;
    }
  }
}
