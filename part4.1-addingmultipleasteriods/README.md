# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 4.1: Adding Multiple Asteroid

### Add Asteroid Class

I have tried some random value to determine, position of new asteroids and it's next movement<br/>
The below logic is pure mathematical calculation.<br/>

```
// Random int number between given range Math.floor(Math.random() * (max - min + 1)) + min;
// After some trial and error, decided some of the below random values
function getNewAsteroid(){

    // determine random side of screen to begin
    const side = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    
    // get random x and y between screen range as start point of asteroid
    let x = Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0;
    let y = Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0;

    switch(side){
        // start from left screen
        case 0: 
            x = 0;
            break;
        // start from top screen
        case 1:
            y = 0;
            break;
        // start from right screen
        case 2:
            x = canvas.width;
            break;
        // start from bottom screen
        case 3:
            y = canvas.height;
            break;
    }

    // generate random number of vertices to give some shape to asteroid polygon
    const vertices = Math.floor(Math.random() * (10 - 7 + 1)) + 7;

    // generate random radius between minRadius and maxRadius
    const radius = Math.floor(Math.random() * (100 - 25 + 1)) + 25;

    // generate random rotation angle and speed for asteroid
    const rotationFactor = Math.random() * (1/radius - (-1/radius)) + (-1/radius);
    const speed = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);

    // It might be possible once the asteroid is added, the next x and y will be out of screen
    // This creates a flicker on the screen
    // pre-check next x and y of asteroid to avoid flicker on screen
    const _x = Math.floor(x + speed*Math.sin(0));
    const _y = Math.floor(y - speed*Math.cos(0));

    if(_x > 0 && _y > 0 && _x < canvas.width && _y < canvas.height)
        return new Asteroid(canvas, _x, _y, radius, vertices, rotationFactor, speed);
}
```

### Add a static asteroid and render it
```
const asteroids = []

function render() {
    requestAnimationFrame(render);
    
    // clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //save the current context
    context.save();

    // render asteroid
    asteroids.forEach((asteroid) => (asteroid.render()));

    // remove asteroid from array when asteroid moves out of screen
    asteroids = asteroids.filter(function(asteroid){
        return asteroid.x > 0 &&
        asteroid.y > 0 &&
        asteroid.x < canvas.width &&
        asteroid.y < canvas.height
    });

    // Keep minimum of 5 asteroids on the screen
    if(asteroids.length < 5){
        const asteroid = getNewAsteroid();
        if(asteroid) asteroids.push(asteroid);
    }

    // restore the saved context
    context.restore();

}
```

### Output
![addmultipleasteroids.gif](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part4.1-addingmultipleasteriods/addmultipleasteroids.gif)