class Game {
    
    static checkMissileAndAsteroidCollision(missiles, asteroids){
        for(let i = 0; i < missiles.length; i++){
            for(let j = 0; j < asteroids.length; j++){

                // check if asteroid and missile are colliding
                if(this.isMissileCollidingWithAsteroid(missiles[i], asteroids[j])){
                    
                    // increment score
                    // larger point for destroying larger asteroids
                    score += ScoreCalculator.getScore(Math.ceil(asteroids[j].radius));

                    // break asteroid into small asteroids
                    const smallAsteroids = AsteroidHelper.explodeAsteroid(asteroids[j]);
                    smallAsteroids.forEach((asteroid) => (asteroids.push(asteroid)));

                    // remove asteroid and missile if they are colliding
                    asteroids.splice(j, 1);
                    missiles.splice(i, 1);

                }

            }
        }
    }

    // check if asteroid and missiles are colliding
    // distance between two point is given by (d)^2 = (x1 - x2)^2 + (y1 - y2)^2
    // for us missiles and asteroid are colliding if they touch each other or intersect
    // hence the min distance between asteroid and missiles is missile.radius + asteroid.radius
    // if the distance between center is less than addition of their radius, they are colliding
    static isMissileCollidingWithAsteroid(missile, asteroid){
        if(missile && asteroid){
            const x2 = (missile.x - asteroid.x) * (missile.x - asteroid.x);
            const y2 = (missile.y - asteroid.y) * (missile.y - asteroid.y);
            const r2 = (missile.radius + asteroid.radius) * (missile.radius + asteroid.radius);

            return Math.floor(x2 + y2 - r2) <= 0 ? true : false;
        }
        return false;
    }

    // check whether spaceship has collided with asteroid
    // this will be our game over condition
    static checkSpaceshipAndAsteroidCollision(ship, asteroids){

        for(let i = 0; i < asteroids.length; i++){

            // if spaceship has collided with asteroids, then it's game over condition
            if(this.isSpaceshipCollidingWithAsteroid(ship, asteroids[i])){

                isGameOver = true;

                //GAME OVER
                console.log('GAME OVER');
                
                // set high score
                ScoreCalculator.setHighScore(score);

            }
        }

    }

    // check if spaceship and asteroid are colliding using similar logic for missile and asteroids
    static isSpaceshipCollidingWithAsteroid(ship, asteroid){

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


        let cx, cy;
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

}