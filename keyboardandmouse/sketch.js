// p5js Mouse and Keyboard
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
let sizeX
let sizeY
let bGC

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  sizeX = 100;
  sizeY = 100;
  bGC = 255;
}

function draw() {
  
}

function mousePressed() {
  if (mouseButton === LEFT) {
    fill(255,0,0);
    rect(mouseX - sizeX/2, mouseY - sizeY/2, sizeX, sizeY);
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    bGC = 255;
  } else if (key === 'b' || key === 'B') {
    bGC = 0;
  }
  if (key === 'r' || key === 'R') {
    background(random(255), random(255), random(255));
  }
}
