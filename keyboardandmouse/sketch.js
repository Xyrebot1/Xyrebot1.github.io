// p5js Mouse and Keyboard
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
let sizeX;
let sizeY;
let bGC1;
let bGC2;
let bGC3;
let shapes;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  sizeX = 50;
  sizeY = 50;
  bGC1 = 255
  bGC2 = 255
  bGC3 = 255
  shapes = ['']
}

function draw() {
  background(bGC1,bGC2,bGC3);
  fill(255, 0, 0);
  rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
}

function mousePressed() {
  if (mouseButton === LEFT) {
    fill(255, 0, 0);
    rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
  }
}

function keyTyped() {
  if (key === "w") {
    bGC1 = 255;
    bGC2 = 255;
    bGC3 = 255;
  }
  else if (key === "b") {
    bGC1 = 0;
    bGC2 = 0;
    bGC3 = 0;
  }
  if (key === "r") {
    bGC1 = random(255);
    bGC2 = random(255);
    bGC3 = random(255);
  }
}

function mouseWheel() {
  sizeX += event.delta / 4;
  sizeY += event.delta / 4;
  return false;
}
