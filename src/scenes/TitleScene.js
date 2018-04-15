import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
    constructor (test) {
        super({ key: 'TitleScene' });
    }
    create () {
        this.scene.bringToTop();
        this.add.image(400, 300, 'sky').setScale(10, 1);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        let sh = window.screen.availHeight;
        let sw = window.screen.availWidth;
        let ch = 0;
        let cw = 0;
        if (sh / sw > 0.6) {
            // Portrait
            cw = sw;
            ch = sw * 0.6;
        }
        else {
            // Landscape
            console.log('landscape');
            cw = sh / 0.5;
            ch = sh;
        }
        let el = document.getElementsByTagName('canvas')[0];
        console.log(el);
        var adjW = cw * 0.85;
        var adjH = ch * 0.85;
        el.style.width = adjW + 'px';
        el.style.height = adjH + 'px';
        console.log(cw, ch);

        this.title = this.add.text(adjW / 10, adjH / 10, 'Boaty Boat', { fontSize: '80px', fill: '#fff' });
        this.pressStart = this.add.text(adjW / 2, adjH, 'TAP TO START', { fontSize: '16px', fill: '#fff' });
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
