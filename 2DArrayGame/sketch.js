// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 27;
let cols = 33;
let grid;
let cellSize;
let moveX;
let moveY;
let gridMode;
let firstMaze;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / (cols * 1.8);
  grid = createEmpty2dArray(cols, rows);
  moveX = 0;
  moveY = 0;
  gridMode = 0;
  firstMaze = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}

function draw() {
  background(255);
  displayGrid();
  playerThing();
}

function noscroll() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", noscroll);

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(240);
      }
      else if (grid[x][y] === 2) {
        fill(255, 50, 50);
      }
      else {
        fill(50);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
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
  else if (grid[xCoord][yCoord] === 0) {
    grid[xCoord][yCoord] = 1;
  }
  else {
    grid[xCoord][yCoord] = 2;
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
    gridMode = 0;
  }
  if (key === "j" || key === "J") {
    clearOutBodies();
    moveX = 0;
    moveY = 0;
    grid = firstMaze;
    gridMode = 1;
  }
  // else if (key === "m" || key === "M") {
  //   grid = createMaze2dArray(cols, rows);
  //   gridMode = 1;
  // }
  if (key === "s" || key === "S") {
    clearOutBodies();
    moveX = 0;
    moveY = 0;
    if (gridMode === 0) {
      grid = createEmpty2dArray(cols, rows);
    }
    else if (gridMode === 1) {
      grid = firstMaze;
    }
  }
  else if (keyCode === DOWN_ARROW && moveY < rows - 1) {
    grid[moveX][moveY] = 0;
    if (grid[moveX][moveY + 1] === 0) {
      moveY += 1;
    }
  }
  if (keyCode === UP_ARROW && moveY > 0) {
    grid[moveX][moveY] = 0;
    if (grid[moveX][moveY - 1] === 0) {
      moveY -= 1;
    }
  }
  else if (keyCode === RIGHT_ARROW && moveX < cols - 1) {
    grid[moveX][moveY] = 0;
    if (grid[moveX + 1][moveY] === 0) {
      moveX += 1;
    }
  }
  if (keyCode === LEFT_ARROW && moveX > 0) {
    grid[moveX][moveY] = 0;
    if (grid[moveX - 1][moveY] === 0) {
      moveX -= 1;
    }
  }
}

function clearOutBodies() {
  let theGrid = grid;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (theGrid[x][y] === 2) {
        theGrid[x][y] = 0;
      }
    }
  }
  return theGrid;
}

function createEmpty2dArray(cols, rows) {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

// function createMaze2dArray(cols, rows) {
//   let mazeGrid = [];
//   let test = 2;
//   let test2 = 5;
//   let number = 0;
//   let number2 = 1;
//   let wall = 2;
//   let wall2 = 6;
//   for (let x = 0; x < cols; x++) {
//     mazeGrid.push([]);
//     number += 1;
//     number2 += 1;
//     wall = 2;
//     wall2 = 6;
//     for (let y = 0; y < rows; y++) {
//       if (number === test && y === 0) {
//         mazeGrid[x].push(1);
//         mazeGrid[x].push(1);
//       }
//       else if (number2 === test2 && y === 1) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//       }
//       if (number === test && y === 3) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//       }
//       else if (number2 === test2 && y === 4) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//       }
//       if (number === test && y === 6) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//       }
//       else if (number2 === test2 && y === 7) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//       }
//       if (number2 === test2 && y === 10) {
//         mazeGrid[x].push(1);
//         mazeGrid[x].push(1);
//         test2 += 4;
//       }
//       else if (number === test && y === 9) {
//         for (let z = 0; z < 5; z++) {
//           mazeGrid[x].push(1);
//         }
//         test += 4;
//       }
//       if (mazeGrid[x][wall] === 0 && x < cols - 1) {
//         mazeGrid[x].push(1);
//         wall += 8;
//       }
//       else if (mazeGrid[x][wall2] === 0 && x > 0) {
//         mazeGrid[x].push(1);
//         wall2 += 8;
//       }
//       else {
//         mazeGrid[x].push(0);
//       }
//     }
//   }
//   return mazeGrid;
// }
