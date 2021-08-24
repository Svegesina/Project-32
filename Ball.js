class Ball{
constructor(x,y,w,h){
var options={
restitution:0.8
}
this.body=Bodies.rectangle(x,y,w,h,options)
this.w=w
this.y=y
this.h=h
this.x=x

World.add(world,this.body)
}
display(){
 var pos=this.body.position
 var angle=this.body.angle
push();
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
noStroke();
fill("red")
rect(pos.x,pos.y,this.w,this.h)
pop();
}

}