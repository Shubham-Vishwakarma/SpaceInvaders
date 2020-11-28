# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 4: Making Asteroid

### Add Asteroid Class
To add some visual effect we will rotate the asteroid around it's center
```
// The Asteroid
function Asteroid(canvas, x, y, radius, vertices){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vertices = vertices;
    this.angle = 0;

    this.render = function(){
        this.rotate();
        this.draw();
    }

    // draw asteroid
    this.draw = function(){
        // save the current context
        this.context.save();

        this.context.translate(this.x, this.y);
        this.context.rotate(this.angle);

        // draw asteroid
        this.context.strokeStyle = 'white';
        this.context.lineWidth = 2;
        this.context.beginPath();
        
        // find co-ordinates
        const angle = Math.PI/180*(360/this.vertices);
        const _x = Math.floor(this.radius*Math.cos(angle));
        const _y = Math.floor(this.radius*Math.sin(angle));

        // draw asteroid
        for(let i = 0; i < this.vertices; i++){
            this.context.rotate(angle);
            this.context.moveTo(this.radius, 0);
            this.context.lineTo(_x, _y);    
        }

        this.context.closePath();
        this.context.stroke();

        //restore the last saved context
        this.context.restore();
    }

    // rotate the asteroid
    this.rotate = function(){
        this.angle += 0.009;
    }
}
```

### Add a static asteroid and render it
```
const asteroid = new Asteroid(canvas, canvas.width/2, canvas.height/2, 200, 10);

function render() {
    requestAnimationFrame(render);
    
    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //save the current context
    context.save();

    // render asteroid
    asteroid.render();

    // restore the saved context
    context.restore();
}
```

### Output
![singleasteroid.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part4-makingasteroids/singleasteroid.gif)