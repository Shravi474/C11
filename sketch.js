var path, pathImg
var boy, boyImg
var leftB, rightB


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.scale = 1
  path.velocityY = 3

  boy = createSprite(180,340,30,30)
  boy.addAnimation("JakeRunning",boyImg)
  boy.scale = 1

  leftB = createSprite(0,0,100,800)
  leftB.visible = false
  rightB = createSprite(410,0,100,800)
  rightB.visible = false

}

function draw() {
  background(0);
  boy.x = World.mouseX
  boy.collide(leftB)
  boy.collide(rightB)
  if(path.y>400){
    path.y = height/2

  }

  drawSprites()
}
