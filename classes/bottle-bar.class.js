class BottleBar extends StatusBar {
    percentage = 0;

    IMAGES = [
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",

    ];

/**
 * The constructor function initializes properties and loads images for an object in JavaScript.
 */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x= 20;
        this.y = 80;
        this.setPercentage(0);
    }
}