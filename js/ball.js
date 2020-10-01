class Ball {
    constructor(x,y,size,dx,dy) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill();
        this.animation();
    }
    animation() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            sound2.play();
            this.dx *= -1;
        }
        if (this.y - this.size < 0) {
            sound2.play();
            this.dy *= -1;
        }
    }
}
let ball = new Ball(300,100,10,Math.floor(Math.random()*(20))-10,5);
