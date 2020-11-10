class plinko{
    constructor(){
     options={
        isStatic : false,
        'restitution': 0.8,
        'friction': 1.0,
        'density': 1.0
     }
     this.body = Matter.Bodies.circle(x,y,2,options)
     this.width = width;
     this.height = height;

     World.add(world, this.body);
  }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
      }
}