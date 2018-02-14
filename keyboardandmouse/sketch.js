// p5js Mouse and Keyboard
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
let sizeX;
let sizeY;
let bGC1;
let bGC2;
let bGC3;
let shapes;
let mode;
let alternate;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  sizeX = 50;
  sizeY = 50;
  bGC1 = 255;
  bGC2 = 255;
  bGC3 = 255;
  shapes = ['']
  mode = 1;
  alternate = true;

}

function draw() {
  background(bGC1, bGC2, bGC3);
  fill(255, 0, 255);
  noStroke();
  if (mode === 1) {
    rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
  }
  else if (mode === 2) {
    ellipse(mouseX, mouseY, sizeX, sizeY);
  }
  if (mode === 3) {
    if (alternate) {
      triangle(mouseX + sizeX, mouseY, mouseX , mouseY + sizeY, mouseX, mouseY - sizeY);
    }
    else {
      triangle(mouseX, mouseY + sizeY, mouseX + sizeX, mouseY - sizeY / 2, mouseX - sizeX, mouseY - sizeY / 2);
    }
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    fill(255, 0, 0);
    noStroke();
    if (mode === 1) {
      rect(mouseX - sizeX / 2, mouseY - sizeY / 2, sizeX, sizeY);
    }
    else if (mode === 2) {
      ellipse(mouseX - sizeX, mouseY - sizeY, sizeX, sizeY);
    }
    if (mode === 3) {
      triangle(mouseX, mouseY, mouseX - sizeX, mouseY - sizeY, mouseX + sizeX, mouseY + sizeY);
    }
  }
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
  else if (key === a) {
    alternate = !alternate
  }
}

function mouseWheel() {
  sizeX += event.delta / 4;
  sizeY += event.delta / 4;
  return false;
}
