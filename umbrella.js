class Umbrella {
    constructor(x,y){
       var umbrella_options ={
           isStatic: true,
           density: 1,
           friction: 1
       }
       this.body = Bodies.circle(x,y,50, umbrella_options);
       this.radius = 50;
       this.image = loadImage("images/Walking Frame/walking_1.png");
       World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, position.x-30,position.y+200,200,200);
    }
}
