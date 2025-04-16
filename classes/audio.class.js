class Sounds extends MovableObject {
    soundsAreEnabled = true;

    constructor() {
        super();
        this.sounds = {
            jump: new Audio('../El Pollo Loco/assets/audio/jump.mp3'),
            collect: new Audio('../El Pollo Loco/assets/audio/jump.mp3'),
            hurt: new Audio('../El Pollo Loco/assets/audio/hurt.mp3'),
            gameOver: new Audio('../El Pollo Loco/assets/audio/game_over.mp3'),
            win: new Audio('../El Pollo Loco/assets/audio/win.mp3'),
            angryChicken: new Audio('../El Pollo Loco/assets/audio/angry_chicken.mp3'),
        };
    }

    playSound(soundKey) {
        let sound = this.sounds[soundKey];
        if (this.soundsAreEnabled) {
            if (sound) {
                sound.play();
                this.individualSoundVolume();
                this.individualSoundSpeed();
            }
        }
    }

    individualSoundVolume() {
        this.sounds.jump.volume = 0.1;
        this.sounds.collect.volume = 0.3;
        this.sounds.gameOver.volume = 0.5;
        this.sounds.win.volume = 0.5;
    }

    individualSoundSpeed() {
        this.sounds.jump.playbackRate = 2;
        this.sounds.collect.playbackRate = 5;
        this.sounds.angryChicken.playbackRate = 2;
    };

    toggleSound() {
        this.soundsAreEnabled = !this.soundsAreEnabled;
    }
}