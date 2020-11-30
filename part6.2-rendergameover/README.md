# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 6.2: Render Game Over

### Render Game Over
```
//define score
var score = 0;

// Render Game Over
function renderGameOver(){

    context.fillStyle = "white";
    context.font = "64px Arial";

    var gameOverTextString = `Game Over`;
    var gameOverTextWidth = context.measureText(gameOverTextString).width;

    context.fillText(gameOverTextString, (canvas.width/2) - (gameOverTextWidth/2), canvas.height/2 - 32);

    var yourScoreTextString = `Your Score = ${score}`;
    var yourScoreTextWidth = context.measureText(yourScoreTextString).width;

    context.fillText(yourScoreTextString, (canvas.width/2) - (yourScoreTextWidth/2), canvas.height/2 + 32);

}
```

### Cancel Animation and Display Game Over
```
// check whether spaceship has collided with asteroid
// this will be our game over condition
function checkSpaceshipAndAsteroidCollision(){

    for(let i = 0; i < asteroids.length; i++){

        // if spaceship has collided with asteroids, then it's game over condition
        if(isSpaceshipCollidingWithAsteroid(ship, asteroids[i])){

            //GAME OVER
            console.log('GAME OVER');
            
            // restore the last saved context
            context.restore();

            cancelAnimationFrame(requestAnimationFrameId);
            
            renderGameOver();

        }

    }

}
```

### Output
![rendergameover.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part6.2-rendergameover/rendergameover.png)