
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backImage;
var ground,tree,player,stone,sling,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload()
{
	backImage = loadImage("images.jpg")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,690,1000,20)
    tree = new Tree(450,100,50,50)
	player = new Player(150,450,300,350)
	stone = new Stone(190,535,20)
    sling = new SlingShot(stone.body,{x:190,y:535})
	mango1= new Mango(650,150)
	mango2 = new Mango(600,200)
	mango3 = new Mango(700,300)
	mango4 = new Mango(720,250)
	mango5 = new Mango(680,350)
	mango6 = new Mango(620,200)
	mango7 = new Mango(520,300)
	mango8 = new Mango(580,250)
    mango9 = new Mango(550,320)
    mango10 = new Mango(650,200)
	mango11 = new Mango(590,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImage);
  Engine.update(engine)

  ground.display();
  tree.display();
  player.display();
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
 
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if (keyCode === 32){
		sling.attach(stone.body)
	}
}

function detectCollision(lstone,lmango){
	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	 if (distance<=lmango.r+lstone.r){
         Body.setStatic(lmango.body,false);
	 }
}
