let musawer;
let theWalkers = [];
let gameIsOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  musawer = new Walker(width / 2, height / 2, color(255, 0, 0), 2);
  strokeWeight(5);
}

function draw() {
  if (!gameIsOver) {
    musawer.move();
    musawer.display();
    for (let i = 0; i < theWalkers.length; i++) {
      theWalkers[i].move();
      theWalkers[i].display();
      if (theWalkers[i].x === musawer.x && theWalkers[i].y === musawer.y) {
        gameIsOver = true;
      }
    }
  }
  else {
    background(255);
  }
}

function mousePressed() {
  let theWhite = new Walker(mouseX, mouseY, color(random(255), random(255), random(255)), 2);
  theWalkers.push(theWhite);
}

class Walker {
  constructor(x, y, walkerColour, speed) {
    this.x = x;
    this.y = y;
    this.walkerColour = walkerColour;
    this.speed = speed;
  }

  display() {
    stroke(this.walkerColour);
    point(this.x, this.y);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //Up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //Down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //Left
      this.x -= this.speed;
    }
    else {
      //Right
      this.x += this.speed;
    }
  }
}
