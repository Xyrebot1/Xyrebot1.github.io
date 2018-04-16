// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let myButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myButton = new ThePlayButton(100, 50, 150, 75);
}

function draw() {
  background(255);
  myButton.display();
  if (myButton.isClicked()) {
    background(255, 0 ,0);
  }
}

class ThePlayButton {
  constructor(x, y, buttonWidth, buttonHeight) {
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = width / 2 - this.buttonWidth / 2;
    this.topSide = height / 2 - this.buttonHeight / 2;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;
  }

  display() {
    fill(0);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(125);
    }
    rect(this.leftSide, this.topSide, this.buttonWidth, this.buttonHeight);
  }

  isClicked() {
    if (mouseIsPressed && mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      return true;
    }
    else {
      return false;
    }
  }
}
