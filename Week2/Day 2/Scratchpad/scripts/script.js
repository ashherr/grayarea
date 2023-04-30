// constants here
const LOOP_MS = 1000 / 60; // 60 fps
const MAX_NUM_SHAPES = 10;
const SHOULD_REDRAW = true;

// global variables 
let shapes = [];
let canvas, ctx; 

// base class for all shapes
class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

// subclasses of Shape
// this one draws a circle
class Circle extends Shape {
    constructor(x, y, color, radius) {
        super(x, y, color);
        this.radius = radius;
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// this one draws a rectangle
class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Helper functions
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1000)) + min;
}

function randomColor() {
    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWYZ';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomShape() {
    const x = randomInt(0, canvas.width);
    const y = randomInt(0, canvas.height);
    const color = randomColor();

    if (Math.random() < 0.5) {
        const radius = randomInt(10, 50);
        return new Circle(x, y, color, radius);
    } else {
        const width = randomInt(10, 50);
        const height = randomInt(10, 50);
        return new Rectangle(x, y, color, width, height);
    }
}

// we basically made a really simple p5.js ourselves!
function draw() {
    if (SHOULD_REDRAW) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    for (const shape of shapes) {
        shape.draw(ctx);
    }
}

function update() {
    const shape = createRandomShape();
    shape.move(randomInt(-5, 5), randomInt(-5, 5));
    shapes.push(shape);
    if (shapes.length > MAX_NUM_SHAPES) {
        shapes.shift(); // remove the oldest shape to keep the number of shapes manageable
    }
    draw();
}

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(update, LOOP_MS); 
});