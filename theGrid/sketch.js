// The Grid
// Dan Schellenberg - replace with your name
// March 26, 2018

let cols = 10;
let rows = 10;
let grid
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2DArray(cols, rows)
}

function draw() {
  background(255);
  displayGrid();
}

function keyTyped() {
  grid = createRandom2DArray(cols, rows);
}

function displayGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2DArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
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
