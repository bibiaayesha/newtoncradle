
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	slingshot = new SlingShot(ball.body,{x:200, y:100});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
}

