
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var wall1;
var paper,ground;
var trashIMG, dustbin0;


function preload(){

	//nothing yet :p
}

function setup() {
	
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin0 = new dustbin(800,650);
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);

	paper = new Paper(200,300,40);

	wall1 = Bodies.rectangle(1200,600,10,200);
	wall1.shapeColor = "red";

	World.add(world, wall1);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  keyDown(paper);
  

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:8,y:-8});

	Engine.run(engine);

	Engine.update(engine);
  }

  
  
  ground.display();
  paper.display();
  dustbin0.display();

  
}

function keyDown(object1){

	

}



