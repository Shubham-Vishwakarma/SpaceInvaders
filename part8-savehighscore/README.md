# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 7: Save High Score

### Use localStorage to Save High Score
```
// get high score
function getHighScore(){
    let highScore = localStorage.getItem('spaceInvadersHighScore');
    return highScore == null ? 0 : parseInt(highScore);   
}

// set high score
function setHighScore(score){
    if(score > highScore){
        localStorage.setItem('spaceInvadersHighScore', score);
    }
}
```