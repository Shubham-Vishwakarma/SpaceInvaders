# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 2.2: Rotate Ship

### Add rotate method to Ship class
```
// The Ship
function Ship(canvas,x, y){
    
    // draw ship
            this.draw = function(){
                //save the current state
                this.context.save();

                // rotate the frame by angle in radians
                this.context.rotate(this.angle);

                /*
                ****************
                   DRAW SHIP
                ****************
                */

                // restore the previous state
                this.context.restore();

            }

    // convert degree to radians
    this.rotate = function(dr){
        this.angle = this.angle + Math.PI/180*dr;
    }

}
```

### Add event listener on button press
```
window.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 37:
            // left arrow key
            ship.rotate(-15);
            break;
        case 39:
            // right arrow key
            ship.rotate(15);
            break;
    }
});
```

### Output
![rotateship.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.2-rotateship/rotateship.gif)
