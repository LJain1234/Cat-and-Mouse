var bgImg;
var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    //load the images here

    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg4 = loadAnimation("cat4.png");
    mouseImg4 = loadAnimation("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
    }

    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseteasing");
        mouse.frameDelay = 25;
    }

    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning")
    }
  //For moving and changing animation write code here


}
