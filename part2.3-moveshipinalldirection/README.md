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
        const nextX = Math.floor(this.x + this.speed*Math.sin(this.angle));
        const nextY = Math.floor(this.y - this.speed*Math.cos(this.angle));

        // check boundary condition
        if(nextX > 0 && nextX < canvas.width &&
            nextY > 0 && nextY < canvas.height)
        {
            this.x = nextX;
            this.y = nextY;
        }
    }

}
```

### Output
![moveship.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.3-moveshipinalldirection/moveship.gif)
