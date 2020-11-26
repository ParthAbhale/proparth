class Stone{
  constructor(x,y,r){

    var option = {
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
    }
     this.x = x;
     this.y = y;
     this.r = r;
     this.body = Bodies.circle(x,y,20,option)
     this.image=loadImage("stone.png")
     World.add(world,this.body)
  }
  display(){
    var playerpos = this.body.position
    push()
    translate(playerpos.x,playerpos.y)
    ellipseMode(RADIUS)
    image(this.image,0,0,50,50)
    // ellipse(0,0,20,20)
    pop()
  }
}