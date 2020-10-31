const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ground, base1,base2;
var hexastone, hexastone_img, sling;

function preload(){
  hexastone_img = loadImage("hexagon.jpg");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(999,325,1005,10);
  base1 = new Ground(500,325,100,10);
  base2 = new Ground(500,325,100,10);
  
  box1 = new Blocks(300,800,50,50);
  box2 = new Blocks(350,800,50,50);
  box3 = new Blocks(400,800,50,50);
  box4 = new Blocks(450,800,50,50);
  box5 = new Blocks(500,800,50,50);
  box6 = new Blocks();
  box7 = new Blocks();
  box8 = new Blocks();
  box9 = new Blocks();
  box10 = new Blocks();
  box11 = new Blocks();
  box12 = new Blocks();
  box13 = new Blocks();
  box14 = new Blocks();
  box15 = new Blocks();
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  base1.display();
}