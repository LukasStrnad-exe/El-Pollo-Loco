class ThrowableObject extends MovableObject {
    splash = false;
    direction;

    IMAGE_ROTATE = [
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];

    IMAGE_SPLASH = [
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];

/**
 * The constructor function initializes properties for a salsa bottle object and triggers throwing and
 * animation actions.
 * @param x - The `x` parameter in the constructor function represents the x-coordinate or horizontal
 * position where the object will be placed on the screen or canvas. It determines the initial
 * horizontal position of the object.
 * @param y - The `y` parameter in the constructor function represents the vertical position or
 * coordinate where the object will be placed on the screen. It determines how high or low the object
 * will be displayed relative to the top of the screen or another reference point.
 */
    constructor(x,y) {
        super();
        this.loadImage("../El Pollo Loco/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGE_ROTATE);
        this.loadImages(this.IMAGE_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.animate();
    }

/**
 * The function `throw` sets the speed, applies gravity, sets direction based on character's direction,
 * and moves the object horizontally at a certain interval.
 */
    throw () {
        this.speedY = 30;
        this.apllyGravity();
        this.direction = world.character.otherDirection ? -10 : 10;
        this.throwInterval = setInterval(() => {
            if (!this.isSplash()) {
            this.x += this.direction;
            }
        }, 1000 / 60);
    }

/**
 * The `animate` function uses `setInterval` to continuously check conditions and play different
 * animations based on the results.
 */
    animate() {
        setInterval(() => {
            if (this.isSplash() || !this.isAboveGround()) {
                this.splashAnimation();
                this.playAnimation(this.IMAGE_SPLASH);
            } else {
                this.playAnimation(this.IMAGE_ROTATE);
            }
        }, 1000 / 20);
    }

/**
 * The `splashAnimation` function sets a flag to indicate a splash effect, stops vertical movement,
 * clears a throwing interval, and removes the object from a list after a delay.
 */
    splashAnimation() {
        this.splash = true;
        this.speedY = 0;
        clearInterval(this.throwInterval);
        setTimeout(() => {
            try {
                let indexToRemove = world.throwableObjects.indexOf(this);
                if (indexToRemove !== -1) {
                    world.throwableObjects.splice(indexToRemove, 1);
                }
            } catch (error) {
            }
        }, 250);
    }

/**
 * The function isSplash() checks if a property named "splash" is set to true.
 * @returns The `isSplash` function is returning whether the `splash` property of the object is equal
 * to `true`.
 */
    isSplash(){
        return this.splash === true;
    }
}