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
    lastBottle = 0;
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkEnemyCollisions();
            this.checkItemCollisions();
            this.checkThrowObjects();
            this.level.enemies.forEach(enemy => {
            this.checkObjectsCollisions(enemy);
            this.checkFirstContact(enemy);
            this.checkSpeedEndboss(enemy);
            });
            }, 1000 / 60);
    }

    checkThrowObjects(){
        if (this.keyboard.D && this.bottleBar.percentage > 0 && this.countdownBottle()) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.bottleBar.percentage -= 20;
            this.bottleBar.setPercentage(this.bottleBar.percentage);
            this.lastBottle = new Date().getTime();       
        }
    }

    countdownBottle() {
        let timepassed = new Date().getTime() - this.lastBottle;
        timepassed /= 1000;
        return timepassed > 1;
    }

    checkEnemyCollisions(){        
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.handleEnemyCollision(enemy);
                    this.healthBar.setPercentage(this.character.energy);
                }
            });
    }

    checkSpeedEndboss(enemy){
        if (enemy instanceof Endboss) {
            if (!this.character.isColliding(enemy) && enemy.hadFirstContact === true && enemy.energy > 0) {
                enemy.speed = 3;
            } else {
                enemy.speed = 0;
            }
        }
    }

    checkObjectsCollisions(enemy) {
        this.throwableObjects.forEach((bottle, index) => {
            if (enemy.isColliding(bottle) && !bottle.isSplash()) {
                if (enemy instanceof Chicken || enemy instanceof TinyChicken) {
                    this.killEnemy(enemy);
                    bottle.splashAnimation();
                }
                if (enemy instanceof Endboss) {
                    let numberEndboss = this.level.enemies.indexOf(enemy);
                    let endboss =this.level.enemies[numberEndboss];
                    endboss.endbossHurt();
                    this.endbossBar.setPercentage(endboss.energy);
                    bottle.splashAnimation();
                }
            }
        });
    }

    checkFirstContact(enemy) {
        if (!(enemy instanceof Endboss)) return;
    
        if (this.character.x > 1600 && !enemy.hadFirstContact) {
            enemy.endbossFistContact();
        }
    }    

    checkItemCollisions(){
        this.level.items.forEach(item => {
            if (this.character.isColliding(item)) {
                this.handleItemCollision(item);
                this.bottleBar.setPercentage(this.bottleBar.percentage);
                this.coinBar.setPercentage(this.coinBar.percentage);
            }
        });
}

    handleEnemyCollision(enemy) {
        if (this.character.isAboveEnemy(enemy) && enemy.energy !== 0 && enemy instanceof Chicken || this.character.isAboveEnemy(enemy) && enemy instanceof TinyChicken) {
            this.character.jump();
            this.killEnemy(enemy);
        } else if (enemy.energy !== 0) {
            this.character.hit(1);
            if (enemy instanceof Endboss) {
                enemy.attack = true;
            }
        }
    }

    killEnemy(enemy) {
        enemy.energy = 0;
        enemy.speed = 0;
        setTimeout(() => {
            this.removeEnemy(enemy)
        }, 300);
    } 

    removeEnemy(enemy) {
        let indexToRemove = this.level.enemies.indexOf(enemy);
        if (indexToRemove !== -1) {
            this.level.enemies.splice(indexToRemove, 1);
        }
    }

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

    draw() {
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

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}