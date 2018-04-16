// Ball Loop Thingy
// Xyre Abelanes
// April 16

let ballArray = [];

// let myBall;
// let anotherBall;
// let thirdBall;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ballArray.push(new Ball(500, 500))
  // myBall = new Ball(300, 400);
  // anotherBall = new Ball(300, 600);
  // thirdBall = new Ball(500, 500);
}

function draw() {
  background(255);

  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].jiggle();
    ballArray[i].display();
  }
  // myBall.jiggle();
  // anotherBall.jiggle();
  //
  // myBall.display();
  // anotherBall.display();
  // thirdBall.display();
}

function mousePressed() {
  ballArray.push(new Ball(mouseX, mouseY));
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 75;
  }

  display() {
    fill(0);
    ellipse(this.x,this.y,this.radius);
  }

  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
