class World{
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = [];
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossBar= new EndbossBar();
    soundManager = new Sounds();
    lastBottle = 0;
    gameInterval;
    gameRunning = true;

/**
 * The constructor initializes a canvas, keyboard, sets up the world, and starts running the game loop.
 * @param canvas - The `canvas` parameter is typically a reference to the HTML `<canvas>` element on
 * the webpage. It is used to draw graphics, animations, and interactive elements using JavaScript. The
 * `getContext("2d")` method is used to obtain the 2D rendering context of the canvas, which allows
 * @param keyboard - The `keyboard` parameter likely refers to an object or component that handles
 * keyboard input for the application or game. It could be used to detect key presses, key releases,
 * and manage the state of keys being pressed. This allows the application to respond to user input
 * from the keyboard.
 */
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

/**
 * The function `setWorld()` sets the world property of a character object to the current object.
 */
    setWorld(){
        this.character.world = this;
    }

/**
 * The `run` function sets up a game interval that checks for various collisions and game conditions
 * every 1/60th of a second.
 */
    run(){
        this.gameInterval = setInterval(() => {
            this.checkEnemyCollisions();
            this.checkItemCollisions();
            this.checkThrowObjects();
            this.level.enemies.forEach(enemy => {
            this.checkObjectsCollisions(enemy);
            this.checkFirstContact(enemy);
            this.checkSpeedEndboss(enemy);
            this.checkFinishGame(enemy);
            });
            }, 1000 / 60);
    }

/**
 * The function `checkThrowObjects` checks if the D key is pressed, the bottle bar percentage is
 * greater than 0, and the countdown for throwing a bottle has finished before creating a new throwable
 * object and updating the bottle bar percentage.
 */
    checkThrowObjects(){
        if (this.keyboard.D && this.bottleBar.percentage > 0 && this.countdownBottle()) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.bottleBar.percentage -= 20;
            this.bottleBar.setPercentage(this.bottleBar.percentage);
            this.lastBottle = new Date().getTime();       
        }
    }

/**
 * The function `countdownBottle` calculates the time passed since the last bottle event and returns
 * true if it's been more than 1 second.
 * @returns The `countdownBottle()` function is returning a boolean value indicating whether more than
 * 1 second has passed since the last bottle event.
 */
    countdownBottle() {
        let timepassed = new Date().getTime() - this.lastBottle;
        timepassed /= 1000;
        return timepassed > 1;
    }

/**
 * The function `checkEnemyCollisions` checks for collisions between the character and enemies in the
 * game level and handles the collision accordingly.
 */
    checkEnemyCollisions(){        
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.handleEnemyCollision(enemy);
                    this.healthBar.setPercentage(this.character.energy);
                }
            });
    }

/**
 * The function `checkSpeedEndboss` sets the speed of an Endboss enemy based on certain conditions.
 * @param enemy - The `enemy` parameter is an object representing an opponent in a game. The
 * `checkSpeedEndboss` function checks if the enemy is an instance of the `Endboss` class. If it is,
 * and certain conditions are met (such as not colliding with the player character, having had
 */
    checkSpeedEndboss(enemy){
        if (enemy instanceof Endboss) {
            if (!this.character.isColliding(enemy) && enemy.hadFirstContact === true && enemy.energy > 0) {
                enemy.speed = 3;
            } else {
                enemy.speed = 0;
            }
        }
    }

/**
 * The function `checkFinishGame` checks if the enemy is an instance of Endboss with zero energy or if
 * the character has zero energy to determine if the game should end.
 * @param enemy - The `enemy` parameter in the `checkFinishGame` method represents the opponent that
 * the player is facing in the game. The method checks if the enemy is an instance of the `Endboss`
 * class and if its energy is equal to 0. If both conditions are met, it schedules a
 */
    checkFinishGame(enemy) {   
        if (enemy instanceof Endboss && enemy.energy === 0) {
            setTimeout(() => {
                this.winGame();
            }, 1000);
        }
        if (this.character.energy === 0) {
            setTimeout(() => {
                this.gameOver();
            }, 1000);
        }
    }

/**
 * The `gameOver` function in JavaScript stops the game, displays the game over screen, hides mobile
 * buttons, plays a game over sound, and sets the gameRunning status to false.
 */
    gameOver() {
        clearInterval(this.gameInterval);
        document.getElementById('gameOverScreen').classList.remove('dNone');
        document.getElementById('mobile_buttons').classList.add('dNone');
        this.soundManager.playSound('gameOver'); 
        this.gameRunning = false;
    }

/**
 * The `winGame` function clears the game interval, displays the win screen, plays a winning sound, and
 * sets the gameRunning flag to false.
 */
    winGame() {
        clearInterval(this.gameInterval);
        document.getElementById('winScreen').classList.remove('dNone');
        this.soundManager.playSound('win'); 
        this.gameRunning = false;
    }

/**
 * The function `checkObjectsCollisions` checks for collisions between throwable objects and enemies,
 * triggering specific actions based on the type of enemy.
 * @param enemy - The `enemy` parameter in the `checkObjectsCollisions` method represents an object
 * that the player's throwable objects may collide with. The method checks for collisions between the
 * enemy and each throwable object in the `throwableObjects` array. If a collision is detected and the
 * throwable object has not already
 */
    checkObjectsCollisions(enemy) {
        this.throwableObjects.forEach((bottle) => {
            if (enemy.isColliding(bottle) && !bottle.isSplash()) {
                if (enemy instanceof Chicken || enemy instanceof TinyChicken) {
                    this.killEnemy(enemy);
                    bottle.splashAnimation();
                }
                if (enemy instanceof Endboss) {
                    this.hitEndboss(enemy, bottle);
                }
            }
        });
    }

/**
 * Handles the logic for when the player hits the endboss with a bottle.
 * It finds the endboss in the level's enemies, applies damage, updates the endboss' health bar,
 * plays a splash animation for the bottle, and plays the angry chicken sound.
 *
 * @param {Object} enemy - The endboss object that is being hit.
 * @param {Object} bottle - The bottle object used to hit the endboss.
 */
    hitEndboss(enemy, bottle){
        let numberEndboss = this.level.enemies.indexOf(enemy);
        let endboss =this.level.enemies[numberEndboss];
        endboss.endbossHurt();
        this.endbossBar.setPercentage(endboss.energy);
        bottle.splashAnimation();
        this.soundManager.playSound('angryChicken'); 
    }

/**
 * Checks if the player character has made first contact with the endboss.
 * If the character's x-coordinate is greater than 1600 and the endboss hasn't had first contact yet,
 * it triggers the `endbossFistContact` method to mark the event.
 * 
 * @param {Object} enemy - The enemy object to check for first contact.
 * @param {Object} enemy.x - The x-coordinate of the enemy.
 * @param {boolean} enemy.hadFirstContact - A flag indicating if the enemy has already made first contact.
 */
    checkFirstContact(enemy) {
        if (!(enemy instanceof Endboss)) return;
        if (this.character.x > 1600 && !enemy.hadFirstContact) {
            enemy.endbossFistContact();
        }
    }    

/**
 * Checks for collisions between the player character and items in the level.
 * If a collision is detected, it handles the item collision, plays a sound,
 * and updates the bottle and coin bars based on the current percentages.
 */
    checkItemCollisions(){
        this.level.items.forEach(item => {
            if (this.character.isColliding(item)) {
                this.handleItemCollision(item);
                this.soundManager.playSound('collect');
                this.bottleBar.setPercentage(this.bottleBar.percentage);
                this.coinBar.setPercentage(this.coinBar.percentage);
            }
        });
    }

/**
 * Handles collisions between the player character and enemies.
 * If the character is above an enemy and the enemy is not dead, the character jumps
 * and kills the enemy. If the character is not above the enemy, it takes damage and plays a "hurt" sound.
 * If the enemy is an Endboss, the boss will prepare for an attack.
 * 
 * @param {Object} enemy - The enemy object involved in the collision.
 * @param {Object} enemy.energy - The current energy (health) of the enemy.
 * @param {Object} enemy instanceof Chicken|TinyChicken|Endboss - The type of enemy being collided with.
 */
    handleEnemyCollision(enemy) {
        if (this.character.isAboveEnemy(enemy) && enemy.energy !== 0 && enemy instanceof Chicken || this.character.isAboveEnemy(enemy) && enemy instanceof TinyChicken) {
            this.character.jump();
            this.killEnemy(enemy);
            this.soundManager.playSound('jump');
        } else if (enemy.energy !== 0) {
            this.character.hit(1);
            this.soundManager.playSound('hurt'); 
            if (enemy instanceof Endboss) {
                enemy.attack = true;
            }
        }
    }

/**
 * Kills the enemy by setting its energy to 0 and stopping its movement.
 * After a short delay (300ms), the enemy is removed from the level.
 * 
 * @param {Object} enemy - The enemy object to be killed.
 * @param {number} enemy.energy - The energy (health) of the enemy.
 * @param {number} enemy.speed - The movement speed of the enemy.
 */
    killEnemy(enemy) {
        enemy.energy = 0;
        enemy.speed = 0;
        setTimeout(() => {
            this.removeEnemy(enemy)
        }, 300);
    } 

/**
 * Removes the specified enemy from the level's enemies array.
 * Searches for the enemy in the level's enemies and removes it if found.
 * 
 * @param {Object} enemy - The enemy object to be removed.
 * @param {Array} this.level.enemies - The array of enemies in the current level.
 */
    removeEnemy(enemy) {
        let indexToRemove = this.level.enemies.indexOf(enemy);
        if (indexToRemove !== -1) {
            this.level.enemies.splice(indexToRemove, 1);
        }
    }

/**
 * Handles the collision between the player character and an item.
 * If the item is a Coin, it increases the coin bar percentage. 
 * If the item is a Bottle, it increases the bottle bar percentage.
 * After the collision, the item is removed from the level's items array.
 * 
 * @param {Object} item - The item that the player character collided with.
 * @param {Object} item instanceof Coin - The Coin object.
 * @param {Object} item instanceof Bottle - The Bottle object.
 * @param {Object} this.level.items - The array of items in the current level.
 */
    handleItemCollision(item){
        if (item instanceof Coin) {
            this.coinBar.percentage += 20;
        }
        if (item instanceof Bottle) {
            this.bottleBar.percentage += 20;
        }
        let indexToRemove = this.level.items.indexOf(item);
        if (indexToRemove !== -1) {
            this.level.items.splice(indexToRemove, 1);
        }
    }

/**
 * Draws the game scene on the canvas, updating all game objects and UI elements.
 * Clears the canvas, applies camera translation for scrolling, and adds various objects to the map.
 * Also handles continuous redrawing by calling `requestAnimationFrame` recursively.
 */
    draw() {
        if (!this.gameRunning) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.items);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.endbossBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this; 
        requestAnimationFrame(function(){
            self.draw();});
    }

/**
 * Adds a collection of objects to the map by iterating through each object and calling `addToMap`.
 * If an error occurs (e.g., the objects array is not iterable), it logs the error and the objects array.
 * 
 * @param {Array} objects - The array of objects to be added to the map.
 * @param {Object} objects[] - Each object in the array must be an object that can be added to the map (e.g., character, enemies, items).
 */
    addObjectsToMap(objects) {
        try {
            objects.forEach(obj => {
                this.addToMap(obj);
            });
        } catch (error) {
            console.log(objects); 
            console.log(error);
        }
    }

/**
 * Adds a movable object (mo) to the map by drawing it on the canvas and applying any necessary transformations.
 * If the object is facing the opposite direction, it flips the image before drawing and restores it afterward.
 * 
 * @param {Object} mo - The movable object to be added to the map.
 * @param {boolean} mo.otherDirection - A flag indicating whether the object is facing the opposite direction.
 * @param {Function} mo.draw - A method to draw the object on the canvas.
 */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

/**
 * Flips the image of a movable object horizontally by applying a transformation to the canvas context.
 * The object's x-position is also inverted to maintain its position relative to the canvas.
 * 
 * @param {Object} mo - The movable object whose image is to be flipped.
 * @param {number} mo.width - The width of the object (used for translating the canvas before scaling).
 * @param {number} mo.x - The x-coordinate of the object (flipped to maintain correct position).
 */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

/**
 * Restores the canvas context after flipping an image and reverts the object's x-coordinate to its original position.
 * This method is called after drawing a flipped object to ensure the canvas is returned to its normal state.
 * 
 * @param {Object} mo - The movable object whose image was flipped.
 * @param {number} mo.x - The x-coordinate of the object (restored to its original value after flipping).
 */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}