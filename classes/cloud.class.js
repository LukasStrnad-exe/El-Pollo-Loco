class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

/**
 * This JavaScript constructor function creates a cloud object with a random x position and alternating
 * images based on the number of clouds created.
 */
    constructor() {
        super();
        if (Cloud.cloudCreated % 2 === 0) {
            this.loadImage("../El Pollo Loco/assets/img/5_background/layers/4_clouds/1.png");
        } else {
            this.loadImage("../El Pollo Loco/assets/img/5_background/layers/4_clouds/2.png");
        }
        Cloud.cloudCreated++;
        this.x =Math.random() * 2500;
        this.animate();
        this.speed = 0.5;
    }

/**
 * The `animate()` function uses `setInterval` to repeatedly call the `moveLeft()` method at a rate of
 * 60 times per second.
 */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}