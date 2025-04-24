class EndbossBar extends StatusBar {
    IMAGES = [
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange0.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange20.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange40.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange60.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange80.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/2_statusbar_endboss/orange100.png",
    ];

    percentage = 100;
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x= 500;
        this.y = 0;
        this.setPercentage(100);
    }
}