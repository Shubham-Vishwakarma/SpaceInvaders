class ScoreCalculator{
    
    // get high score
    static getHighScore(){
        let highScore = localStorage.getItem('spaceInvadersHighScore');
        return highScore == null ? 0 : parseInt(highScore);   
    }

    // set high score
    static setHighScore(score){
        if(score > highScore){
            localStorage.setItem('spaceInvadersHighScore', score);
        }
    }
 
    static getScore(point){
        return Math.floor(point/10);
    }
}