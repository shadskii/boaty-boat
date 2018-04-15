
class BootScene extends Phaser.Scene {
    constructor () {
        super({
            key: 'BootScene'
        })
    }

    preload () {
        this.load.image('sky', '../assets/images/sky.png');
        this.load.image('ground', '../assets/images/platform.png');
        this.load.image('mine', '../assets/images/bomb.png');
    }

    create () {
        this.scene.start('GameScene');
    }
}

export default BootScene;
