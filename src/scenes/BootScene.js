
class BootScene extends Phaser.Scene {
    constructor () {
        super({ key: 'BootScene' });
    }

    preload () {
        this.load.image('water', 'assets/images/water.png');
        this.load.image('ground', 'assets/images/sandy-bottom.png');
        this.load.image('mine', 'assets/images/sea_mine.png');
        this.load.image('boaty', 'assets/images/boaty.png');
        this.load.image('whale', 'assets/images/whale.png');
        this.load.image('crab', 'assets/images/crab.png');
        this.load.image('play-again', 'assets/images/play_again.png');
    }

    create () {
        this.scene.start('TitleScene');
    }
}

export default BootScene;
