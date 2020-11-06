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
        case 38: 
            // up arrow key
            // move ship in up direction
            ship.move(4);
            break;
    }
    render();   // re-draw with updated co-ordinates
});
```

### Output
![moveship.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2-moveshipvertically/moveship.gif)
