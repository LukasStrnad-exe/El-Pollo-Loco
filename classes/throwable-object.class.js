class ThrowableObject extends MovableObject {
    constructor(x,y) {
        super();
        this.loadImage("../El-Pollo-Loco/assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw () {
        this.speedY = 30;
        this.apllyGravity();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 60);
    }
}