class Blower{
constructor(x,y,w,h){
var options={
isStatic:true
}
this.body=Bodies.rectangle(x,y,w,h,options)
this.x=x
this.y=y
this.w=w
this.h=h
World.add(world,this.body)
}




display(){
var pos=this.body.position
var angle=this.body.angle
push();
translate(pos.x,pos.y)
rectMode(CENTER)
noStroke();
fill("black")
rect(pos.x,pos.y,this.w,this.y)
push();
}

}