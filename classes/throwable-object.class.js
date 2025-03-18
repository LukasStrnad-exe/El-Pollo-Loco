class ThrowableObject extends MovableObject {
    constructor(x, y, width, height, color, speed, direction, damage) {
        super(x, y, width, height, color, speed, direction);
        this.damage = damage;
    }
}