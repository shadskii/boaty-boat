import 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameOverScene from './scenes/GameOverScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        GameOverScene
    ]
};

let game = new Phaser.Game(config);
