# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 6.1: Render Score

### Define And Render Score
```
//define score
var score = 0;

// Render Score
function renderScore(){
    context.fillStyle = "white";
    context.font = "36px Arial";

    var textString = `Score = ${score}`;
    var textWidth = context.measureText(textString).width;

    context.fillText(textString, (canvas.width/2) - (textWidth/2), 50);
}
```

### Increment Score
```
// increment score when missile collidies with Asteroids
// print the score 
function incrementScore(point){
    score += point;
    console.log(`Current Score = ${score}`);
}
```

### Output
![displayscore.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part6.1-displayscore/displayscore.png)