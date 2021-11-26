const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var pelota;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  boton1=createImg("right.png");
  boton1.position(20,30);
  boton1.size(50,50);
  boton1.mouseClicked(hFuerza);

  boton2=createImg("up.png");
  boton2.position(220,30);
  boton2.size(50,50);
  boton2.mouseClicked(vFuerza);

  var pelota_op={
    restitution:1.0
  }
  pelota =Bodies.circle(70,70,40,pelota_op);
  World.add(world,pelota);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(pelota.position.x,pelota.position.y,40);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hFuerza(){
  Matter.Body.applyForce(pelota,{x:0,y:0},{x:0.05,y:0});
}

function vFuerza(){
  Matter.Body.applyForce(pelota,{x:0,y:0},{x:0,y:-0.05});
}