// Factorial Recursion
// Xyre
// May 3, 2018

let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

let theAngle = map(mouseX, 0, width, 0, 180);
  theta = theAngle;
  let branchSize = 250;

  //trunk
  translate(width / 2, height);
  line(0, 0, 0, -branchSize);

  translate(0, -branchSize);

  //recursive
  branch(branchSize);

}

function branch(length) {
  length *= 0.66;

  if (length > 3) {
    //right
    push();
    rotate(theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length);
    pop();

    //left
    push();
    rotate(-theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length);
    pop();
  }
}
