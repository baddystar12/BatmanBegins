class Umbrella {
    constructor(x,y,radius){
       var umbrella_options ={
           isStatic: true,
           density: 1,
           friction: 1
       }
       this.body = Bodies.circle(x,y,this.radius/2, umbrella_options);
       this.radius = radius;
       this.image = loadImage("images/Walking Frame/walking_1.png");
       World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, position.x,position.y,this.radius, this.radius);
    }
}
