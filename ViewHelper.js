// Render How to Play Move Controls at bottom left of screen
function renderMoveControl(canvas, context){
    context.font = "16pt Arial";
    context.textBaseAlign = "middle"
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(`Use [ ↑ ]  [ ↓ ]  [ → ]  [ ← ] to move`, 200, canvas.height - 30);
}

// Render How to Play Shoot Controls at bottom right of screen
function renderShootControl(canvas, context){
    context.font = "16pt Arial";
    context.textBaseAlign = "middle"
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(`Hit [ Space ] to fire`, canvas.width - 120, canvas.height - 30);
}

// Render Score
function renderScore(canvas, context, score){
    context.fillStyle = "white";
    context.font = "16pt Arial";

    var textString = `Score = ${score}`;
    var textWidth = context.measureText(textString).width;

    context.fillText(textString, 150, 50);
}

// Render High Score
function renderHighScore(canvas, context, highScore){
    context.fillStyle = "white";
    context.font = "16pt Arial";

    var textString = `High Score = ${highScore}`;
    var textWidth = context.measureText(textString).width;

    context.fillText(textString, canvas.width - 200, 50);
}

// Render Game Over
function renderGameOver(){

    context.fillStyle = "white";
    context.font = "bold 64pt Arial";

    var gameOverTextString = `Game Over`;
    var gameOverTextWidth = context.measureText(gameOverTextString).width;

    context.fillText(gameOverTextString, (canvas.width/2) - (gameOverTextWidth/2), canvas.height/2 - 36);

    var yourScoreTextString = `Your Score = ${score}`;
    var yourScoreTextWidth = context.measureText(yourScoreTextString).width;

    context.fillText(yourScoreTextString, (canvas.width/2) - (yourScoreTextWidth/2), canvas.height/2 + 36);

    renderPlayAgain(context, false);
}

// Render Play Again
function renderPlayAgain(context, isInside){
    
    context.strokeStyle = "white"
    context.fillStyle = isInside ? "black" : "white";
    context.fillRect(canvas.width/2 - 200 , canvas.height/2 + 64, 400, 100);
    context.strokeRect(canvas.width/2 - 200 , canvas.height/2 + 64, 400, 100);

    context.font = "bold 32pt Arial";
    var playAgainTextString = `Play Again!!!`;
    var playAgainTextWidth = context.measureText(playAgainTextString).width;

    context.fillStyle = isInside ? "white" : "black";
    context.fillText(playAgainTextString, (canvas.width/2) - (playAgainTextWidth/2), canvas.height/2 + 125);

}