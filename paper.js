class Paper {
    constructor(x, y, radius) {
      var options = {
        
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
     
    fill ("grey")
     
      image (this.image,0,-22, this.radius,this.radius);
      pop();
    }
  }