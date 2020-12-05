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
        this.minSpeed = 4;
        this.maxSpeed = 32;
        this.speed = this.minSpeed;

        this.render = function () {
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

        this.start = function () {
            this.speed = this.speed + 2 <= this.maxSpeed ? this.speed + 2 : this.maxSpeed;
            this.move();
        };

        //update x and y co-ordinate of ship
        this.move = function () {

            const nextX = Math.floor(this.x + this.speed * Math.sin(this.angle));
            const nextY = Math.floor(this.y - this.speed * Math.cos(this.angle));

            if (nextX > 0 && nextX < this.canvas.width &&
                nextY > 0 && nextY < this.canvas.height) {
                this.x = nextX;
                this.y = nextY;
            }

        };

        this.stop = function () {
            while (this.speed <= this.minSpeed) {
                this.speed = this.speed / 2;
                this.x = Math.floor(this.x + this.speed * Math.sin(this.angle));
                this.y = Math.floor(this.y - this.speed * Math.cos(this.angle));
            }
            this.speed = this.minSpeed;
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