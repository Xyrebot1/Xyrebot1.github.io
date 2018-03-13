function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  angleMode(DEGREES);
  translate(width / 2, height / 2);
  noFill();
  strokeWeight(10)
  ellipse(0, 0, 700);
  strokeWeight(1)
  ellipse(0, 0, 5);
}
