class Bob {
    constructor(x,y,r) {

        var bob_options={
            restitution:1,
            friction: 0,
            frictionAir: 0,
            inertia: Infinity
        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,bob_options);
        World.add(world,this.body);
    }

    display()
    {   var bobpos =this.body.position;
        push();
        translate(bobpos.x, bobpos.y);
        rectMode(CENTER);
        stroke("red");
        strokeWeight(4)
        fill("blue")
        ellipse(0, 0,this.r,this.r);
        pop();
    }
}