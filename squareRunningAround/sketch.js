let size = 50;
let xLoc = 0;
let yLoc = 0;
let state = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255)
  fill(0, 255, 0)
  rect(xLoc, yLoc, size, size)
  if (state === 1) {
    xLoc += 5
    if (xLoc > windowWidth - 50) {
      state = 2
    }
  }
  else if (state === 2) {
    yLoc += 5
    if (yLoc > windowHeight - 50) {
      state = 3
    }
  }
  if (state === 3) {
    xLoc -= 5
    if (xLoc === 0) {
      state = 4
    }
  }
  else if (state === 4) {
    yLoc -= 5
    if (yLoc === 0) {
      state = 1
    }
  }
}
