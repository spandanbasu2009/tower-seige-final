class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("box.png");
      this.Visibility = 255;
    }

    display(){
      var angle = this.body.angle;
      if(this.body.speed < 10){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
    }
  
  };
  