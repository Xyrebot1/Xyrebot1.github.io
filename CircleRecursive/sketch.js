// Factorial Recursion
// Xyre
// May 3, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255);
  let theLevel = map(mouseX, 0, width, 1, 8);
  drawCircle(width / 2, width / 2, theLevel);
}

function drawCircle(x, radius, level) {
  let fillColor = 125 * level / 4;
  fill(fillColor, 200);
  ellipse(x, height/2, radius * 2, radius * 2);

  if (level > 1) {
    level -= 1;
    drawCircle(x + radius / 2, radius / 2, level);
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x, radius / 2, level);
  }
}
