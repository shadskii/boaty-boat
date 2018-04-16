import Phaser from 'phaser';
import Boaty from '../sprites/Boaty';
import Mine from '../sprites/Mine';

class GameScene extends Phaser.Scene {
    constructor () {
        super({ key: 'GameScene' });
    }

    create () {
        this.add.image(400, 300, 'sky').setScale(10, 1);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        this.boaty = new Boaty({
            scene: this,
            key: 'boaty',
            x: 100,
            y: this.sys.game.config.height - 450
        });

        // Enemy generation
        this.mines = this.add.group();
        this.time.addEvent({
            delay: 1000,
            callback: this.addMine,
            callbackScope: this,
            loop: true
        });

        // Input controls
        this.isJump = false;
        this.input.on('pointerdown', (pointer) => {
            this.isJump = true;
        });
        this.input.on('pointerup', (pointer) => {
            this.isJump = false;
        });
        this.spaceJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update () {
        this.boaty.update(this.isJump || this.spaceJump.isDown);
        this.mines.children.entries.forEach(element => {
            element.update();
        });
        if (this.boaty.y > this.cameras.main.height || !this.boaty.alive) {
            this.restartGame();
        }
    }
    addMine () {
        var yPos = Math.floor(Math.random() * this.sys.game.config.height) - 20;
        this.mines.add(new Mine({
            scene: this,
            key: 'mine',
            x: 800,
            y: yPos
        }));
    }

    restartGame () {
        this.scene.start('TitleScene');
    }

    incrementScore () {
        this.score++;
        this.scoreText.setText('Score: ' + this.score);
    }
}

export default GameScene;
