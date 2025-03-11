class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    constructor(ImagePath,x,y) {
        super();
        this.loadImage(ImagePath);
        this.x = x;
        this.y = 480 - this.height;
        
    }
}