var canvas;
var backgroundImage;
var allPlayers;
var bgImg;
var database;
var form, player;
var playerCount, gameState;
var c1I,c2I,t1I;
var c1,c2;
var cars = [];


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  c1I = loadImage("./assets/car1.png");
  c2I = loadImage("./assets/car2.png");
  t1I = loadImage("./assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  
  
  bgImg = backgroundImage
}

function draw() {
  background(bgImg);

  if (playerCount===2){
    game.updateState(1);
  }
  if (gameState===1){
    game.play();
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

