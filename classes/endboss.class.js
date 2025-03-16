class Endboss extends MovableObject {
    width = 200;
    height = 300;

    IMAGES_WALKING = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G2.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G3.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G4.png",
    ];

    constructor() { 
        super().loadImage("../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.x = 719*3-200;	
        this.y = 140;
        this.animate();
        this.speed = 5;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 10);
        this.moveLeft();
    }
} 