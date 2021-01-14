const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
var umbrella1;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(1000,1000,40);
    engine = Engine.create();
    world = engine.world;
    umbrella1 = new Umbrella(300,300);
    drops1 = new Drops(30,30,30);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    drops1.display();
    umbrella1.display();
}   

