let state;
let windowHalfWidth;
let showCursor;
let button;
let points;
let priceTag;
let priceTagDrone;
let damage;
let firstDigit;
let cursorEffect;
let amountOfDrones;
let lastInterval;
let autoClick;
let crystal;
let clickNoise;

//Something to fill the background for now
function preload() {
  crystal = loadImage("images/Alliram.png");
  clickNoise = loadSound("assets/8bit_gunloop_explosion.wav")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowHalfWidth = windowWidth / 2
  state = 0;
  showCursor = 0;
  button = false;
  points = 0;
  priceTag = 100
  priceTagDrone = 15;
  amountOfDrones = 0;
  damage = 1
  firstDigit = str(priceTag);
  cursorEffect = false;
  lastInterval = millis();
  autoClick = 5000;
  clickNoise.setVolume(0.5);
}

function draw() {
  background(200);
  strokeWeight(2);
  if (button === true) {
    sideMenu();
    crystalParty();
    powerUpgrade();
    dronePurchase();
    aDrone();
    altCursor();
  }
  else if (button === false) {
    fill(100, 255, 0);
    textStyle(BOLD)
    text("JUST ANOTHER CLICKER GAME", width / 16, 250); // Title
    menuStart();
  }
  noFill()
}

// Just a bunch of crystals having a party
function crystalParty() {
  image(crystal, 50, 50, windowHalfWidth / 2, windowHeight / 2);
  image(crystal, windowHalfWidth / 2, 50, windowHalfWidth / 4, windowHeight / 4);
  image(crystal, 50, windowHeight / 2, windowHalfWidth / 4, windowHeight / 4);
  image(crystal, windowHalfWidth / 2 - 50, windowHeight / 2 - 50, windowHalfWidth / 2, windowHeight / 2);
}

function mouseEffect() {
  text("+" + damage, mouseX, mouseY);
}

// Every click gives you points
function mouseClicked() {
  if (button === true && showCursor === 1) {
    points += damage;
    clickNoise.play();
  }
}

// a button which gives you more points when you click
function powerUpgrade() {
  let buttonHeight = 80;
  let buttonWidth = 200;
  let leftSide = windowHalfWidth + 5;
  let topSide = 50;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  textSize(30)
  textStyle(NORMAL);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0, 255, 0);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0);
    text("Upgrade CP", leftSide + 10, topSide + 30);
    if (mouseIsPressed && points >= priceTag) {
      points -= priceTag;
      damage *= 2;
      if (firstDigit[0] === "1") {
        priceTag *= 5;
      }
      else if (firstDigit[0] === "5") {
        priceTag *= 2;
      }
      firstDigit = str(priceTag);
    }
  }
  else {
    fill(100, 255, 0);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0);
    text("Upgrade CP", leftSide + 10, topSide + 30);
  }
  fill(0)
  text(priceTag, leftSide + 10, 120);
}

// a button that lets you buy drones to automatically give you points every 5 seconds
function dronePurchase() {
  let buttonHeight = 80;
  let buttonWidth = 200;
  let leftSide = windowHalfWidth + 5;
  let topSide = 150;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  textSize(30)
  textStyle(NORMAL);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(0, 255, 0);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0);
    text("Buy Drone", leftSide + 10, topSide + 30);
    if (mouseIsPressed && points >= priceTagDrone) {
      points -= priceTagDrone;
      priceTagDrone += priceTagDrone;
      amountOfDrones += 1;
    }
  }
  else {
    fill(100, 255, 0);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0);
    text("Buy Drone", leftSide + 10, topSide + 30);
  }
  fill(0)
  text(priceTagDrone, leftSide + 10, 220);
}

// point factory
function aDrone() {
  if (amountOfDrones > 0 && millis() > lastInterval + autoClick) {
    for (let auto = 0; auto < amountOfDrones; auto++) {
      points += 1;
    }
    lastInterval = millis();
  }
}

// Just the play button
function menuStart() {
  let buttonHeight = 60;
  let buttonWidth = 160;
  let leftSide = width / 4 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  textSize(48);
  textStyle(NORMAL);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0)
    text("Play", leftSide + 30, topSide + 45);
    if (mouseIsPressed) {
      button = true;
    }
  }
  else {
    fill(0, 255, 255);
    rect(leftSide, topSide, buttonWidth, buttonHeight);
    fill(0)
    text("Play", leftSide + 30, topSide + 45);
  }
}

// shows different cursors depending where your mouse is
function altCursor() {
  checkLoc();
  if (showCursor === 1) {
    cursor("images/cursor-target-enemy.cur");
  }
  else if (showCursor === 0){
    cursor("images/SC2-cursor.cur");
  }
}

function checkLoc() {
  if (mouseX >= windowHalfWidth) {
    showCursor = 0;
  }
  else {
    showCursor = 1;
  }
}

// where the purchase buttons are kept
function sideMenu() {
  fill(100);
  rect(windowHalfWidth, 0, windowHalfWidth, windowHeight);
  textStyle(NORMAL);
  textSize(48);
  fill(255);
  text(points, windowHalfWidth + 5, 40);
  text(damage, windowHalfWidth + 270, windowHeight - 50);
  text(amountOfDrones, windowHalfWidth + 190, windowHeight - 100);
  fill(0, 255, 0);
  text("ClickPower:", windowHalfWidth + 10, windowHeight - 50);
  text("Drones:", windowHalfWidth + 10, windowHeight - 100);
}
