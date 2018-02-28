//Traffic Light
//Xyre Abelanes
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;
let redLightDuration, yellowLightDuration, greenLightDuration;
let lastTimeLightChange;

function setup() {
  createCanvas(600, 600);
  state = 1;
  redLightDuration = 3000;
  yellowLightDuration = 1500;
  greenLightDuration = 3000;
  lastTimeLightChange = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkIfLightSwitched();
  displayCorrectLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);
  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function drawGreenLight() {
  fill(0,255,0);
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function drawYellowLight() {
  fill(255,255,0);
  ellipse(width / 2, height / 2, 50, 50); //middle
}

function drawRedLight() {
  fill(255,0,0);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
}

function checkIfLightSwitched() {
  if (state === 1) {
    if (millis() > lastTimeLightChange + greenLightDuration) {
      state = 2;
      lastTimeLightChange = millis();
    }
  }
  else if (state === 2) {
    if (millis() > lastTimeLightChange + yellowLightDuration) {
      state = 3;
      lastTimeLightChange = millis();
    }
  }
  else if (state === 3) {
    if (millis() > lastTimeLightChange + redLightDuration) {
      state = 1;
      lastTimeLightChange = millis();
    }
  }
}

function displayCorrectLight() {
  if (state === 1) {
    drawGreenLight();
  }
  else if (state === 2) {
    drawYellowLight();
  }
  else if (state === 3) {
    drawRedLight();
  }
}
