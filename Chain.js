class Chain{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.03
        } 
       this.chain= Constraint.create(options);
       World.add(world,this.chain);

    }
    Display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

    
}
