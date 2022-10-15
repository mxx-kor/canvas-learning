import {
    Hill
} from './hill.js';

import {
    SheepController
} from './sheep-controller.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.dayNightBtn = document.createElement('button');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.dayNightBtn);
        document.body.appendChild(this.canvas);
        this.dayNightBtn.textContent = 'Day';
        this.dayNight = true;

        this.hills = [
            new Hill('#fd6bea', 0.2, 12),
            new Hill('#ff59c2', 0.5, 8),
            new Hill('#ff4674', 1.4, 6)
        ];

        this.sheepController = new SheepController();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.dayNightBtn.addEventListener('click', this.dayNightToggle.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.sheepController.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx)
        }

        this.sheepController.draw(this.ctx, t, dots);

        this.ctx.fillStyle = '#000000'
        this.sun = new Image();
        this.sun.src = '/assets/sun.png'
        this.ctx.drawImage(this.sun, 0, 0, 100, 100);
    }

    dayNightToggle() {
        this.dayNight = !this.dayNight
        this.dayNightBtn.textContent = this.dayNight ? 'Day' : 'Night'
        if (this.dayNight) {
            document.querySelector('body').style.backgroundColor = '#ffcaec'
            this.hills[0].color = '#fd6bea'
            this.hills[1].color = '#ff59c2'
            this.hills[2].color = '#ff4674'
        } else {
            document.querySelector('body').style.backgroundColor = '#242F9B'
            this.hills[0].color = '#DBDFFD'
            this.hills[1].color = '#9BA3EB'
            this.hills[2].color = '#646FD4'
        }
    }
}

window.onload = () => {
    new App();
}