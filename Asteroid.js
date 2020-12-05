// The Asteroid
class Asteroid {
    constructor(canvas, x, y, radius, vertices, rotationFactor, speed) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vertices = vertices;
        this.angle = 0;
        this.rotationFactor = rotationFactor;
        this.speed = speed;

        this.render = function () {
            this.move();
            this.rotate();
            this.draw();
        };

        // draw asteroid
        this.draw = function () {
            // save the current context
            this.context.save();

            this.context.translate(this.x, this.y);
            this.context.rotate(this.angle);

            // draw asteroid
            this.context.strokeStyle = 'white';
            this.context.lineWidth = 5;
            this.context.beginPath();

            // find co-ordinates
            const angle = Math.PI / 180 * (360 / this.vertices);
            const _x = Math.floor(this.radius * Math.cos(angle));
            const _y = Math.floor(this.radius * Math.sin(angle));

            // draw asteroid
            for (let i = 0; i < this.vertices; i++) {
                this.context.rotate(angle);
                this.context.moveTo(this.radius, 0);
                this.context.lineTo(_x, _y);
            }

            this.context.closePath();
            this.context.stroke();

            //restore the last saved context
            this.context.restore();
        };

        this.move = function () {
            this.x = Math.floor(this.x + this.speed * Math.sin(this.angle));
            this.y = Math.floor(this.y - this.speed * Math.cos(this.angle));
        };

        // rotate the asteroid
        this.rotate = function () {
            this.angle += this.rotationFactor;
        };
    }
}