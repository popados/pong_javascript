class Vec
{
  contructor(x = 0, y = 0)
  {
    this.x = x;
    this.y = y;
  }
}

class Rect{
  contructor(w, h){
    this.pos = new Vec;
    this.size = new Vec(w, h);
  }
}

class Ball extends Rect{
  contructor(){
    Super(10, 10);
    this.vel = new Vec;
  }
}

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
console.log(ball);

// ball.pos.x = 100;
// ball.pos.y = 50;

context.fillStyle = '#000';
context.fillRect(0,0, canvas.width, canvas.height);

context.fillStyle = '#fff';
context.fillRect(100, 50, 10, 10);
