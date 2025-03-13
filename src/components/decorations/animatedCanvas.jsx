import React, {useEffect, useRef} from 'react'
import style from './animatedCanvas.module.css'

const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3,
};

class Meteor {
    constructor(gridSize, canvas) {
        this.x = 0;
        this.y = 0;
        this.direction = Direction.UP;
        this.speed = 0;
        this.length = 0;
        this.gridSize = gridSize;
        this.canvas = canvas;
        this.reset();
        this.hue = Math.random() * 360; // Start with a random hue
    }

    reset() {
        this.direction = Math.floor(Math.random() * 4);
        this.speed = 2 + Math.random() * 3;
        this.length = this.gridSize * (1 + Math.random() * 2);
        this.opacity = 0.6 + Math.random() * 0.4;
        this.hue = Math.random() * 360; // Reset to a new random hue

        const getMiddlePosition = (size) => {
            const margin = size * 0.2;
            return margin + Math.random() * (size * 0.6);
        };

        switch (this.direction) {
            case Direction.UP:
                this.x = Math.floor(getMiddlePosition(this.canvas.width) / this.gridSize) * this.gridSize;
                this.y = this.canvas.height;
                break;
            case Direction.RIGHT:
                this.x = 0;
                this.y = Math.floor(getMiddlePosition(this.canvas.height) / this.gridSize) * this.gridSize;
                break;
            case Direction.DOWN:
                this.x = Math.floor(getMiddlePosition(this.canvas.width) / this.gridSize) * this.gridSize;
                this.y = 0;
                break;
            case Direction.LEFT:
                this.x = this.canvas.width;
                this.y = Math.floor(getMiddlePosition(this.canvas.height) / this.gridSize) * this.gridSize;
                break;
        }
    }

    update(deltaTime) {
        switch (this.direction) {
            case Direction.UP:
                this.y -= this.speed;
                if (this.y + this.length < 0) this.reset();
                break;
            case Direction.RIGHT:
                this.x += this.speed;
                if (this.x > this.canvas.width) this.reset();
                break;
            case Direction.DOWN:
                this.y += this.speed;
                if (this.y > this.canvas.height) this.reset();
                break;
            case Direction.LEFT:
                this.x -= this.speed;
                if (this.x + this.length < 0) this.reset();
                break;
        }

        // Animate hue rotation smoothly over 5s
        this.hue += (180 / 2500) * deltaTime;
        if (this.hue > 360) this.hue -= 360; // Keep hue in 0-360 range
    }

    draw(ctx) {
        let startX = this.x;
        let startY = this.y;
        let endX = this.x;
        let endY = this.y;

        switch (this.direction) {
            case Direction.UP:
                endY = this.y + this.length;
                break;
            case Direction.RIGHT:
                endX = this.x - this.length;
                break;
            case Direction.DOWN:
                endY = this.y - this.length;
                break;
            case Direction.LEFT:
                endX = this.x + this.length;
                break;
        }

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, `rgba(99, 32, 238, 0)`);
        gradient.addColorStop(0.02, `rgba(99, 32, 238, 0.8)`);
        gradient.addColorStop(0.05, `rgba(14, 124, 123, 0.6)`);
        gradient.addColorStop(1, `rgba(14, 124, 123, 0)`);

        ctx.save();
        ctx.filter = `hue-rotate(${this.hue}deg)`;

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        ctx.restore();
    }
}

const AnimatedCanvas = ({gridSize = 150, meteorCount = 3}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.7;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const meteors = Array.from({length: meteorCount}, () => new Meteor(gridSize, canvas));

        let lastTime = 0;

        const animate = (time) => {
            let deltaTime = time - lastTime;
            lastTime = time;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background grid
            ctx.strokeStyle = 'rgba(66,66,66,0.7)';
            ctx.lineWidth = 1;

            for (let x = 0; x < canvas.width; x += gridSize) {
                const gradient = ctx.createLinearGradient(x, 0, x, canvas.height);
                gradient.addColorStop(0.1, `rgb(24, 20, 32)`);
                gradient.addColorStop(0.5, `rgba(69, 69, 69, 0.5)`);
                gradient.addColorStop(0.9, `rgb(24, 20, 32)`);
                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            meteors.forEach((meteor) => {
                meteor.update(deltaTime);
                meteor.draw(ctx);
            });

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [gridSize, meteorCount]);

    return <canvas ref={canvasRef} className={style.canvasStyling}></canvas>;
};

export default AnimatedCanvas;
