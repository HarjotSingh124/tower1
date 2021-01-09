class block {
    constructor (x,y,width,height){
    var options={
        'isStatic': false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
          this.height=height;
          this.width=width;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER);
          fill("blue");
          rect(0, 0,this.width,this.height);
          pop();
        }
      };
    