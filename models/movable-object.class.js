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
        }, 1000/60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }

    moveUp() {

    }
}