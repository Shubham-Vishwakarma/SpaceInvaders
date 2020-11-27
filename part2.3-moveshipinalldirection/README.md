# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 2.3: Move Ship In All Direction

### Update Move method in Ship class

Moving the ship in all direction requires little more calculation and a bit of trigonometry

![trigonometry.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.3-moveshipinalldirection/trigonometry.png)


```
// The Ship
function Ship(canvas,x, y){
    
    //update x and y co-ordinate of ship
    this.move = function(){
        this.x = Math.floor(this.x + this.speed*Math.sin(this.angle));
        this.y = Math.floor(this.y - this.speed*Math.cos(this.angle));
    }

}
```

### Output
![moveship.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.3-moveshipinalldirection/moveship.gif)
