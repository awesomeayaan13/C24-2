
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj, groundObject,box1,box2,box3
var world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj=new Paper(200,450,40)
	groundObject=new Ground(width/2,370,width,20)

	box1 = new Dustbin (200,200,20,20)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
	
	rectMode(CENTER);
  background(0);
  
	paperObj.display()
	groundObject.display()
	box1.display()




  drawSprites();
 
}

	function keyPressed(){
		if (keyCode === UP_ARROW){
			Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})
		}
	}


