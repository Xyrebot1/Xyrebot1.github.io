function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    let x = random(width);
    let y = random(height);
    triangle(x, y, x - 50, y + 50, x + 50, y + 50);
  }
  else if (keyIsPressed && (key === "z" || key === "x")) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, random(50,100))
  }
}
