class Cirle{
    x
    y
    radius
    color

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    render = function (){
        const ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath()

        ctx.arc(this.x,this.y,this.radius, 0,2*Math.PI)

        ctx.fill();
        ctx.strokeStyle(this.color)

    }
}
 let newCirle= new Cirle(10,10,100,"#0000000",)
newCirle.render()