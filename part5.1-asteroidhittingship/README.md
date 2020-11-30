# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 5.1: Spaceship and Asteroid Colliding

### Check for Spaceship and Asteroid Collision
```
// check whether spaceship has collided with asteroid
// this will be our game over condition
function checkSpaceshipAndAsteroidCollision(){

    for(let i = 0; i < asteroids.length; i++){

        // if spaceship has collided with asteroids, then it's game over condition
        if(isSpaceshipCollidingWithAsteroid(ship, asteroids[i])){

            //GAME OVER
            console.log('GAME OVER');
            alert('GAME OVER');

        }

    }

}
```

![distancebetweencircle.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part5-missilehittingasteroid/distancebetweencircle.png)
### 
Use Distance Formula To Check If Spaceship and Asteroid Are Colliding

```
// check if spaceship and asteroid are colliding using similar logic for missile and asteroids
function isSpaceshipCollidingWithAsteroid(ship, asteroid){

    // since we have considered spaceship as equilateral traingle
    // i will find the centroid of circle surrounding the spaceship
    // and then use similar logic to find collision of asteroid and spaceship
    // this approach is bit erroneous, but will it's ok for now 
    
    // Three vertex of ship
    // (ship.x + 20, ship.y + 0)
    // (ship.x + 0, ship.y - 36)
    // (ship.x - 20, ship.y + 0)
    // cx = (ship.x + 20 + ship.x + 0 + ship.x - 20)/3 = ship.x
    // cy = (ship.y + 0 + ship.y - 36 + ship.y + 0)/3 = ship.y - 12


    [cx, cy] = [ship.x, ship.y - 12];  // find center x and center y of spaceship
    const radiusOfSpaceShip = 24;   // approx distance from center of ship to any vertex using distance formula

    if(asteroid){
        const x2 = (cx - asteroid.x) * (cx - asteroid.x);
        const y2 = (cy - asteroid.y) * (cy - asteroid.y);
        const r2 = (radiusOfSpaceShip + asteroid.radius) * (radiusOfSpaceShip + asteroid.radius);

        return Math.floor(x2 + y2 - r2) <= 0 ? true : false;
    }

    return false;
}
```

### Output
![asteroidhittingspaceship.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part5.1-asteroidhittingship/asteroidhittingspaceship.png)