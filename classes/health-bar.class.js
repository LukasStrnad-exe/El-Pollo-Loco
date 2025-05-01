class HealthBar extends StatusBar {
    percentage = 100;

    IMAGES = [
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "../El Pollo Loco/assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png"
    ];

/**
 * Initializes the object with default position and full percentage value.
 * Loads image assets from the `IMAGES` array and sets its position on screen.
 */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x= 20;
        this.y = 0;
        this.setPercentage(100);
    }
}