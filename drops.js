class Drops {
    constructor(x,y){
        var drops_options ={
            isStatic: false,
            density: 1,
            restitution: 0.1
        }
        this.body = Matter.Bodies.circle(x,y,5, drops_options);
        this.radius = 5;
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        ellipseMode(CENTER);
        fill("turquoise");
        ellipse(position.x, position.y, this.radius, this.radius);
    }
    update(){
        if(this.body.position.y>900){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
    }
}
