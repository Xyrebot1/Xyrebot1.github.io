let hubris = [];
let xLoc = [];
let yLoc = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  for (let test = 0; test < xLoc.length; test++) {
    fill(random(255),random(255),random(255),random(255))
    rect(xLoc[test] - 50, yLoc[test] - 50, 100, 100)
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    append(xLoc, mouseX);
    append(yLoc, mouseY);
  }
}
