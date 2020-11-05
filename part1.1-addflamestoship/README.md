# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 1: Create Fixed Ship at Center of Screen

### Define Ship Object
```
function Ship(canvas,x, y){

    // Initialize properties
    // Assuming x and y as the bottom-center of ship
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.x = x;
    this.y = y;

    this.render = function(){
        // draw the ship as position x, y
        this.draw();
    }

    this.draw = function(){

        // move the origin to x, y
        this.context.translate(this.x, this.y);

        // draw ship -> equilateral triangle of length 40
        this.context.beginPath();   // start drawing
        this.context.moveTo(0, 0);  // move to origin
        this.context.lineTo(20, 0); 
        this.context.lineTo(0, -Math.sqrt(3)/2*40); //height of equilateral triangle
        this.context.lineTo(-20, 0);
        this.context.closePath();   //close the shape
        this.context.fillStyle = "white";   //set fillstyle as white, since the background is black
        this.context.fill();    //fill the shape

        //restore the previous state
        this.context.translate(-this.x, -this.y);
 
    }
```

### Create Ship Object and Render it
```
const ship = new Ship(canvas, canvas.width/2, canvas.height/2);
ship.render();
```

### Output
![fixedimage.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part1-createfixedship/fixedship.png)
