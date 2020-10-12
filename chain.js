
class chain{
constructor(bodyA,bodyB){
var options = {

    bodyA:bodyA,
    bodyB:bodyB,

    'stiffness':0.04,
    'length':10

}

this.Chain = Constraint.create(options);
World.add(world,this.Chain)
}

display(){
var a = this.Chain.bodyA.position
var b = this.Chain.bodyB.position  

strokeWeight(3);
line(a.x,a.y,b.x,b.y);

}


}