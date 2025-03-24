class DrawableObject {
    x = 20;
    y = 280;
    img;
    height = 150;
    width = 100;
    ImageCache = {};
    currentImage = 0;


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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof TinyChicken || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}