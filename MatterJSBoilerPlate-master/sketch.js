
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(200,200,20,20)
bob2=new bob(200,200,20,20)
bob3=new bob(200,200,20,20)
bob4=new bob(200,200,20,20)
bob5=new bob(200,200,20,20)
roof1=new roof(100,100,20,80)
rope1=new rope(roof1.body,bob1.body)
rope2=new rope(roof1.body,bob2.body)
rope3=new rope(roof1.body,bob3.body)
rope4=new rope(roof1.body,bob4.body)
rope5=new rope(roof1.body,bob5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope2.diplay();
  rope3.diplay();
  rope4.diplay();
  rope5.diplay();
  drawSprites();
 
}



