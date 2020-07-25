const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var ground,ground1,world,engine,object,polygon,backgroundImg;
var ground2,box1,box2,polygon,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,ball,sling,ballimg
var score=0
var bg="sprites/bg.png"
function preload(){
  getBackgroundImage();
  ballimg=loadImage("pentagon.png")
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
 ball=Bodies.circle(900,350,20)
 
 imageMode(CENTER)
 World.add(world,ball)
  
  ground1=new Ground(390,255,190,PI/2)
  ground2=new Ground(120,400,190,PI/2)
  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40)
  box6=new Box(360,195,30,40)
  box7=new Box(390,195,30,40)
  box8=new Box(420,195,30,40)
  box9=new Box(390,155,30,40)
  box11=new Box(150,377,30,40);
  box12=new Box(90,377,30,40)
  box13=new Box(60,377,30,40)
  box14=new Box(180,377,30,40)
  box15=new Box(120,337,30,40)
  box16=new Box(150,337,30,40)
  box17=new Box(90,337,30,40)
  box18=new Box(120,297,30,40)
  box10=new Box(120,377,30,40)
 sling=new SlingShot(ball,{x:900,y:350})
  

  
  
}

function draw() {
  background(255);  
  text("score" +score,width-300,50)
  Engine.update(engine);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
 ground1.display();
 ground2.display();
 box1.display();
 box1.score();
 box2.display();
 box2.score();
 box3.display();
 box3.score();
 box5.display();
 box5.score();
 box4.display();
 box4.score();
 box7.display();
 box7.score();
 box8.display();
 box8.score();
 box9.display();
 box9.score();
 box6.display();
 box6.score();
 box10.display();
 box10.score();
 box12.display();
 box12.score();
 box13.display();
 box13.score();
 box15.display();
 box15.score();
 box14.display();
 box14.score();
 box17.display();
 box17.score();
 box18.display();
 box18.score();
 box16.display();
 box16.score();
 box11.display();
 box11.score();
sling.display();
 imageMode(CENTER)
 image(ballimg,ball.position.x,ball.position.y,40,40);

 
 
 

 

}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
}
function keyPressed(){
  if(keyCode===32){
sling.attach(ball)
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "sprites/bg.jpg";
  } else {
    bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

