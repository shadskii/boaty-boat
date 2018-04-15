import Phaser from 'phaser';
import Boaty from '../sprites/Boaty';

class GameScene extends Phaser.Scene {
    constructor () {
        super({
            key: 'GameScene',
            physics: {
                system: 'impact',
                gravity: 250,
                debug: false,
                setBounds: false
            }
        });
    }

    create () {
        this.add.image(400, 300, 'sky');
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        this.boaty = new Boaty({
            scene: this,
            key: 'boaty',
            x: 200,
            y: this.sys.game.config.height - 300
        });
        this.pipes = this.add.group();

        this.keys = {
            jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        };
    }

    update () {
        this.boaty.update(this.keys);
        this.addRowOfMines();
        if (this.boaty.y > this.cameras.main.height) {
            this.restartGame();
        }
    }

    addRowOfMines () {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
        var hole = Math.floor(Math.random() * 5) + 1;

        // Add the 6 pipes 
        // With one big hole at position 'hole' and 'hole + 1'
        for (var i = 0; i < 8; i++) {
            if (i !== hole && i !== hole + 1) {
                var x = 400;
                var y = i * 20 + 300;

                // Create a pipe at the position x and y
                var pipe = this.add.sprite(x, y, 'mine');

                // Add the pipe to our previously created group
                this.pipes.add(pipe);

                // Enable physics on the pipe 
                this.physics.add.create(pipe);

                // Add velocity to the pipe to make it move left
                // pipe.body.velocity.x = -200;

                // Automatically kill the pipe when it's no longer visible 
                pipe.checkWorldBounds = true;
                pipe.outOfBoundsKill = true;
            }
        }

    }

    restartGame () {
        this.scene.start('GameScene');
    }
}

export default GameScene;
