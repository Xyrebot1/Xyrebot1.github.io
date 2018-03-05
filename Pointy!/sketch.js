function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  noCursor();
  background(0);
  drawPoints();
}

function drawPoints() {
  let pointLoc = 35;
  for (let r = pointLoc; r < windowWidth; r += pointLoc) {
    for (let t = pointLoc; t < windowHeight; t += pointLoc) {
      point(r, t);
      ellipse(r, t, 4, 4);
      stroke(random(255), random(255), random(255));
      line(r, t, mouseX, mouseY);
    }
  }
}
