class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),
        new JellyFish(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/1. Light/1.png', 0, 0),
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);   
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);     

        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
    }
}