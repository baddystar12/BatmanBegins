class Umbrella {
    constructor(x,y,radius){
       var umbrella_options ={
           isStatic: true,
           density: 1,
           friction: 1
       }
       this.body = Bodies.circle(x,y,this.radius/2, umbrella_options);
       this.radius = radius;
       this.animation = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");
       World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.animation, position.x,position.y,this.radius, this.radius);
    }
}