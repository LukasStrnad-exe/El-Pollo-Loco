class CoinBar extends StatusBar {
    IMAGES = [
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",

    ];

    percentage = 0;
/**
 * The constructor function initializes variables and loads images for an object in JavaScript.
 */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x= 20;
        this.y = 40;
        this.setPercentage(0);
    }
}