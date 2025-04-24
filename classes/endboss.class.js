class Endboss extends MovableObject {
    width = 200;
    height = 300;
    hadFirstContact = false;
    attack = false;
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

    IMAGES_HURT = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];

    IMAGES_DEAD = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/5_dead/G24.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/5_dead/G25.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    IMAGES_ATTACK = [
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G17.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G18.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G19.png",
        "../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/3_attack/G20.png",
    ];

    constructor() { 
        super().loadImage("../El-Pollo-Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 719*3-200;	
        this.y = 140;
        this.animate();
        this.speed = 0;
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.attack === true) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_ATTACK);
                this.attack = false;
            } else if(this.speed > 0) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 1000 / 10);

        setInterval(() => {
            try {
                if (world.character.x < this.x) {
                    this.moveLeft();
                    this.otherDirection = false;
                } else {
                    this.moveRight();
                    this.otherDirection = true;
                }
            } catch (error) {
                
            }
        }, 1000 / 60);
    }

    endbossHurt(){
        this.hit(20);
    }

    endbossFistContact(){
        this.hadFirstContact = true;
    }
} 