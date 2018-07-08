import {Phaser, Scene, SPACE} from 'phaser';
import Boaty from '../sprites/Boaty';
import Mine from '../sprites/Mine';
import Whale from '../sprites/Whale';
import Crab from '../sprites/Crab';
import Torpedo from '../sprites/Torpedo';

/**
 * This is the primary scene. The game is played during this scene.
 */
class GameScene extends Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;

        this.add.image(this.width / 2, this.height / 2, 'water').setScale(10, 2);
        this.platforms = this.physics.add.staticGroup();
        this.platforms
            .create(0, this.height, 'ground')
            .setScale(10, 0.5)
            .refreshBody();

        this.score = 0;
        this.scoreText = this.add.text(24, 24, '0', {
            fontSize: '32px',
            fill: '#fff',
        });

        this.boaty = new Boaty({
            scene: this,
            key: 'boaty',
            x: this.width / 8,
            y: this.height / 7,
        });

        // Enemy generation
        this.enemies = this.add.group();
        this.time.addEvent({
            delay: 800,
            callback: this.addMine,
            callbackScope: this,
            loop: true,
        });
        this.time.addEvent({
            delay: 2000,
            callback: this.addWhale,
            callbackScope: this,
            loop: true,
        });
        this.time.addEvent({
            delay: 4000,
            callback: this.addCrab,
            callbackScope: this,
            loop: true,
        });
        this.time.addEvent({
            delay: 9000,
            callback: this.addTorpedo,
            callbackScope: this,
            loop: true,
        });

        // Input controls
        this.isJump = false;
        this.input.on('pointerdown', (pointer) => {
            this.isJump = true;
        });
        this.input.on('pointerup', (pointer) => {
            this.isJump = false;
        });
        this.spaceJump = this.input.keyboard.addKey(SPACE);
    }

    update() {
        this.boaty.update(this.isJump || this.spaceJump.isDown);
        this.enemies.children.entries.forEach((element) => {
            element.update();
        });
        if (!this.boaty.alive) {
            this.scene.start('GameOverScene', {score: this.score});
        }
    }

    enemySpawnYValue() {
        let range = this.height * 0.9;
        let topPad = this.height * 0.02;
        return Math.floor(Math.random() * range) + topPad;
    }

    addMine() {
        this.enemies.add(
            new Mine({
                scene: this,
                key: 'mine',
                x: this.width + this.width / 10,
                y: this.enemySpawnYValue(),
            })
        );
    }
    addWhale() {
        this.enemies.add(
            new Whale({
                scene: this,
                key: 'whale',
                x: this.width + this.width / 5,
                y: this.enemySpawnYValue(),
            })
        );
    }
    addCrab() {
        this.enemies.add(
            new Crab({
                scene: this,
                key: 'crab',
                x: this.width + this.width / 10,
                y: this.height * 0.95,
            })
        );
    }
    addTorpedo() {
        this.enemies.add(
            new Torpedo({
                scene: this,
                key: 'torpedo',
                x: this.width + this.width / 10,
                y: this.enemySpawnYValue(),
            })
        );
    }
    incrementScore() {
        this.score++;
        this.scoreText.setText(this.score);
    }
}

export default GameScene;
