var bg
var cat, mouse;

function preload() {
    //load the images here
    bgimg = loadImage("./images/garden.png");
    mouseimg1 = loadAnimation("./images/mouse1.png");
    mouseanim = loadAnimation("./images/mouse2.png","./images/mouse3.png");
    mouseimg4 = loadAnimation("./images/mouse4.png");
    catimg1 = loadAnimation("./images/cat1.png");
    catanim = loadAnimation("./images/cat2.png","./images/cat3.png");
    catimg4 = loadAnimation("./images/cat4.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,680,10,10);
    cat.scale = 0.2
    mouse = createSprite(150,680,10,10);
    mouse.scale = 0.2

    cat.addAnimation("standing",catimg1);
    cat.addAnimation("walking",catanim)
    cat.addAnimation("standing2",catimg4)
    mouse.addAnimation("chesse",mouseimg1);
    mouse.addAnimation("taunting",mouseanim);
    mouse.addAnimation("glass",mouseimg4);
mouse.debug = true
cat.debug = true

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x === mouse.x+100)
    {
     mouse.changeAnimation("glass");
     cat.changeAnimation("standing2");
     cat.velocityX = 0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === 32)
  {
    cat.velocityX = -5
    cat.changeAnimation("walking");
    mouse.changeAnimation("taunting");
  }


}
