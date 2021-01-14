class Drops {
    constructor(x,y,radius){
        var drops_options ={
            isStatic: false,
            density: 1,
            friction:1
        }
        this.body = Matter.Bodies.circle(x,y,this.radius/2, drops_options);
        this.radius = radius;
        this.animation = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png");
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.animation, position.x, position.y, this.radius, this.radius);
    }
}