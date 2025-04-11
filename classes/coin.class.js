class Coin extends MovableObject {

    IMAGES = [
        "../El Pollo Loco/assets/img/8_coin/coin_1.png",
        "../El Pollo Loco/assets/img/8_coin/coin_2.png",
        

    ];
    constructor() {
        super();
        this.loadImage("../El Pollo Loco/assets/img/8_coin/coin_1.png");
        this.loadImages(this.IMAGES);

        this.x =200 +  Math.random() * 1560;
        this.y =90 + Math.random() * 110;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000 / 2);
    }

}