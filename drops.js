class Drops {
    constructor(x,y,radius){
        var drops_options ={
            isStatic: false,
            density: 1,
            friction:1
        }
        this.body = Matter.Bodies.circle(x,y,this.radius/2, drops_options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        ellipseMode(CENTER);
        ellipse(position.x, position.y, this.radius, this.radius);
    }
}
