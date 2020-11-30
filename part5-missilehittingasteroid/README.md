# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 5: Missile and Asteroid Colliding

### Check for Missile and Asteroid Collision
```
// start playing game. 
// loop through missile array and asteroid array to check if they are colliding
// increment score
function checkMissileAndAsteroidCollision(){
    for(let i = 0; i < missiles.length; i++){
        for(let j = 0; j < asteroids.length; j++){

            // check if asteroid and missile are colliding
            if(isMissileCollidingWithAsteroid(missiles[i], asteroids[j])){
                
                // increment score
                // larger point for destroying larger asteroids
                incrementScore(Math.ceil(asteroids[j].radius));

                // remove asteroid and missile if they are colliding
                asteroids.splice(j, 1);
                missiles.splice(i, 1);

            }

        }
    }
}
```

![distancebetweencircle.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part5-missilehittingasteroid/distancebetweencircle.png)
### 
Use Distance Formula To Check If Missile and Asteroid Are Colliding

```
// check if asteroid and missiles are colliding
// distance between two point is given by (d)^2 = (x1 - x2)^2 + (y1 - y2)^2
// for us missiles and asteroid are colliding if they touch each other or intersect
// hence the min distance between asteroid and missiles is missile.radius + asteroid.radius
// if the distance between center is less than addition of their radius, they are colliding
function isMissileCollidingWithAsteroid(missile, asteroid){
    if(missile && asteroid){
        const x2 = (missile.x - asteroid.x) * (missile.x - asteroid.x);
        const y2 = (missile.y - asteroid.y) * (missile.y - asteroid.y);
        const r2 = (missile.radius + asteroid.radius) * (missile.radius + asteroid.radius);

        return Math.floor(x2 + y2 - r2) <= 0 ? true : false;
    }
    return false;
}
```

### Output
![hitting.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part5-missilehittingasteroid/hitting.gif)