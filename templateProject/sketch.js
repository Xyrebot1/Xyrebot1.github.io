// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// April 17, 2018

let myTimer;
let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(2000);
  bubble = new Ball(random(width), height, 200);
}

function draw() {
  if (myTimer.isDone()) {
    let startingPoint = height;
    bubble.display();
    myTimer.reset(1000);
  }
}

class Timer{
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.dy = random(-2, -3);
  }

  display() {
    noStroke()
    fill(200,100,0,100);
    ellipse(this.x,this.y,this.radius);
  }

  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  moveTo() {
    if (this.y > 0 + this.radius) {
      this.y += this.dy;
    }
    else {
      this.y = 0 + this.radius;
    }
  }
}
