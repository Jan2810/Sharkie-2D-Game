class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    constructor (path, x, y){
        super().loadImage(path);
        this.x = x;
        this.y = y;
    }
}