class Bar {
    constructor(x,y,w,h,dx,speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.speed = speed
    }

    drawBar(){
        this.animation();
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.fill();
    }
    animation() {
        this.x += this.dx;
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x + this.w > canvas.width) {
            this.x = canvas.width - this.w;
        }
    }
    moveRight() {
        this.dx = this.speed;
    }
    moveLeft() {
        this.dx = -this.speed;
    }
}
let bar = new Bar(250,500,120,10,0,10);