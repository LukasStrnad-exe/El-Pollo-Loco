class BottleBar extends StatusBar {
    IMAGES = [
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
        "../El-Pollo-Loco/assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",

    ];

    percentage = 0;
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x= 20;
        this.y = 80;
        this.setPercentage(0);
    }
}