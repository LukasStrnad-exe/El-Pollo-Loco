class Endboss extends MovableObject {
    width = 200;
    height = 300;
    hadFirstContact = false;
    attack = false;
    offset = { top: 50, left: 10, right: 5, bottom: 10 };
    IMAGES_WALKING = [
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/1_walk/G2.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/1_walk/G3.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/1_walk/G4.png",
    ];

    IMAGES_ALERT = [
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/2_alert/G12.png",        
    ];

    IMAGES_HURT = [
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];

    IMAGES_DEAD = [
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/5_dead/G24.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/5_dead/G25.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    IMAGES_ATTACK = [
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G13.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G14.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G15.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G16.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G17.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G18.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G19.png",
        "../El Pollo Loco/assets/img/4_enemie_boss_chicken/3_attack/G20.png",
    ];

/**
 * Creates an instance of the boss enemy.
 * Initializes the starting image, loads various animation states,
 * sets the position, starts the animation loop, and sets the movement speed.
 */
    constructor() { 
        super().loadImage("../El Pollo Loco/assets/img/4_enemie_boss_chicken/1_walk/G1.png");
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

/**
 * Controls the boss enemy's animation and movement behavior.
 * Two intervals are used:
 *  - One handles animation state switching based on status (dead, hurt, attacking, walking, idle).
 *  - The other handles movement logic, causing the boss to follow the character.
 */
    animate() {
        setInterval(() => {
            this.setAnimation()
        }, 1000 / 10);
        setInterval(() => {
            this.setPosition()
        }, 1000 / 60);
    }

/**
 * Automatically sets the position of an enemy (e.g. Endboss) relative to the character.
 * Moves the object toward the character's x-position.
 * 
 * - If the character is to the left, the object moves left.
 * - If the character is to the right, the object moves right.
 * - Sets the `otherDirection` flag to flip the sprite accordingly.
 * 
 * Errors (e.g., undefined `world.character`) are silently caught to prevent crashes.
 */
    setPosition(){
        try {
            if (world.character.x < this.x) {
                this.moveLeft();
                this.otherDirection = false;
            } else {
                this.moveRight();
                this.otherDirection = true;
            }
        } catch (error) {}
    }

/**
 * Determines and sets the appropriate animation for the character based on its current state.
 * The animation priority is as follows (from highest to lowest):
 * - Dead: Plays death animation.
 * - Hurt: Plays hurt animation.
 * - Attacking: Plays attack animation and resets the attack flag.
 * - Moving: Plays walking animation.
 * - Idle: Plays idle/alert animation.
 */
    setAnimation(){
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
    }

/**
 * Applies damage to the endboss by reducing its health by 20.
 * Internally calls the `hit` method to process the damage.
*/
    endbossHurt(){
        this.hit(20);
    }

/**
 * Marks that the endboss has made first contact with the player.
 * Sets the `hadFirstContact` flag to true, possibly triggering a behavior change.
 */
    endbossFistContact(){
        this.hadFirstContact = true;
    }
} 