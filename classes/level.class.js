class Level {
    enemies;
    clouds;
    backgroundObjects;
    items;
    level_end_x = 719*3;

    constructor(items, enemies, clouds, backgroundObjects, ){
        this.items = items;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}