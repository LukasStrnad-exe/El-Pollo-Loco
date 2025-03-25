class Bottle extends MovableObject{
    static bottlesCreated = 0; // Static variable to track bottle count

    constructor() {
        super();

        // Alternate bottle images based on the number of bottles created
        if (Bottle.bottlesCreated % 2 === 0) {
            this.loadImage("../El-Pollo-Loco/assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
        } else {
            this.loadImage("../El-Pollo-Loco/assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
        }

        // Increment the static counter
        Bottle.bottlesCreated++;

        this.x =200 +  Math.random() * 1560;
        this.y =350;
        this.height = 80;
        this.width = 80;
    }
}