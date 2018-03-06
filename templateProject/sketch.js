let state;
let windowHalfWidth

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowHalfWidth = windowWidth / 2
  state = 0
}

function draw() {
  background(200);
  rect(windowHalfWidth, 0, windowHalfWidth, windowHeight)
  altCursor();
  menuStart();
  line(0, 0, mouseX, mouseY);
  line(windowHalfWidth, 0, mouseX, mouseY);
  line(0, windowHeight, mouseX, mouseY);
  line(windowHalfWidth, windowHeight, mouseX, mouseY);
}

function menuStart() {
  let buttonHeight = 60;
  let buttonWidth = 160;
  let leftSide = width / 4 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      button = true;
    }
  }
  else {
    fill(0, 255, 255);
  }
}

function altCursor() {
  if (mouseX >= windowHalfWidth) {
    // hide the circle
  }
  else {
    ellipse(mouseX, mouseY, 10)
  }
}
