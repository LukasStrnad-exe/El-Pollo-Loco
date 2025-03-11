class World{
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud(),
        new Cloud(),
    ];

    backgroundObjects = [
        new BackgroundObject('../El-Pollo-Loco/assets/img/5_background/layers/air.png', 0 ),
        new BackgroundObject('../El-Pollo-Loco/assets/img/5_background/layers/3_third_layer/1.png', 0 ),
        new BackgroundObject('../El-Pollo-Loco/assets/img/5_background/layers/2_second_layer/1.png', 0 ),
        new BackgroundObject('../El-Pollo-Loco/assets/img/5_background/layers/1_first_layer/1.png', 0 ),
    ];
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }


    draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.backgroundObjects.forEach(bgo => {
        this.addToMap(bgo);
    });

    this.enemies.forEach(enemy => {
        this.addToMap(enemy);
    });

    this.clouds.forEach(cloud => {
        this.addToMap(cloud);
    });

    let self = this; 
    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    requestAnimationFrame(function(){
        self.draw();});
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}