// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// April 17, 2018

let myTimer;
let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(2000);
  bubble = new Ball(random(width), height, 50);
}

function draw() {
  background(255);
  bubble.moveTo();
  bubble.display();
  }

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    // this.startTime = millis();
    // this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  start() {
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
    this.dy = random(-2, -1);
    this.bubbleTimer = new Timer(1000);
    this.topHasBeenToushed = false;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
  }

  display() {
    if (!this.bubbleTimer.isDone()) {
      noStroke()
      fill(this.r, this.g, this.b, this.a);
      ellipse(this.x, this.y, this.radius * 2);
    }
  }

  moveTo() {
    if (this.y > 0 + this.radius) {
      this.y += this.dy;
    }
    else {
      if (this.topHasBeenToushed) {
        this.y = 0 + this.radius;
        this.bubbleTimer.start();
      }
      this.topHasBeenToushed = true;
    }
    this.x += random(-3, 3);
  }
}
