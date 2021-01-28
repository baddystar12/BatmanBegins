const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
var umbrella1;
var drops = [];
var maxDrops = 100;
var image1, image2, image3, image4;
var thunderFrame = 0;
var thunderbolt;
function preload(){
    image1 = loadImage("images/thunderbolt/1.png");
    image2 = loadImage("images/thunderbolt/2.png");
    image3 = loadImage("images/thunderbolt/3.png");
    image4 = loadImage("images/thunderbolt/4.png");
}
function setup(){
   var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    umbrella1 = new Umbrella(300,300);
    if(frameCount%100===0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    if (frameCount % 80 === 0) {
        thunderFrame = frameCount;
        thunderbolt = createSprite(random(10, 400), random(10,30), 10, 10);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunderbolt.addImage(image1);
            break;
            case 2: thunderbolt.addImage(image2);
            break;
            case 3: thunderbolt.addImage(image3);
            break;
            case 4: thunderbolt.addImage(image4);
            break;
            default:
            break;
        }
        thunderbolt.scale = random(0.5,1);
    }
    if(thunderFrame+10===frameCount&&thunderbolt){
        thunderbolt.destroy();
    }
    umbrella1.display();
    drawSprites();
}   

