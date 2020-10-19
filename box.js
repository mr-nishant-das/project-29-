class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display_(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
      
        if(this.body.speed < 3){
         super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
       } 
      }
}