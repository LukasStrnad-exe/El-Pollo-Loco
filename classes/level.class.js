class Level {
    enemies;
    clouds;
    backgroundObjects;
    items;
    level_end_x = 719*3;

    constructor(enemies, clouds, backgroundObjects, items){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.items = items;
    }
}