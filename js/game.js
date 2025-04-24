let canvas;
let world;
let keyboard = new Keyboard();
musicAreEnabled = true;
let music = new Audio('../El-Pollo-Loco/assets/audio/background_music.mp3');

function init() {
    initLevel()
    canvas = document.getElementById("canvas");
    world = new World(canvas,keyboard);
    document.getElementById("startScreen").innerHTML = "";
    world.soundManager.soundsAreEnabled = musicAreEnabled;
}

function toggleDnone(id) {
    document.getElementById(id).classList.toggle('dNone');
}

function renderFooterSides(side) {
    document.getElementById('impressum').innerHTML = side === 'impressum' ? templateImpressum() : templateDatenschutz();
}

function restartGame() {
    document.getElementById('gameOverScreen').classList.add('dNone');
    document.getElementById('winScreen').classList.add('dNone');
    world = null;
    init();
}

function homeScreen() {
    document.getElementById('gameOverScreen').classList.add('dNone');
    document.getElementById('winScreen').classList.add('dNone');
    document.getElementById('startScreen').innerHTML = templateStartScreen();
    document.getElementById('startScreen').classList.remove('dNone');
    world = null;
    renderMusicButton();
}

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

function renderMusicButton() {
    if (musicAreEnabled) {
        document.getElementById('unmuteButton').classList.remove('dNone');
        document.getElementById('muteButton').classList.add('dNone');
    } else {
        document.getElementById('unmuteButton').classList.add('dNone');
        document.getElementById('muteButton').classList.remove('dNone');
    }
}

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