// The Ship
class Ship {
    constructor(canvas, x, y, angle) {

        // Initialize properties
        // Assuming x and y as the bottom-center of ship
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.minSpeedFactor = 1;
        this.maxSpeedFactor = 3;
        this.speed = 0;
        this.speedFactor = 0;
        this.isMoving = false;
        
        this.render = function () {

            // update the ship co-ordinates
            this.move();

            // draw the ship at position x, y
            this.draw();

        };

        // draw ship
        this.draw = function () {
            //save the current state
            this.context.save();

            // move the origin to x, y
            this.context.translate(this.x, this.y);
            // rotate the frame by angle in radians
            this.context.rotate(this.angle);

            // draw ship -> equilateral triangle of length 40
            this.context.beginPath(); // start drawing
            this.context.moveTo(0, 0); // move to origin
            this.context.lineTo(20, 0);
            this.context.lineTo(0, -36); //height of equilateral triangle
            this.context.lineTo(-20, 0);
            this.context.closePath(); //close the shape
            this.context.fillStyle = "white"; //set fillstyle as white, since the background is black
            this.context.fill(); //fill the shape


            //draw fake flames
            this.context.beginPath();
            this.context.moveTo(0, 0);
            this.context.lineTo(8, 0);
            this.context.lineTo(0, 13);
            this.context.lineTo(-8, 0);
            this.context.closePath();
            this.context.fillStyle = "yellow";
            this.context.fill();

            this.context.beginPath();
            this.context.moveTo(0, 0);
            this.context.lineTo(5, 0);
            this.context.lineTo(0, 8);
            this.context.lineTo(-5, 0);
            this.context.closePath();
            this.context.fillStyle = "red";
            this.context.fill();

            // restore the previous state
            this.context.restore();

        };

        // mark ship as moving
        this.start = function () {
            this.isMoving = true;
        };

        //update x and y co-ordinate of ship
        this.move = function () {

            // if ship is moving increase the speed of ship
            if(this.isMoving){
                this.speedFactor = this.speedFactor == 0 ? this.minSpeedFactor : this.speedFactor;
                this.speedFactor = this.speedFactor + 0.2 < this.maxSpeedFactor ? this.speedFactor + 0.2 : this.maxSpeedFactor ;
                this.speed = Math.pow(this.speedFactor, 3);
            }
            else{   // if ship is stopping decrease speed of ship
                this.speedFactor = this.speedFactor - 0.1 > 0 ? this.speedFactor - 0.1 : 0 ;
                this.speed = Math.pow(this.speedFactor, 3);
            }

            const nextX = Math.floor(this.x + this.speed * Math.sin(this.angle));
            const nextY = Math.floor(this.y - this.speed * Math.cos(this.angle));

            if (nextX > 0 && nextX < this.canvas.width &&
                nextY > 0 && nextY < this.canvas.height) {
                this.x = nextX;
                this.y = nextY;
            }

        };

        // mark ship as not moving
        this.stop = function () {
            this.isMoving = false;
        };

        // convert degree to radians
        this.rotate = function (dr) {
            this.angle = this.angle + Math.PI / 180 * dr;
        };

        this.shoot = function () {
            return new Missile(this.canvas, this.x, this.y, this.angle);
        };
    }
}