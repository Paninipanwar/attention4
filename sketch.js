//Chase The Ball Game
let ballx = 300
let bally = 300
let ballsize = 180
let score = 0
let gamestate = "L1"
var totalTime ;
var timeLimit = 30 ;

function setup() {
  createCanvas(1100,650);
}

function draw() {
totalTime = millis();//starttimer


if(gamestate == "L1"){
  levelTwo();
}
  if(gamestate == "L2"){
  levelTwo();
  }
  if(gamestate == "L3"){
  timeover();
  }
}

function timeover(){
  fill(0,0,0)
  stroke(0)
  strokeWeight(0)
  textAlign(CENTER)
  textSize(80)
  text(("Time's Up !"),width/2,800)
}



function levelTwo(){
  background(173, 216, 230)
  fill(10,150,400)
  noStroke()
  
  let distToBall = dist(ballx,bally, mouseX,mouseY)
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height)
    score = score+1
  }
 
  ellipse(ballx,bally,ballsize/2,ballsize/2)
  fill(0,0,0)
  stroke(0)
   textSize(40)
  strokeWeight(1)
  textAlign(CENTER)
  text(("Score: "+score),width/2,100)
  textSize( 30)
  
  totalTime=int(totalTime/1000);
  
  fill(0,0,0)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  text(("Timer:"),width/2,550)
  text(timeLimit-totalTime,width/2,600);
  textSize(20)
  
    if (totalTime >= timeLimit) {
   gamestate="L3"
  
  }
}
