class Sounds extends MovableObject {
    soundsAreEnabled = true;

/**
 * The constructor function initializes audio elements for different game sounds in a JavaScript game.
 */
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

/**
 * The `playSound` function plays a sound based on the provided `soundKey` if sounds are enabled,
 * adjusting volume and speed accordingly.
 * @param soundKey - The `soundKey` parameter in the `playSound` function is used to specify the key of
 * the sound that you want to play. This key is used to retrieve the corresponding sound from the
 * `sounds` object or array.
 */
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

/**
 * The function `individualSoundVolume` sets different volume levels for specific sounds in a game.
 */
    individualSoundVolume() {
        this.sounds.jump.volume = 0.1;
        this.sounds.collect.volume = 0.3;
        this.sounds.gameOver.volume = 0.5;
        this.sounds.win.volume = 0.5;
    }

/* The `individualSoundSpeed()` function is setting different playback rates for specific sounds in the
game.
*/
    individualSoundSpeed() {
        this.sounds.jump.playbackRate = 2;
        this.sounds.collect.playbackRate = 5;
        this.sounds.angryChicken.playbackRate = 2;
    };

/**
 * The function `toggleSound` toggles the value of the `soundsAreEnabled` property between true and
 * false.
 */
    toggleSound() {
        this.soundsAreEnabled = !this.soundsAreEnabled;
    }
}