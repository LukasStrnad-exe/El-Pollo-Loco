class Chicken extends MovableObject{
    y = 350;
    height = 90;
    width = 90;
    IMAGES_WALKING = [
        "../El Pollo Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "../El Pollo Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "../El Pollo Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];

    IMAGES_DEAD = [
        "../El Pollo Loco/assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
    ];
    
    constructor() {
        super();
        this.loadImage("../El Pollo Loco/assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x =200 +  Math.random() * 2500;
        this.speed = 0.2 +  Math.random() * 3;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}

