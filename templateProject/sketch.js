function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    let x = random(width)
    let y = random(height)
    triangle(x, y, x - 50, y + 50, x + 50, y + 50);
  }
  if (keyIsPressed && (key === "z" || key === "Z") && (key === "x" || key === "X")) {
    ellipse(random(0, width), random(0, height), random(50,100))
  }
}
