// Terrain Generation
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
  plantFlag();
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.005;

  for (let i=0; i<numberOfRectangles; i++) {
    let currentHeight = noise(time)*600;
    heights.push(currentHeight);
    time += dt;
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  stroke(0);
  for (let i=0; i<numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}

function plantFlag() {
  let highestX;
  let rectWidth = width / numberOfRectangles;
  let tallest = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      highestX = i*rectWidth;
    }
  }
  // Height Line
  let highestY = height - tallest;
  // stroke(255, 0, 0);
  // line(0,highestY,width,highestY);

  fill(255, 0, 0);
  ellipse(highestX, highestY, 10, 10);
}
