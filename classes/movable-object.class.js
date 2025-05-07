class MovableObject extends DrawableObject{
    offset = { top: 0, bottom: 0, left: 0, right: 0 };
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;


/**
 * Simulates gravity by continuously adjusting the object's vertical position (`y`)
 * and vertical speed (`speedY`) at a fixed interval.
 * Only applies gravity when the object is above the ground or moving upward.
 * 
 * Called typically on movable characters or objects to create falling or jumping behavior.
 */
    apllyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

/**
 * Determines whether the object is currently above the ground level.
 * Uses different ground thresholds depending on whether the object is a ThrowableObject.
 *
 * @returns {boolean} True if the object is above the ground; otherwise, false.
 */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
           return this.y < 360
        }
        else {
            return this.y < 189;
        }
    }

/**
 * Applies damage to the object by reducing its energy.
 * If energy drops to 0 or below, it's clamped at 0.
 * If the object survives, records the timestamp of the last hit.
 *
 * @param {number} damage - The amount of damage to apply.
 */
    hit(damage) {
        this.energy -= damage;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

/**
 * Checks whether the object is currently in a "hurt" state.
 * The object is considered hurt if less than 1 second has passed since the last hit.
 *
 * @returns {boolean} True if the object was hit within the last second, otherwise false.
 */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 1;
    }

/**
 * Checks whether the object is dead.
 * An object is considered dead if its energy is exactly 0.
 *
 * @returns {boolean} True if the object's energy is 0; otherwise, false.
 */
    isDead() {
        return this.energy === 0;
    }


/**
 * Checks for a collision between this object and another object using axis-aligned bounding boxes (AABB),
 * adjusted by optional offset margins for more accurate hitboxes.
 * 
 * @param {Object} obj - The other object to check for collision.
 * @param {number} obj.x - The x-coordinate of the other object.
 * @param {number} obj.y - The y-coordinate of the other object.
 * @param {number} obj.width - The width of the other object.
 * @param {number} obj.height - The height of the other object.
 * @param {Object} obj.offset - The offset for fine-tuning collision detection.
 * @param {number} obj.offset.top
 * @param {number} obj.offset.bottom
 * @param {number} obj.offset.left
 * @param {number} obj.offset.right
 * @returns {boolean} True if the bounding boxes (with offsets) intersect, false otherwise.
 */
    isColliding (obj) {
        return (
            this.x + this.width - this.offset.right > obj.x + obj.offset.left && 
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && 
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
        );
    }


/**
 * Moves the object to the right by its speed value.
 * Increases the object's `x` position based on its movement speed.
 */
    moveRight() {
        this.x += this.speed;
    }

/**
 * Moves the object to the left by its speed value.
 * Decreases the object's `x` position based on its movement speed.
 */
    moveLeft() {
        this.x -= this.speed;
    }

/**
 * Makes the object jump by setting its vertical speed (`speedY`).
 * Typically used to simulate upward movement in a platformer or physics-based game.
 */
    jump() {
        this.speedY = 25;
    }

/**
 * Plays the animation by cycling through a set of images.
 * Updates the `img` property with the next image in the sequence.
 * The images are stored in `ImageCache` and are selected based on the `currentImage` index.
 * The `currentImage` index is incremented after each frame to loop through the images.
 *
 * @param {string[]} images - An array of image paths to be used for the animation.
 */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path =images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }
}