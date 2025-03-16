class Chicken extends MovableObject{
    y = 350;
    height = 90;
    width = 90;
    IMAGES_WALKING = [
        "../El-Pollo-Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "../El-Pollo-Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "../El-Pollo-Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];
    constructor() {
        super();
        this.loadImage("../El-Pollo-Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.IMAGES_WALKING);

        this.x =200 +  Math.random() * 500;
        this.speed = 0.2 +  Math.random() * 3;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10);
        this.moveLeft();
    }

}

