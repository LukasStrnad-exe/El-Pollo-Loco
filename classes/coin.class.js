class Coin extends MovableObject {

    IMAGES = [
        "../El Pollo Loco/assets/img/8_coin/coin_1.png",
        "../El Pollo Loco/assets/img/8_coin/coin_2.png",
    ];

/**
 * The constructor function loads images and sets random coordinates for an object before animating it.
 */
    constructor() {
        super();
        this.loadImage("../El Pollo Loco/assets/img/8_coin/coin_1.png");
        this.loadImages(this.IMAGES);
        this.x =200 +  Math.random() * 1560;
        this.y =90 + Math.random() * 110;
        this.animate();
    }

/**
 * The `animate` function uses `setInterval` to repeatedly call `playAnimation` with the `IMAGES` array
 * every 0.5 seconds.
 */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000 / 2);
    }

}