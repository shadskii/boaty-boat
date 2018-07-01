class BootScene extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' });
    }

    preload () {
        this.load.image('water', 'images/water.png');
        this.load.image('ground', 'images/sandy-bottom.png');
        this.load.image('torpedo', 'images/torpedo.png');
        this.load.image('mine', 'images/sea_mine.png');
        this.load.image('boaty', 'images/boaty.png');
        this.load.image('whale', 'images/whale.png');
        this.load.image('crab', 'images/crab.png');
        this.load.image('play-again', 'images/play_again.png');
    }

    create () {
        this.scene.start('TitleScene');
    }
}

export default BootScene;
