  function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {

  }

  function mouseClicked() {
    noStroke()
    fill(random(255), random(255), random(255), random(255))
    rect(mouseX, mouseY, random(40, 150), random(50, 150))
  }

  function keyPressed() {
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(random(0, width), random(0, height), random(50, 100), random(50, 100));

  }

  function deviceShaken() {
    fill(0);
    textFont("Arial")
    textAlign(CENTER);
    textSize(64);
    text("Shake me baby~", width / 2, height / 2);
  }
