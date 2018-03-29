// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 16;
let cols = 32;
let grid;
let cellSize;
let moveX;
let moveY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createEmpty2dArray(cols, rows);
  moveX = 0;
  moveY = 15;
}

function draw() {
  background(255);
  displayGrid();
  playerThing();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else  if (grid[x][y] === 2) {
        fill(255, 0, 255);
      }
      else {
        fill(50);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function playerThing() {
  grid[moveX][moveY] = 2;
}

function mousePressed() {
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);

  if (grid[xCoord][yCoord] === 1) {
    grid[xCoord][yCoord] = 0;
  }
  else  if (grid[xCoord][yCoord] === 0) {
    grid[xCoord][yCoord] = 1;
  }
  else {
    grid[xCoord][yCoord] = 2;
  }
}



function keyPressed() {
  if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
  }
  else if (keyCode === DOWN_ARROW && moveY < rows - 1) {
    grid = createEmpty2dArray(cols, rows);
    moveY += 1;
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
