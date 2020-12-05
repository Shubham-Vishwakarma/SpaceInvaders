// The AsteroidHelper
class AsteroidHelper {

    // Random int number between given range Math.floor(Math.random() * (max - min + 1)) + min;
    // After some trial and error, decided some of the below random values
    static getNewAsteroid(canvas){

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

        // get new asteroid
        return this.getAsteroid(canvas, x, y, 100, 25);

    }

    // Return a new asteroid with some random values
    static getAsteroid(canvas, x, y, minRadius, maxRadius){
            
        // generate random number of vertices to give some shape to asteroid polygon
        const vertices = Math.floor(Math.random() * (10 - 7 + 1)) + 7;

        // generate random radius between minRadius and maxRadius
        const radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;

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

    // Once missile is collided with asteroid. Break the asteroid into two parts
    // each with radius between radius/2 to radius/4
    // one moving in the same direction as original
    // and another moving in opposite direction        
    static explodeAsteroid(largeAsteroid, n = 2){

        var asteroids = []

        for(let i = 0; i < n; i++){
            // get small asteroid
            const smallAsteroid = this.getAsteroid(canvas, largeAsteroid.x, largeAsteroid.y, largeAsteroid.radius/2, largeAsteroid.radius/4);

            // ignore too small asteroids            
            if(smallAsteroid && smallAsteroid.radius > 25) asteroids.push(smallAsteroid);    
        }
        
        return asteroids;
    }
}