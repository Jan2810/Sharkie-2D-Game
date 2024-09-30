class Character extends MovableObject {

    world;
    height = 200;
    width = 200;
    x = 0;
    y = 0;
    speed = 5;
    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    swimming_sound = new Audio('audio/swim.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.applayGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);
        setInterval(() => {
            if(this.world.keyboard.UP && this.y > -70) {
                this.y -= this.speed;
                this.swimming_sound.play();
            }
            if(this.world.keyboard.DOWN && this.y < 310) {
                this.y += this.speed;
                this.swimming_sound.play();
            }
        }, 1000 / 60);

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 150);
    }



}