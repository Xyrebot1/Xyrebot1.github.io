let state;
let windowHalfWidth;
let showCursor;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowHalfWidth = windowWidth / 2
  state = 0
  showCursor = 0
  button = false;
}

function draw() {
  background(200);
  strokeWeight(2);
  if (button === true) {
    sideMenu();
    altCursor();
  }
  else if (button === false) {
    menuStart();
  }
  noFill()
}

function menuStart() {
  let buttonHeight = 60;
  let buttonWidth = 160;
  let leftSide = width / 4 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  fill(0);
  text("Play", leftSide, topSide);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    if (mouseIsPressed) {
      button = true;
    }
  }
  else {
    fill(0, 255, 255);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
  }
}

function altCursor() {
  checkLoc();
  if (showCursor === 1) {
    cursor(CROSS);
  }
  else {
    cursor(ARROW);
  }
}

function checkLoc() {
  if (mouseX >= windowHalfWidth) {
    showCursor = 0;
    state = 0;
  }
  else {
    showCursor = 1;
    state = 1;
  }
}

function sideMenu() {
  fill(255);
  rect(windowHalfWidth, 0, windowHalfWidth, windowHeight);
}