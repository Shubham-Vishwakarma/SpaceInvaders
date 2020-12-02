# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 7: Explode Asteroid

### Explode Asteroid
Explode the larger asteroid, into small asteroid after missile hit.<br/>
We had already written getAsteriod function to add random asteroid in the game<br/>
Reusing the same function to split the asteroid into two parts<br/>
```
// Once missile is collided with asteroid. Break the asteroid into two parts
// each with radius between radius/2 to radius/4
// one moving in the same direction as original
// and another moving in opposite direction        
function explodeAsteroid(asteroid){

    var tempAsteroids = []

    // get first small asteroid
    const firstAsteroid = getAsteroid(asteroid.x, asteroid.y, asteroid.radius/2, asteroid.radius/4);
    if(firstAsteroid && firstAsteroid.radius > 25) tempAsteroids.push(firstAsteroid);

    // get second small asteroid
    const secondAsteroid = getAsteroid(asteroid.x, asteroid.y, asteroid.radius/2, asteroid.radius/4);
    if(secondAsteroid && secondAsteroid.radius > 25) tempAsteroids.push(secondAsteroid);

    return tempAsteroids;
}
```

### Output
![explodeasteroid.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part7-explodeasteroids/explodeasteroid.gif)