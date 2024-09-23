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
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/1. Light/2.png', 720, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/1. Light/1.png', 1440, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/1. Light/2.png', 2160, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 2880, 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/1. Light/1.png', 2880, 0),
    ];
    canvas;
    ctx;
    keyboard;
    camera_x  = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

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
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
        if(object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }



}