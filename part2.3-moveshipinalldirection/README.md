# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 2.3: Move Ship In All Direction

### Update Move method in Ship class

Moving the ship in all direction requires little more calculation and a bit of trigonometry

![trigonometry.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.3-moveshipinalldirection/trigonometry.png)


```
// The Ship
function Ship(canvas,x, y){

    // for smooth animation let requestAnimationFrame handle the updating and drawing the ship
    this.render = function(){

        // update the ship co-ordinates
        this.move();

        // draw the ship at position x, y
        this.draw();
        
    }
    
    // mark ship as moving
    this.start = function () {
        this.isMoving = true;
    };

    //update x and y co-ordinate of ship
    this.move = function () {

        // to animate little like real world
        // if ship is moving increase the speed of ship
        if(this.isMoving){
            this.speedFactor = this.speedFactor == 0 ? this.minSpeedFactor : this.speedFactor;
            this.speedFactor = this.speedFactor + 0.2 < this.maxSpeedFactor ? this.speedFactor + 0.2 : this.maxSpeedFactor ;
            this.speed = Math.pow(this.speedFactor, 3);
        }
        else{   // if ship is stopping decrease speed of ship
            this.speedFactor = this.speedFactor - 0.1 > 0 ? this.speedFactor - 0.1 : 0 ;
            this.speed = Math.pow(this.speedFactor, 3);
        }

        const nextX = Math.floor(this.x + this.speed * Math.sin(this.angle));
        const nextY = Math.floor(this.y - this.speed * Math.cos(this.angle));

        if (nextX > 0 && nextX < this.canvas.width &&
            nextY > 0 && nextY < this.canvas.height) {
            this.x = nextX;
            this.y = nextY;
        }

    };

    // mark ship as not moving
    this.stop = function () {
        this.isMoving = false;
    };

}
```

### Output
![moveship.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part2.3-moveshipinalldirection/moveship.gif)
