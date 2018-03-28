// The Game of Life
// Xyre Abelanes
// March 26, 2018

let cols = 80;
let rows = 80;
let grid;
let cellSize;
let autoplay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createRandom2DArray(cols, rows);
  autoplay = false;
}

function draw() {
  background(255);
  autoPlayIfRequired();
  displayGrid();
}

function autoPlayIfRequired() {
  if (autoplay && frameCount % 4 === 0) {
    nextTurn();
  }
}

function nextTurn() {
  let next = createEmptyArray(cols, rows);
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let neighbours = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //don't break on the edges
          if (x + i >= 0 && x + i < cols && y + j >= 0 && y + j < rows) {
            neighbours += grid[x + i][y + j];
          }
        }
      }
      neighbours -= grid[x][y];
      // apply the rules for games
      if (grid[x][y] === 1) { // currently alive
        if (neighbours === 2 || neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else { // currently dead
        if (neighbours === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = createRandom2DArray(cols, rows);
  }
  else if (key === " ") {
    nextTurn();
  }
  else if (key === "c" || key === "C") {
    grid = createEmptyArray(cols, rows);
  }
  else if (key === "a" || key === "A") {
    autoplay = !autoplay;
  }
}

function displayGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(0);
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

function createEmptyArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
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
