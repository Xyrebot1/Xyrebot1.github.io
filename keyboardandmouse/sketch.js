// p5js Simple Draw Thingy
// Xyre Abelanes
// Feb 26, 2018

let sizeX;
let sizeY;
let squareSize;
let circleSize;
let triangleSizeH;
let triangleSizeV;
let bGC1;
let bGC2;
let bGC3;
let xLoc1;
let yLoc1;
let xLoc2;
let yLoc2;
let xLoc3;
let yLoc3;
let xLoc4;
let yLoc4;
let mode;
let alternate;
let colour1;
let colour2;
let colour3;
let colour1S;
let colour2S;
let colour3S;
let colour1C;
let colour2C;
let colour3C;
let colour1TH;
let colour2TH;
let colour3TH;
let colour1TV;
let colour2TV;
let colour3TV;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  // the size of the shape
  sizeX = 50;
  sizeY = 50;
  // the colour of the background
  bGC1 = 255;
  bGC2 = 255;
  bGC3 = 255;
  // list of locations for the different shapes
  xLoc1 = [];
  yLoc1 = [];
  xLoc2 = [];
  yLoc2 = [];
  xLoc3 = [];
  yLoc3 = [];
  xLoc4 = [];
  yLoc4 = [];
  // list of sizes for the different shapes
  squareSize = [];
  circleSize = [];
  triangleSizeH = [];
  triangleSizeV = [];
  // mode for shapes
  mode = 1;
  // for rotating the triangle piece
  alternate = false;
  // colour for the shapes
  colour1 = 255;
  colour2 = 0;
  colour3 = 0;
  // list of colours for the different shapes
  colour1S = [];
  colour2S = [];
  colour3S = [];
  colour1C = [];
  colour2C = [];
  colour3C = [];
  colour1TH = [];
  colour2TH = [];
  colour3TH = [];
  colour1TV = [];
  colour2TV = [];
  colour3TV = [];

}

function draw() {
  background(bGC1, bGC2, bGC3);
  fill(colour1, colour2, colour3);
  noStroke();
  // draws the squares
  for (let s = 0; s < xLoc1.length; s += 1) {
    fill(colour1S[s], colour2S[s], colour3S[s]);
    rect(xLoc1[s] - squareSize[s] / 2, yLoc1[s] - squareSize[s] / 2, squareSize[s], squareSize[s]);
    fill(colour1, colour2, colour3);
  }
  // draws the circles
  for (let c = 0; c < xLoc2.length; c += 1) {
    fill(colour1C[c], colour2C[c], colour3C[c]);
    ellipse(xLoc2[c], yLoc2[c], circleSize[c]);
    fill(colour1, colour2, colour3);
  }
  // draws the horintal version of the triangles
  for (let tH = 0; tH < xLoc4.length; tH += 1) {
    fill(colour1TH[tH], colour2TH[tH], colour3TH[tH]);
    triangle(xLoc4[tH] + triangleSizeH[tH] / 2, yLoc4[tH], xLoc4[tH] - triangleSizeH[tH] / 2, yLoc4[tH] + triangleSizeH[tH], xLoc4[tH] - triangleSizeH[tH] / 2, yLoc4[tH] - triangleSizeH[tH]);
    fill(colour1, colour2, colour3);
  }
  // draws the vertical version of the triangles
  for (let tV = 0; tV < xLoc3.length; tV += 1) {
    fill(colour1TV[tV], colour2TV[tV], colour3TV[tV]);
    triangle(xLoc3[tV], yLoc3[tV] + triangleSizeV[tV] / 2, xLoc3[tV] + triangleSizeV[tV], yLoc3[tV] - triangleSizeV[tV] / 2, xLoc3[tV] - triangleSizeV[tV], yLoc3[tV] - triangleSizeV[tV] / 2);
    fill(colour1, colour2, colour3);
  }
  // mode for square
  if (mode === 1) {
    rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
  }
  // mode for circle
  if (mode === 2) {
    ellipse(mouseX, mouseY, sizeX);
  }
  // mode for triangle
  if (mode === 3) {
    if (alternate) {
      triangle(mouseX + sizeX / 2, mouseY, mouseX - sizeX / 2, mouseY + sizeY, mouseX - sizeX / 2, mouseY - sizeY);
    }
    else {
      triangle(mouseX, mouseY + sizeY / 2, mouseX + sizeX, mouseY - sizeY / 2, mouseX - sizeX, mouseY - sizeY / 2);
    }
  }
}

function mousePressed() {
  // adds in values in the lists
  if (mouseButton === LEFT) {
    fill(colour1, colour2, colour3);
    noStroke();
    if (mode === 1) {
      rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
      append(xLoc1,mouseX);
      append(yLoc1,mouseY);
      append(squareSize,sizeX);
      append(colour1S, colour1);
      append(colour2S, colour2);
      append(colour3S, colour3);
    }
    if (mode === 2) {
      ellipse(mouseX, mouseY, sizeX);
      append(xLoc2,mouseX);
      append(yLoc2,mouseY);
      append(circleSize,sizeX);
      append(colour1C, colour1);
      append(colour2C, colour2);
      append(colour3C, colour3);
    }
    if (mode === 3) {
      if (alternate) {
        triangle(mouseX + sizeX / 2, mouseY, mouseX - sizeX / 2, mouseY + sizeY, mouseX - sizeX / 2, mouseY - sizeY);
        append(xLoc4,mouseX);
        append(yLoc4,mouseY);
        append(triangleSizeH,sizeX);
        append(colour1TH, colour1);
        append(colour2TH, colour2);
        append(colour3TH, colour3);
      }
      else {
        triangle(mouseX, mouseY + sizeY / 2, mouseX + sizeX, mouseY - sizeY / 2, mouseX - sizeX, mouseY - sizeY / 2);
        append(xLoc3,mouseX);
        append(yLoc3,mouseY);
        append(triangleSizeV,sizeX);
        append(colour1TV, colour1);
        append(colour2TV, colour2);
        append(colour3TV, colour3);
      }
    }
  }
  // changes the mode
  if (mouseButton === RIGHT) {
    if (mode < 3) {
      mode += 1;
    }
    else {
      mode = 1;
    }
  }
}

function keyTyped() {
  // white background
  if (key === "w") {
    bGC1 = 255;
    bGC2 = 255;
    bGC3 = 255;
  }
  // black background
  else if (key === "b") {
    bGC1 = 0;
    bGC2 = 0;
    bGC3 = 0;
  }
  // random background
  if (key === "r") {
    bGC1 = random(255);
    bGC2 = random(255);
    bGC3 = random(255);
  }
  // for changing triangle mode (horizontal or vertical)
  else if (key === "a") {
    alternate = !alternate;
  }
  // changes the colour of the shape
  if (key === "1") {
    if (colour1 < 255) {
      colour1 += 15;
    }
    else if (colour1 === 255) {
      colour1 = 0;
    }
  }
  else if (key === "2") {
    if (colour2 < 255) {
      colour2 += 15;
    }
    else if (colour2 === 255) {
      colour2 = 0;
    }
  }
  if (key === "3") {
    if (colour3 < 255) {
      colour3 += 15;
    }
    else if (colour3 === 255) {
      colour3 = 0;
    }
  }
}
// changess the size of the shape
function mouseWheel() {
  sizeX += event.delta / 4;
  sizeY += event.delta / 4;
  return false;
}
