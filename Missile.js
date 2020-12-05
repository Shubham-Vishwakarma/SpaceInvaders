// The Missile
class Missile {
    constructor(canvas, x, y, angle) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.radius = 2;

        this.render = function () {
            this.update();
            this.draw();
        };

        this.draw = function () {
            // save context
            this.context.save();

            // draw missile
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            this.context.closePath();
            this.context.fillStyle = "white";
            this.context.fill();

            // restore context
            this.context.restore();
        };

        this.update = function () {
            this.x = Math.floor(this.x + 10 * Math.sin(this.angle));
            this.y = Math.floor(this.y - 10 * Math.cos(this.angle));
        };
    }
}
