# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 3: Shooting Missile

### Add Missile Class

```
function Missile(canvas, x, y, angle){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.render = function(){
        this.update();
        this.draw();
    }

    this.draw = function(){
        // save context
        this.context.save();

        // draw missile
        this.context.beginPath();
        this.context.arc(this.x, this.y, 2, 0, 2*Math.PI);
        this.context.closePath();
        this.context.fillStyle = "white";
        this.context.fill();

        // restore context
        this.context.restore();
    }

    this.update = function(){
        this.x = Math.floor(this.x + 10*Math.sin(this.angle));
        this.y = Math.floor(this.y - 10*Math.cos(this.angle));
    }
}
```

### Add Shoot Function in Ship Class
```
function Ship(canvas, x, y, angle){

    this.shoot = function(){
        missiles.push(new Missile(this.canvas, this.x, this.y, this.angle))
    }
    
}
```

### Add Event Listener to Shoot on Space Button Press
```
window.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 32:
            //space button
            ship.shoot(); 
            break;
    }
});

```

### Update Render Function to Render Missile on Screen
Each missile is an individual object and independent of other.<br/>
This way missile can move freely in any direction irrespective of what path other missile are choosing.<br/>
To avoid out of memory exception, we need to remove missile from the array missiles.<br/>
```
function render() {
    requestAnimationFrame(render);
    
    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //save the current context
    context.save();

    // Render Ship
    ship.render();

    // draw missiles
    missiles.forEach((missile) => (missile.render()));

    // remove missile from array when out of screen
    missiles = missiles.filter((missile) => (
                missile.x > 0 &&
                missile.y > 0 &&
                missile.x < canvas.width &&
                missile.y < canvas.height
    ));

    // restore the saved context
    context.restore();

}
```

### Output
![shoot.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part3-shootingmissile/shoot.gif)
