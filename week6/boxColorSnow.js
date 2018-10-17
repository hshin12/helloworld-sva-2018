
let snowflakes = []; 

function draw() {
  let t = frameCount / 60; 

  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);


  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    
    this.posY += pow(this.size, 0.5);

    
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}


var backgroundColor;
var isOverCircle;

function setup(){
  createCanvas(200,200)
  backgroundColor = color(345, 345, 345);
}

function draw(){
  background(backgroundColor);
  
  if (mouseX >= 80 && mouseX <= 130 && mouseY >= 80 && mouseY >= 130){
  isOverCircle = true;
  }else{
   isOverCircle = false;
  }

  stroke(0);
  strokeWeight(5);
  
  if(isOverCircle == true) {
    fill(100);
    cursor(HAND);
  }
  else {
    fill(200);
    cursor(ARROW);
  }
  ellipse(80,130,70,70);
}

function mousePressed(){
  if(isOverCircle == true){
    backgroundColor = color(random(255), random(255), random(255));
  }
}
