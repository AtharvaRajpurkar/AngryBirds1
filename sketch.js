const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies

var myengine,myworld
var ground1
var ball;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create()
  myworld = myengine.world

  ground1=new Ground(200,380,400,30)
  

  ball = new Box(200,200,50,50)
  ball1 = new Box(230,10,50,100)
  

}

function draw() {
  background("black"); 
  Engine.update(myengine)
 ball.display()
 ball1.display()
 ground1.display()
  
}