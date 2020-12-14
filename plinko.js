class Plinko
{
	constructor(x,y)
	{
		var options={
			isStaic:true
			
			}
		this.x=x;
		this.y=y;
		this.radius=10;
		this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
		World.add(world, this.body);

	}
    display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("white");
ellipseMode(CENTER);
ellipse(0,0,this.radius,this.radius);
pop();
}
}

