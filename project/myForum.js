

function preload(){
  myFont = loadFont("Antarlika.otf")
}
let myQuestion = "If you were a season, what season would you be?"
 
let contents = "";

let Button;
let textBox; 

function setup() {
  createCanvas(500, 400);
  Button = createButton("show");
  Button.position(220,80)
  Button.mousePressed(showText)
  textBox = createInput("type here")
  textBox.size(300,40)
  textBox.position(50,200)
  textBox.input(storeText)
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
   textBox.hide(); 
}


function storeText(){
  contents = this.value(); 
}
