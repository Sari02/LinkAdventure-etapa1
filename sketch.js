var bgImg; 
var link, linkImgA, linkImgF, linkImgD, linkImgI;
var linkMA, linkMD, linkMF, linkMI;
var paredH1;
var paredV1;
var limite1, limite2, limite3, limite4, limite5;

var gameState=0;


function preload(){
  bgImg = loadImage("assets/Map.png");

  //Animaciones para link estatico
  linkImgA = loadAnimation("assets/linkA.png");
  linkImgD = loadAnimation("assets/linkD.png");
  linkImgF = loadAnimation("assets/linkF.png");
  linkImgI = loadAnimation("assets/linkI.png");

  //animaciones para link en movimiento
  linkMA = loadAnimation("assets/linkMA1.png","assets/linkMA2.png","assets/linkMA3.png","assets/linkMA4.png","assets/linkMA5.png","assets/linkMA6.png","assets/linkMA7.png","assets/linkMA8.png","assets/linkMA9.png","assets/linkMA10.png")
}

function setup(){

  createCanvas(1350,750);

  //sprites link
  link = createSprite(100, height-100, 50, 50);
  link.addAnimation("linkA",linkImgA);
  link.addAnimation("linkD",linkImgD);
  link.addAnimation("linkF",linkImgF);
  link.addAnimation("linkI",linkImgI);

  link.scale = 0.7;

  //sprites paredes
  //limites
  limite1 = createSprite(675, 720, 1350, 60);
  //paredes verticales
  paredV1 = createSprite(180, 575, 60, 200);
  //paredV1.visible = false;

  //paredes horizontales
  paredH1 = createSprite(730, 170, 150, 60);

  //sprites objetos

  //sprites enemigos

}

function draw() {
  
  background(bgImg);

  print(link.x);
  print(link.y);
        
  //movimiento
  if(keyDown("UP_ARROW")){
    link.y = link.y-3
  }
  if(keyDown("DOWN_ARROW")){
    link.y = link.y+3
  }
  if(keyDown("LEFT_ARROW")){
    link.x = link.x-3
  }
  if(keyDown("RIGHT_ARROW")){
    link.x = link.x+3
  }


   
  drawSprites();
        
}