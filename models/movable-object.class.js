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
}