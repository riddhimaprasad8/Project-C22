const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var OurEngine, OurWorld, OurBodies1; 


//to create engine, world and bodies//
var OurBodies2; 

function setup() {
  createCanvas(400,400);
OurEngine= Engine.create();
OurWorld=OurEngine.world;
var options = {isStatic:true};
//body creation//
OurBodies1=Bodies.rectangle(200,390,400,20,options);
World.add(OurWorld,OurBodies1);
console.log(OurBodies1);
var options2={restitution:3.0};
OurBodies2=Bodies.circle(200,100,20,options2);
World.add(OurWorld,OurBodies2);
}

//DISPLAY//
function draw() {
  background("black");  
  Engine.update(OurEngine);
  rectMode(CENTER);
  rect(OurBodies1.position.x, OurBodies1.position.y , 400,20);
  ellipseMode(RADIUS);
  ellipse(OurBodies2.position.x, OurBodies2.position.y ,20);
    drawSprites();
}