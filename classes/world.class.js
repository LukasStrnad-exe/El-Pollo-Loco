class World{
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];

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
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 60);
    }

    checkThrowObjects(){
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 50);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions(){
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.handleEnemyCollision(enemy);
                    this.healthBar.setPercentage(this.character.energy);
                }
            });
    }

    handleEnemyCollision(enemy) {
        if (this.character.isAboveEnemy(enemy) && enemy.energy !== 0 && enemy instanceof Chicken) {
            this.character.jump();
            this.killEnemy(enemy);
        } else if (enemy.energy !== 0) {
            this.character.hit();
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        let self = this; 
        requestAnimationFrame(function(){
            self.draw();});
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
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