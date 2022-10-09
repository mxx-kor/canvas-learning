export class Sheep {
    constructor(img, stageWidth) {
        this.img = img;

        this.totalFrame = 8;
        this.curFrame = 0;

        this.imgWidth = 360;
        this.imgHeight = 300;

        this.sheepWidth = 180;
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    }

    draw(ctx, t, dots) {
        if (!this.time) {
            this.time = t;
        }

        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame == this.totalFrame) {
                this.curFrame = 0;
            }
        }
        this.animate(ctx, dots); 
    }

    animate(ctx, dots) {
        this.x -= this.speed;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';
        ctx.drawImage(
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        );
        ctx.restore();
    }
}