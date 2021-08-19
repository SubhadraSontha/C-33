var girl, girl_img;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  girl_img = loadImage("Girl.png");
}


function setup() {
  createCanvas(800,400);
girl = createSprite(400,250,100,100);
girl.addImage(girl_img);
girl.scale = 0.5
  
}

function draw() {
  background(backgroundImg);
  
  drawSprites();
}
// START HERE, THERE ARE SOME PROBLEMS HERE TO FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!
function keyPressed(){
  if(keyCode === 32) {
    girl.velocityX = -13;
  }

  if(girl.x < 150) {
    girl.velocityX = 0;
  }
}
// GO TO THIS CHUNK, THERE ARE TONS OF PROBLEMS TO FIX!!!!!!!!!!!!!!!!!!!!