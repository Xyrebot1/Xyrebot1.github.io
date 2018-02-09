// p5js Mouse and Keyboard
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

function setup() {
  createCanvas(windowWidth,windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {

}

function mousePressed() {
  if (mouseButton === LEFT) {
    noStroke();
    fill(random(255),random(255),random(255));
    rect(mouseX,mouseY,200,150);
  }
  else if (mouseButton === RIGHT) {
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY,150,150);
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
}
