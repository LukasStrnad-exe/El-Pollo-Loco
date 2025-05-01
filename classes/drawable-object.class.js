class DrawableObject {
    x = 20;
    y = 280;
    img;
    height = 150;
    width = 100;
    ImageCache = {};
    currentImage = 0;


/**
 * The loadImage function creates a new Image object and sets its source to the specified path.
 * @param path - The `path` parameter in the `loadImage` function is a string that represents the file
 * path or URL of the image that you want to load. This path is used to set the `src` property of the
 * `Image` object, which will then load the image from the specified location.
 */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

/**
 * The function `loadImages` loads images from an array of paths and stores them in an image cache.
 * @param arr - The `arr` parameter in the `loadImages` function is an array containing the paths to
 * the images that need to be loaded.
 */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        });
    }

/**
 * Draw the ctx in the canvas
 * @param ctx - classes (Endboss,Character) to draw.
 */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
        }
    }
}