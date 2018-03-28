// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 24;
let cols = 24;
let grid;
let cellSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createEmpty2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(50);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);

  if (grid[xCoord][yCoord] === 1) {
    grid[xCoord][yCoord] = 0;
  }
  else {
    grid[xCoord][yCoord] = 1;
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
