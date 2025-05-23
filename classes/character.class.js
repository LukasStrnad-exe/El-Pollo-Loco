class Character extends MovableObject {
    height= 250;
    y = 80;
    speed = 5;
    offset = { top: 100, left: 15, right: 20, bottom: 10 };
    world;

    IMAGES_IDLE = [
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-1.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-2.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-3.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-4.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-5.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-6.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-7.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-8.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-9.png",
        "../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-10.png",
    ];

    IMAGES_WALKING = [
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-21.png",
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-22.png",
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-23.png",
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-24.png",
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-25.png",
        "../El Pollo Loco/assets/img/2_character_pepe/2_walk/W-26.png",
    ];

    IMAGES_JUMPING = [
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-31.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-32.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-33.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-34.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-35.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-36.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-37.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-38.png",
        "../El Pollo Loco/assets/img/2_character_pepe/3_jump/J-39.png",
    ];

    IMAGES_DEAD = [
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-51.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-52.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-53.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-54.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-55.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-56.png",
        "../El Pollo Loco/assets/img/2_character_pepe/5_dead/D-57.png",
    ];

    IMAGES_HURT = [
        "../El Pollo Loco/assets/img/2_character_pepe/4_hurt/H-41.png",
        "../El Pollo Loco/assets/img/2_character_pepe/4_hurt/H-42.png",
        "../El Pollo Loco/assets/img/2_character_pepe/4_hurt/H-43.png",
    ];

/**
 * The constructor function loads images and applies gravity for character animation.
 */
    constructor() {
        super();
        this.loadImage("../El Pollo Loco/assets/img/2_character_pepe/1_idle/idle/I-1.png");
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.apllyGravity();
        this.animate();
    }

/**
 * The `animate` function in the JavaScript code snippet sets up intervals to handle character movement
 * and animations based on keyboard input and game state.
 */
    animate() {
        setInterval(() => {
            this.setPosition()
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        setInterval(() => {
            this.setAnimation()
        }, 1000 / 10);
    }

/**
 * Updates the character's position based on keyboard input and game world boundaries.
 * Handles horizontal movement (left/right) and jumping, and plays a sound when jumping.
 * 
 * - Moves right if the RIGHT key is pressed and the character hasn't reached the level's end.
 * - Moves left if the LEFT key is pressed and the character is not at the start.
 * - Jumps if the UP key is pressed and the character is on the ground.
 */
    setPosition(){
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;   
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }    
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
            this.world.soundManager.playSound('jump'); 
        }
    }

    setAnimation(){
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if(this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

/**
 * The function `isAboveEnemy` checks if the current object is positioned above the enemy object and
 * moving upwards.
 * @param enemy - The `enemy` parameter in the `isAboveEnemy` function represents an object that has
 * properties `y` and `height`. These properties are used to determine if the current object is
 * positioned above the enemy object based on their y-coordinates and heights. The function also checks
 * if the current object is
 * @returns The method `isAboveEnemy(enemy)` is returning a boolean value based on the condition
 * `this.y + this.height < enemy.y + enemy.height && this.speedY < 0`.
 */
    isAboveEnemy(enemy) {
        return this.y + this.height < enemy.y + enemy.height && this.speedY < 0;
    }
}