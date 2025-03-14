class MovableObject {
    x = 20;
    y = 280;
    img;
    height = 150;
    width = 100;
    ImageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
    }

    moveRight() {
        console.log("moveRight");
        
    }

    moveLeft() {
        console.log("moveLeft");
        
    }
}