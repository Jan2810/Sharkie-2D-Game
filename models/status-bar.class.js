class Statusbar extends DrawableObject {
    percentage = 100;

    IMAGES_ENERGY = [
        'img/4. Marcadores/green/Life/0_copia 3.png',
        'img/4. Marcadores/green/Life/20_copia 4.png',
        'img/4. Marcadores/green/Life/40_copia 3.png',
        'img/4. Marcadores/green/Life/60_copia 3.png',
        'img/4. Marcadores/green/Life/80_copia 3.png',
        'img/4. Marcadores/green/Life/100_copia 2.png',
    ];

    IMAGES_POISON = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    IMAGES_COINS = [
        'img/4. Marcadores/green/Coin/0_ copia 4.png',
        'img/4. Marcadores/green/Coin/20_ copia 2.png',
        'img/4. Marcadores/green/Coin/40_ copia 4.png',
        'img/4. Marcadores/green/Coin/60_ copia 4.png',
        'img/4. Marcadores/green/Coin/80_ copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_ENERGY);
        this.loadImages(this.IMAGES_POISON);
        this.loadImages(this.IMAGES_COINS);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}