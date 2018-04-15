import 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import GameOverScene from './scenes/GameOverScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        BootScene,
        GameScene
    ]
};

let game = new Phaser.Game(config);

/*
https://codepen.io/samme/pen/JMVBeV*/