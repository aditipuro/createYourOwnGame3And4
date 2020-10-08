var fish1img, fish2img, dolphinImg, sharkImg, turtleImg, oceanImg;
var dock, dockImg;
var trasher, trasherImg;
var bottleImg, glassImg, canImg, bagImg;
var diverImg, diver;
function preload()  {
  fish1img = loadImage("images/fishOrange.png"); 
  fish2img = loadImage("images/fishBlue.png");
  dolphinImg = loadImage("images/dolphin.png");
  sharkImg = loadImage("images/shark.png");
  turtleImg = loadImage("images/turtle.png");
  oceanImg = loadImage("images/oceanBgFinal.png");
  dockImg  = loadImage("images/dock-removebg-preview.png");
  trasherImg = loadImage("images/trasher.png");
  bottleImg = loadImage("images/plasticBottle.png");
  glassImg = loadImage("images/glassBottle.png");
  canImg = loadImage("images/sodaCan.png");
  bagImg = loadImage("images/chipBag.png");
  diverImg = loadImage("images/diver.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  dock = createSprite(400, 350, 20, 20);
  dock.addImage(dockImg);
  dock.scale = 2;

  trasher = createSprite(500, 290, 20, 20);
  trasher.addImage(trasherImg);
  trasher.scale = 0.1;

  diver = createSprite(1200, 500, 20, 20);
  diver.addImage(diverImg);
  diver.scale = 0.7;
  
}

function draw() {
  background(oceanImg); 
 //if (diver.y >= 450) {
  diver.y = mouseY;
 // } 
  spawnCreature();
  spawnTrash();
  drawSprites();
}

function spawnCreature()  {
  if (frameCount%120 === 0) {
    creature = createSprite(0, random(400, 800), 20, 20);
    var x = Math.round(random(1, 5));
    creature.velocityX = 7;

    switch(x) {
      case 1: creature.addImage(fish1img);
      break;

      case 2: creature.addImage(fish2img);
      break;

      case 3: creature.addImage(dolphinImg);
      break;

      case 4: creature.addImage(sharkImg);
      break;

      case 5: creature.addImage(turtleImg);
      break;

      default: break;
     }
     creature.scale = 0.2;
     creature.lifetime = 1920/7;
  }
}

function spawnTrash() {
  if (frameCount%100 === 0) {
    trash = createSprite(455, 250, 20, 20);
    var x = Math.round(random(1, 4));
    trash.velocityY = random(2, 6);
    trash.velocityX = random(2, 6);
    switch(x) {
      case 1: trash.addImage(bottleImg);
      break;

      case 2: trash.addImage(glassImg);
      break;

      case 3: trash.addImage(canImg);
      break;

      case 4: trash.addImage(bagImg);
      break;

      default: break;
     }
     trash.scale = 0.3;


  }
}