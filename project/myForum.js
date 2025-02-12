let myMessage = "left arrow ~ sunset, right arrow ~ sunrise"

function preload(){
  myFont = loadFont("Antarlika.otf")
}
let myQuestion = "If you were a season, what season would you be?"
 
let contents = "";

let Button; 

function setup() {
  createCanvas(500, 400);
  Button = createButton("show");
  Button.position(220,80)
  Button.mousePressed(showText)
  
  background(230, 242, 255);
  fill("navy");
  textSize(30);
  textFont(myFont)
  text(myQuestion,50,50)  
}

function draw() {
  
}
function keyTyped() {
  contents = contents + key;
}

function showText(){
   text(contents, 50, 250, 400, 200);
}