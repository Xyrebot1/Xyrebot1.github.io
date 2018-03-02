function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  background(255);
  drawPoints();
}

function drawPoints() {
  for (r = 50; r < windowWidth; r += 50) {
    for (t = 50; t < windowHeight; t += 50) {
      point(r, t);
    }
  }

}
