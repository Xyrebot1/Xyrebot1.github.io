// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

let circle;

function setup() {
  createCanvas(windowWidth,windowHeight);
  circle = [];
}

function draw() {
  background(255);
  noStroke();
  moveBalls();
  displayBalls();
}

function moveBalls() {
  for (let j = 0; j < circle.length; j++) {
    circle[j].x += circle[j].dX;
    circle[j].y += circle[j].dY;

    if (circle[j].y < 0) {
      circle[j].y = height;
    }
    else if (circle[j].y > height) {
      circle[j].y = 0;
    }
    if (circle[j].x < 0) {
      circle[j].x = width;
    }
    else if (circle[j].x > width) {
      circle[j].x = 0;
    }
  }
}

function displayBalls() {
  for (let i = 0; i < circle.length; i++) {
    fill(circle[i].colour);
    ellipse(circle[i].x,circle[i].y,circle[i].size);
  }
}

function mouseClicked() {
  let aBall = {
    x: mouseX,
    y: mouseY,
    size: random(10,100),
    colour: color(random(255), random(255), random(255), random(255)),
    dX: random(-5, 5),
    dY: random(-5, 5),
  };
  circle.push(aBall);
}
