let isFilled;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth,windowWidth);
  }
  else {
    createCanvas(windowWidth,windowHeight);
  }
  isFilled = false;
}

function draw() {
  background(255);
  drawCheckers();
}

function drawCheckers() {
  for (let b = 50; b < 450; b += 50) {
    for (let w = 50; w < 450; w += 50) {
      if (isFilled) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(b, w, 50, 50);
      isFilled = !isFilled;
    }
    isFilled = !isFilled;
  }
}
