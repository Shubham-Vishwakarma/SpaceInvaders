# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 2: Move Ship Vertically

### Add move method to Ship class
```
// The Ship
function Ship(canvas,x, y){
    
    //update y co-ordinate of ship
    this.move = function(dl){
        this.y = this.y - dl;
    }

}
```

### Add event listener on button press
```
window.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 37:
            // left arrow key
            break;
        case 38: 
            // up arrow key
            // move ship in up direction
            ship.move(4);
            break;
        case 39:
            // right arrow key
            break;
        case 40: 
            // down arrow key
            // move ship in down direction
            // but we dont want the ship to move backward
            // ship.move(-4);
            break;
    }
    render();   // re-draw with updated co-ordinates
});
```