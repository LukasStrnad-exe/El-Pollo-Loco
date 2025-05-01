class StatusBar extends DrawableObject {

/**
 * Initializes the object with default width and height values.
 * Typically used to set up dimensions for a UI element or an in-game object.
 */
    constructor() {
        super();
        this.width = 200;
        this.height = 60;
    }

/**
 * Sets the object's percentage value and updates the image based on the current state.
 * The image is selected from the `IMAGES` array using the result of `resolveImageIndex()`.
 * 
 * @param {number} percentage - The percentage value to set (e.g., health or progress).
 */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }

/**
 * Resolves the appropriate image index based on the current percentage.
 * The index corresponds to different visual representations based on the percentage value.
 *
 * @returns {number} The index of the image to be used, based on the percentage value.
 */
    resolveImageIndex() {
        if (this.percentage >= 100) {return 5;} 
        else if (this.percentage >= 80) {return 4;}
        else if (this.percentage >= 60) {return 3;}  
        else if (this.percentage >= 40) {return 2;} 
        else if (this.percentage >= 20) {return 1;}
        else {return 0;}
    }
}
