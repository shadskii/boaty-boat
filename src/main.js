import 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import GameOverScene from './scenes/GameOverScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
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
        GameScene
    ]
};

let game = new Phaser.Game(config);
