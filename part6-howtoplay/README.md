# SpaceInvaders
Asteroid Shooting Game using Javascript

## Part 6: Render How to Play Controls

### Render How to Play Move Controls
```
// Render How to Play Move Controls at bottom left of screen
function renderMoveControl(){
    context.font = "24px Arial";
    context.textBaseAlign = "middle"
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(`Use [ ↑ ]  [ ↓ ]  [ → ]  [ ← ] to move`, 200, canvas.height - 30);
}
```

### Render How to Play Shoot Controls
```
// Render How to Play Shoot Controls at bottom right of screen
function renderShootControl(){
    context.font = "24px Arial";
    context.textBaseAlign = "middle"
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(`Hit [ Space ] to fire`, canvas.width - 120, canvas.height - 30);
}
```

### Output
![howtoplay.png](https://github.com/Shubham-Vishwakarma/SpaceInvaders/blob/main/part6-howtoplay/howtoplay.png)