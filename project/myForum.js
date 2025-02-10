let myQuestion = "What do you do to lift your mood when you're feeling low?"
 
let contents = "";

let Button; 

function setup() {
  createCanvas(500, 400);
  Button = createButton("show");
  Button.position(220,80)
  Button.mousePressed(showText)
  
  background(50);
  fill(255);
  textSize(14);
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