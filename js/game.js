let canvas;
let world;
let keyboard = new Keyboard();
musicAreEnabled = true;
let music = new Audio('../El Pollo Loco/assets/audio/background_music.mp3');

function init() {
    initLevel()
    canvas = document.getElementById("canvas");
    world = new World(canvas,keyboard);
    document.getElementById("startScreen").innerHTML = templateMobileGame();
    activateMobileTouchstartButtons();
    activateMobileTouchendButtons();
    world.soundManager.soundsAreEnabled = musicAreEnabled;
}

/**
 * The function `toggleDnone` toggles the 'dNone' class on the element with the specified id.
 * @param id - The `id` parameter is a string that represents the id attribute of an HTML element.
 */
function toggleDnone(id) {
    document.getElementById(id).classList.toggle('dNone');
}

/**
 * The function `renderFooterSides` dynamically renders either an impressum or datenschutz template
 * based on the provided side parameter.
 * @param side - The selected footer section to render. Expected values: 'impressum' or 'datenschutz'
 */
function renderFooterSides(side) {
    document.getElementById('impressum').innerHTML = side === 'impressum' ? templateImpressum() : templateDatenschutz();
}

/**
 * The `restartGame` function resets the game by hiding the game over and win screens, setting the
 * `world` variable to null, and initializing the game again.
 */
function restartGame() {
    document.getElementById('gameOverScreen').classList.add('dNone');
    document.getElementById('winScreen').classList.add('dNone');
    world = null;
    init();
}

/**
 * The `homeScreen` function resets the game interface and displays the start screen while also
 * rendering a music button.
 */
function homeScreen() {
    document.getElementById('gameOverScreen').classList.add('dNone');
    document.getElementById('winScreen').classList.add('dNone');
    document.getElementById('startScreen').innerHTML = templateStartScreen();
    document.getElementById('startScreen').classList.remove('dNone');
    world = null;
    renderMusicButton();
}

/**
 * The function `playMusic` toggles the music on and off, adjusting volume and looping settings
 * accordingly.
 */
function playMusic() {
    musicAreEnabled === true ? musicAreEnabled = false : musicAreEnabled = true;
    if (musicAreEnabled) {
        music.play();
        music.volume = 0.1;
        music.loop = 'loop';
    } else {
        music.pause();
    }
    renderMusicButton();
}

/**
 * The function `renderMusicButton` toggles the visibility of mute and unmute buttons based on the
 * value of `musicAreEnabled`.
 */
function renderMusicButton() {
    if (musicAreEnabled) {
        document.getElementById('unmuteButton').classList.remove('dNone');
        document.getElementById('muteButton').classList.add('dNone');
    } else {
        document.getElementById('unmuteButton').classList.add('dNone');
        document.getElementById('muteButton').classList.remove('dNone');
    }
}

/**
 * The function `activateMobileTouchstartButtons` adds event listeners for touchstart on specific
 * elements to trigger keyboard actions in a game.
 */
function activateMobileTouchstartButtons() {
    document.getElementById('moveLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('moveRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
};

/**
 * The function `activateMobileTouchendButtons` adds event listeners for touchend events on specific
 * buttons to update keyboard input values accordingly.
 */
function activateMobileTouchendButtons() {
    document.getElementById('moveLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('moveRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
};

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});