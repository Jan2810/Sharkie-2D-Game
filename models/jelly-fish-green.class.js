class JellyFishGreen extends MovableObject {

    height = 100;
    width = 85;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.x = 200 + Math.random() * 2160;
        this.y = 50 + Math.random() * 320;

        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }

}