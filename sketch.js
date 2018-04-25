var mic;
var volume2 = 5
var volume1 = 0
var volumer
var volumeg
var img


function windowResized(){
  resizeCanvas(windowWidth-4, windowHeight-4)
}

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4); //makes it so it doesn't scroll when setting the window width
  mic = new p5.AudioIn()
  mic.start()
  img=loadImage('KITT.jpg');
  frameRate(30)
}


function draw() {

  textSize(50)
  background(img)
  push()
  noStroke()
  fill(18)
  rect(windowWidth/3,windowHeight/25, windowWidth/3, windowHeight/2)
  pop()
  var vol = mic.getLevel()
  volume = map(vol, 0, 1, 0, 100)
  //AIR
  if(frameCount<30){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/7.89, windowHeight/5.12, windowWidth/6, windowHeight/8.9)
    pop()
  }
  //OIL
  if(frameCount<60){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/7.89, windowHeight/2.64, windowWidth/6, windowHeight/7)
    pop()
  }
  //P1
  if(frameCount<90){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/7.89, windowHeight/1.8, windowWidth/6, windowHeight/7)
    pop()
  }
  //P2
  if(frameCount<120){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/7.89, windowHeight/1.35, windowWidth/6, windowHeight/7)
    pop()
  }
  //S1
  if(frameCount<30){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/1.49, windowHeight/5.12, windowWidth/5, windowHeight/8.9)
    pop()
  }
  //S2
  if(frameCount<60){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/1.49, windowHeight/2.65, windowWidth/5, windowHeight/7)
    pop()
  }
  //P3
  if(frameCount<90){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/1.49, windowHeight/1.8, windowWidth/5, windowHeight/7)
    pop()
  }
  //P4
  if(frameCount<120){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/1.49, windowHeight/1.35, windowWidth/5, windowHeight/7)
    pop()
  }
  //Auto
  if(frameCount<130){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/3, windowHeight/1.85, windowWidth/3, windowHeight/7.5)
    pop()
  }
  //Normal
  if(frameCount<145){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/3, windowHeight/1.485, windowWidth/3, windowHeight/7.9)
    pop()
  }
  //Pursuit
  if(frameCount<160){
    push()
    fill(18)
    noStroke()
    rect(windowWidth/3, windowHeight/1.25, windowWidth/3, windowHeight/7.9)
    pop()
  }
  //center
  if(volume>25){ //1
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/2.15,windowHeight/10.8, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){ //2
    push()
    noStroke()
    fill(255,0,0,100)
    rect(windowWidth/2.15,windowHeight/8, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>12){ //3
    push()
    noStroke()
    fill(255,0,0,125)
    rect(windowWidth/2.15,windowHeight/6.4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>10){ //4
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/2.15,windowHeight/5.33, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){ //5
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/2.15,windowHeight/4.565, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){ //6
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/2.15,windowHeight/4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){ //7
    push()
    noStroke()
    fill(255,0,0,225)
    rect(windowWidth/2.15,windowHeight/3.55, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){ //8
    push()
    noStroke()
    fill(255,0,0,225)
    rect(windowWidth/2.15,windowHeight/3.19, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){ //9
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/2.15,windowHeight/2.9, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){ //10
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/2.15,windowHeight/2.65, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>10){ //11
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/2.15,windowHeight/2.45, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>12){ //12
    push()
    noStroke()
    fill(255,0,0,125)
    rect(windowWidth/2.15,windowHeight/2.27, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){ //13
    push()
    noStroke()
    fill(255,0,0,100)
    rect(windowWidth/2.15,windowHeight/2.115, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>25){ //14
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/2.15,windowHeight/1.98, windowWidth/15.5, windowWidth/20)
    pop()
  }
  //Left
  if(volume>35){
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/2.77,windowHeight/8, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>25){
    push()
    noStroke()
    fill(255,0,0,110)
    rect(windowWidth/2.77,windowHeight/6.4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/2.77,windowHeight/5.33, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/2.77,windowHeight/4.565, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/2.77,windowHeight/4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){
    push()
    noStroke()
    fill(255,0,0,210)
    rect(windowWidth/2.77,windowHeight/3.55, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){
    push()
    noStroke()
    fill(255,0,0,210)
    rect(windowWidth/2.77,windowHeight/3.19, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/2.77,windowHeight/2.9, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/2.77,windowHeight/2.65, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/2.77,windowHeight/2.44, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>25){
    push()
    noStroke()
    fill(255,0,0,110)
    rect(windowWidth/2.77,windowHeight/2.265, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>35){
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/2.77,windowHeight/2.115, windowWidth/15.5, windowWidth/20)
    pop()
  }
  //Right
  if(volume>35){
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/1.76,windowHeight/8, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>25){
    push()
    noStroke()
    fill(255,0,0,110)
    rect(windowWidth/1.76,windowHeight/6.4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/1.76,windowHeight/5.33, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/1.76,windowHeight/4.565, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/1.76,windowHeight/4, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){
    push()
    noStroke()
    fill(255,0,0,225)
    rect(windowWidth/1.76,windowHeight/3.55, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>4){
    push()
    noStroke()
    fill(255,0,0,225)
    rect(windowWidth/1.76,windowHeight/3.19, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>5){
    push()
    noStroke()
    fill(255,0,0,200)
    rect(windowWidth/1.76,windowHeight/2.9, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>7){
    push()
    noStroke()
    fill(255,0,0,175)
    rect(windowWidth/1.76,windowHeight/2.65, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>15){
    push()
    noStroke()
    fill(255,0,0,150)
    rect(windowWidth/1.76,windowHeight/2.44, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>25){
    push()
    noStroke()
    fill(255,0,0,110)
    rect(windowWidth/1.76,windowHeight/2.265, windowWidth/15.5, windowWidth/20)
    pop()
  }
  if(volume>35){
    push()
    noStroke()
    fill(255,0,0,75)
    rect(windowWidth/1.76,windowHeight/2.115, windowWidth/15.5, windowWidth/20)
    pop()
  }

}
