class PufferFishRed extends MovableObject {

    height = 70;
    width = 70;
    
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 200 + Math.random()*2160;
        this.y = Math.random()*320;
        this.speed = Math.random() * 0.4;

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200)
    }
}