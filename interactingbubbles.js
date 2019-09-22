function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballY = 30;
var ballSpeed = 10;
var ballA = 50;

var ballX2 = 370;
var ballY2 = 370;
var ballSpeed2 = 15;
var ballB = 50;

var ballR = 255;
var ballG = 0;
var ballF = 0;
var ballR2 = 0;
var ballG2 = 0;
var ballF2 = 255;

function draw() {
  background(220);

  fill(ballR, ballG, ballF);
  ellipse(ballX, ballY, ballA);

  fill(ballR2, ballG2, ballF2);
  ellipse(ballX2, ballY2, ballB);

  ballY = ballY + ballSpeed;
  ballX = ballX + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 400) {
    ballSpeed = -10;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -15;
  }
  
  
  
    if (ballX >= 400) {
    ballR = ballR + 25;
  }

  if (ballX2 >= 400) {
    ballG = ballG + 30;
  }
  

  
  //ball 1 grow
  if (ballX == ballX2) {
    ballA = ballA + 3;
  }
  
  //ball 2 color change
  if (ballX2 == ballX) {
    ballR2 = ballR
    ballG2 = ballG
    ballF2 = ballR2
    ballG = 100
  }
  
  
    if (ballX <= 0) {
    ballR = ballR - ballG;
  }
  
  if (ballX2 <= 0) {
    ballF = ballF + 5;
  }
  
  
  
  if (ballX <= 0) {
    ballSpeed = 10;
  }
  
  if (ballX2 <= 0) {
    ballSpeed2 = 15;
  }
  
  if (ballR == ballF) {
    ballG = ballF = 0;
  }
  
  if (ballF2 >= ballG) {
    ballR2 = ballF - ballG;
  }
  
  if (ballG = ballR) {
    ballF = ballF2 + ballR;
  }
    
  if (ballR >= ballF) {
    ballG = ballG2 - 10;
  }
  
  if (ballG == ballG2) {
    ballR2 = ballR2 + ballF
    ballR = ballF + 50
    ballG = ballG - 77
  }

}
