// p5js mouse and keyboard
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

  function setup() {
    createCanvas(windowWidth,windowHeight);
  }

  function draw() {
      if (mousePressed(RIGHT)) {
        fill(random(255)),random(255),random(255));
        rect(mouseX,mouseY,150,200);
      }
  }
