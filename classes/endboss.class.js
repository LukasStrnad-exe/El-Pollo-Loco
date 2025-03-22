class Endboss extends MovableObject {
    width = 200;
    height = 300;

    IMAGES_WALKING = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G2.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G3.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G4.png",
    ];

    IMAGES_ALERT = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/2_alert/G12.png",        
    ];

    constructor() { 
        super().loadImage("../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.x = 719*3-200;	
        this.y = 140;
        this.animate();
        this.speed = 0;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
        }, 1000 / 10);
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
} 