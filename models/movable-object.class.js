class MovableObject {
    x;
    y;
    height;
    width;
    img;
    speed = 0.15;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 2;
    acceleration = 1;
    energy = 100;

    applayGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y += this.speedY;
                // this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 300;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof JellyFish || this instanceof JellyFishYellow || this instanceof JellyFishGreen || this instanceof PufferFish || this instanceof PufferFishRed || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // Kollisionsberechnung
    isColliding(object) {
        return (this.x + this.width) >= object.x && this.x <= (object.x + object.width) &&
            (this.y + this.height) >= object.y &&
            this.y <= (object.y + object.height);
    }

    // // Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding(obj) {
    //     return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
    //         (this.Y + this.offsetY + this.height) >= obj.Y &&
    //         (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
    //         obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    // }

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
            console.log('Character is dead');
        }
    }

    isDead() {
        return this.energy == 0;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        for (let i = 0; i < images.length; i++) {
            let path = images[i];
            this.img = this.imageCache[path];
        }
    }

}