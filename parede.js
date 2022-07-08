class Parede{
    constructor(x,y,w,h){
        //this.
        this.body = Bodies.rectangle(x,y,w,h,{isStatic: true});
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    show(){
        var pos = this.body.position

        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}