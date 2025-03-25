class ThrowableObject extends MovableObject {
    splash = false;

    IMAGE_ROTATE = [
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];

    IMAGE_SPLASH = [
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];

    constructor(x,y) {
        super();
        this.loadImage("../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGE_ROTATE);
        this.loadImages(this.IMAGE_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.animate();
    }

    throw () {
        this.speedY = 30;
        this.apllyGravity();
        this.throwInterval = setInterval(() => {
            if (!this.isSplash()) {
            this.x += 10;
            }
        }, 1000 / 60);
    }

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

    splashAnimation() {
        this.splash = true;
        this.speedY = 0;
        clearInterval(this.throwInterval);
    
        setTimeout(() => {
            let indexToRemove = world.throwableObjects.indexOf(this);
            if (indexToRemove !== -1) {
                world.throwableObjects.splice(indexToRemove, 1);
            }
        }, 250);
    }

    isSplash(){
        return this.splash === true;
    }
}