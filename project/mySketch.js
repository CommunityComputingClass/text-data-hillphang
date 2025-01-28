let myMessage = "good morning"
let xLocation = 30; 
function preload(){
  myFont = loadFont("Antarlika.otf")
}
function setup() {
  createCanvas(400, 400);
   background(50);
  noStroke();
  fill(255);
  textFont(myFont)

  text(myMessage, 30, 200, 250,200);
  xLocation = xLocation +1;
 
}
function draw() {
 
}