//Traffic Light
//Xyre Abelanes
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;

function setup() {
  createCanvas(600, 600);
  state = 1;
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  if (state === 3) {
    fill(255, 0, 0);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
    fill(255);
    ellipse(width / 2, height / 2, 50, 50); //middle
    fill(255);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  if (state === 2) {
    fill(255);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
    fill(255, 255, 0);
    ellipse(width / 2, height / 2, 50, 50); //middle
    fill(255);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  if (state === 1) {
    fill(255);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
    fill(255);
    ellipse(width / 2, height / 2, 50, 50); //middle
    fill(0, 255, 0);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}

function mouseClicked() {
  if (state < 3) {
    state += 1;
  }
  else {
    state = 1;
  }
}
