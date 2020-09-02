const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(400,400);
  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground)
var ball_options={
  restitution:0.5
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  rectMode(CENTER);  
  rect(200,390,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}