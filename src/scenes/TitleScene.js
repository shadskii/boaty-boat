import { Scene } from 'phaser';

class TitleScene extends Scene {
    constructor (test) {
        super({ key: 'TitleScene' });
    }
    create () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        this.scene.bringToTop();
        this.add.image(width / 2, height / 2, 'water').setScale(10, 2);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, height, 'ground').setScale(10, 0.5).refreshBody();

        let canvas = document.getElementsByTagName('canvas')[0];
        console.log(canvas);
        canvas.width = width;
        canvas.height = height;
        console.log(canvas);

        this.title = this.add.text(width / 10, height / 10, 'Boaty Boat',
            {
                fontSize: width / 12 + 'px',
                fill: '#fff'
            });
        this.pressStart = this.add.text(0, 0, 'TAP TO START',
            {
                fontSize: '16px',
                fill: '#fff'
            });
        Phaser.Display.Align.In.TopCenter(this.title, this.add.zone(width / 2, height - height / 4, width, height));
        Phaser.Display.Align.In.BottomCenter(this.pressStart, this.add.zone(width / 2, height / 4, width, height));
        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.start = false;
        this.input.on('pointerdown', (pointer) => {
            this.start = true;
        });
    }

    update () {
        if (this.startKey.isDown || this.start) {
            this.scene.start('GameScene');
        }
    }
}

export default TitleScene;
