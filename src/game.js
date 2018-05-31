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

export const game = new Phaser.Game(config);
export const calculateSize = () => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    width = width > 1500 ? 1500 : width;
    return {
        width: width,
        height: height
    };
};
window.onresize = () => {
    const { width, height } = calculateSize();
    console.log(width + ' ' + height);
    game.resize(width, height);
};
