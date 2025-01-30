let myMessage = "left arrow ~ sunset, right arrow ~ sunrise"

function preload(){
  myFont = loadFont("Antarlika.otf")
}
function setup() {
  createCanvas(570, 525);
  background(25,25,112);
  noStroke();
  fill(255);
  textFont(myFont)
  textSize(40)
  text(myMessage, 30, 50);
  
 
}
function draw() { 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
  fill(102,153,204)
  }  
  if(keyCode === RIGHT_ARROW){
  fill(255, 253, 208)
  }  
  
  ellipse(random(0,525),random(0,525),500,20) 
}