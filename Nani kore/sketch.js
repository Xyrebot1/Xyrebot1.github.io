let clockSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height * 0.9;
  }
  else {
    clockSize = width * 0.9;
  }
  angleMode(DEGREES)
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);
  strokeWeight(8)
  fill(255);
  ellipse(0, 0, clockSize, clockSize);

  fill(0);
  ellipse(0, 0, 10, 10);


  strokeWeight(10);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    line(0, clockSize / 2 *0.95, 0, clockSize / 2 * 0.75);
    rotate(360 / 12);
  }

  strokeWeight(4);
  for (let j = 0; j < 60; j++) {
    line(0, clockSize / 2 *0.95, 0, clockSize / 2 * 0.75);
    rotate(360 / 60);
  }

  pop();
}
