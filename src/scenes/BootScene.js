
class BootScene extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' });
    }

    preload () {
        this.load.image('sky', '../assets/images/sky.png');
        this.load.image('ground', '../assets/images/platform.png');
        this.load.image('mine', '../assets/images/sea_mine.png');
        this.load.image('boaty', '../assets/images/boaty.png');
    }

    create () {
        this.scene.start('TitleScene');
    }
}

export default BootScene;
