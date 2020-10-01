let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = "purple";
let score = 0;
let checkLose;
let sound1 = new Audio('sound/sound1.wav');
let sound2 = new Audio('sound/sound2.wav');
let loseSound = new Audio('sound/losesound.wav')

function scoreGame(){
    if (bar.y === ball.y && bar.x < ball.x && ball.x < bar.w + bar.x){
        score++;
        sound1.play()
        ball.dx = Math.floor(Math.random()*(20))-10;
        ball.dy = -ball.dy;
        if (score < 3) {
            ball.dy *=1;
        } else if (score < 5) {
            ball.dy = -8;
        } else if (score < 7) {
            ball.dy = -12;
        }
    }
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score,0,25);
}

function gameOver() {
    if(ball.y + ball.size > canvas.height) {
        loseSound.play();
        ball.x *= 1;
        checkLose = true;
        return checkLose;
    }
}

function game() {
    requestAnimationFrame(game);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    bar.drawBar();
    ball.drawBall();
    scoreGame();
    gameOver();
    if (checkLose){
        checkLose = false;
        ball.y = 100;
        ball.x = 300;
        if (confirm("Play again ?")) {
            document.location.reload(game);
        } else {
            score = 0;
            alert("Thank! F5 to play again :D");
            ball.dx = 0;
            ball.dy = 0;
        }
    }
    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
    function keyUp(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            bar.dx = 0;
        }
    }
    function keyDown(e) {
        if (e.key === 'ArrowLeft') {
            bar.moveLeft();
        }else if (e.key === 'ArrowRight') {
            bar.moveRight();
        }
    }
}
game();
