class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

/**
 * The constructor function initializes an object with an image loaded from a specified path and sets
 * its x and y coordinates.
 * @param ImagePath - The `ImagePath` parameter is a string that represents the path to the image file
 * that will be loaded for this object. It is used to specify the location of the image resource that
 * will be displayed.
 * @param x - The `x` parameter in the constructor represents the horizontal position where the image
 * will be placed on the screen. It determines the initial x-coordinate of the image within the game or
 * application.
 */
    constructor(ImagePath,x) {
        super();
        this.loadImage(ImagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}