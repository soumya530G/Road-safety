let U, S, F, M;
let R;
let fireSound;
let cols, rows;
let scl = 20;
let w = 2000;
let h = 1600;
let flying = 0;
let terrain = [];
let fire = [];
let spreadSpeed = 0.02;
let angleIndex = 0;
let angles = [0, 90, 180, 270];
function calcR() {  
    let UString = prompt("input Wind speed in miles per hour");
    U = parseInt(UString);
    let SString2 = prompt("input Slope of the terrain in percent");
    S = parseInt(SString2);
    let FString = prompt("input Fuel load in tons per acre");
    F = parseInt(FString);
    let MString2 = prompt("input Moisture content of the fuel as a percentage");
    M = parseInt(MString2);
  
    R = (0.048 * Math.pow(F, 1.5) * (0.111 * Math.pow(M, 0.75) + 0.0245) * Math.exp(0.069 * U) * (1 + 0.1 * S));
  
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    return R;  
  }
  function preload() {
    fireSound = loadSound("fire.wav");
  }
  function setup() {
    createCanvas(800, 600, WEBGL);
    background(128);
    R = calcR(); // Global variable overwrite
    createCanvas(600, 600, WEBGL);
    cols = w / scl;
    rows = h / scl;
    terrain = new Array(cols);
    fire = new Array(cols);
    for(let i = 0; i < cols; i++) {
      terrain[i] = new Array(rows);
      fire[i] = new Array(rows);
    }
    // Play sound on user gesture
    fireSound.play();
  }
  
  
  function draw() {
    flying -= R/10;
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (terrain[x][y] > 0) {
          fire[x][y] += spreadSpeed * noise(x * 0.1, y * 0.1, frameCount * 0.05);
          fire[x][y] = constrain(fire[x][y], 0, 1);
        }
      }
    }
  
    background(0);
    stroke(255);
    noFill();
    translate(width / 2, height / 2 + 50);
    rotateX(PI / 3);
    translate(-w / 2, -h / 2);
  
    let angle = angles[angleIndex];
    rotateY(radians(angle));
    for (let y = 0; y < rows - 1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        let terrainHeight = terrain[x][y];
        let fireIntensity = fire[x][y];
  
        if (terrainHeight < 0) {
          stroke(255, 0, 0); // water
        } else if (fireIntensity == 0) {
          stroke(0, 255, 0); // no fire
        } else {
          stroke(lerpColor(color(0, 255, 0), color(100, 0, 0), terrainHeight / 100.0)); // red flames
        }
  
        vertex(x * scl, y * scl, terrainHeight + fireIntensity * 50);
        vertex(x * scl, (y + 1) * scl, terrain[x][y + 1] + fire[x][y + 1] * 50);
      }
      endShape();
    }
  }
  function keyPressed() {
    if (key === ' ') {
      angleIndex = (angleIndex + 1) % angles.length;
    }
  }