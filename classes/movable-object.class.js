class MovableObject {
    x = 20;
    y = 280;
    img;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("moveRight");
        
    }

    moveLeft() {
        console.log("moveLeft");
        
    }
}