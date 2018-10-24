let img;

function preload() {
  img = loadImage("eye.png");
}


// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker
var w = 640,
  h = 480;

function setup() {

  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB);
  imageMode(CENTER);


  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);

}

function draw() {
  image(capture, width/2, height/2, w, h);
  let positions = tracker.getCurrentPosition();




  noFill();
  //stroke(255);
  beginShape();
  for (let i = 0; i < positions.length; i++) {
    vertex(positions[i][0], positions[i][1]);
  }
  endShape();

  noStroke();
  for (let i = 0; i < positions.length; i++) {
    fill(50, map(i, 0, positions.length, 0, 360), 100);
    ellipse(positions[i][0], positions[i][1], 3, 3);
    //text(i, positions[i][0], positions[i][1]);

  }



  if (positions.length > 0) {
    let mouthLeft = createVector(positions[44][0], positions[44][1]);
    let mouthRight = createVector(positions[50][0], positions[50][1]);
    let smile = mouthLeft.dist(mouthRight);
    // uncomment the line below to show an estimate of amount "smiling" 
    rect(20, 20, smile * 3, 20);


    stroke('aquamarine');
    strokeWeight(14);
    for (let i = 15; i < 18; i++) {
      line(positions[i][0], positions[i][1], positions[i + 1][0], positions[i + 1][1]);
    }
    for (let i = 19; i < 22; i++) {
      line(positions[i][0], positions[i][1], positions[i + 1][0], positions[i + 1][1]);
    }

    let nose = dist(positions[62][0], positions[62][1], positions[37][0], positions[37][1]);
    noStroke();
    fill(0, 255, 255);
    textSize(positions[37][1] - positions[33][1]);
    textAlign(CENTER);
    textStyle(BOLD);
    text("A",positions[37][0], positions[37][1]);
    //ellipse(positions[62][0], positions[62][1], nose * 2);

    image(img, positions[27][0], positions[27][1], positions[25][0] - positions[23][0], positions[26][1] - positions[24][1]);
    image(img, positions[32][0], positions[32][1], positions[28][0] - positions[30][0], positions[31][1] - positions[29][1]);

  }
}