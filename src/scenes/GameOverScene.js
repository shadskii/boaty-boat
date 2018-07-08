import {Scene, Display} from 'phaser';

/**
 * Scene shown to the user after the game has ended. Allowing
 * them the option to play again.
 */
export default class GameOverScene extends Scene {
    constructor() {
        super({key: 'GameOverScene'});
    }

    init(data) {
        this.score = data.score;
    }
    create() {
        let canvas = document.getElementsByTagName('canvas')[0];
        let width = canvas.width;
        let height = canvas.height;

        this.scene.bringToTop();
        this.add.image(width / 2, height / 2, 'water').setScale(10, 2);
        this.platforms = this.physics.add.staticGroup();
        this.platforms
            .create(0, height, 'ground')
            .setScale(10, 0.5)
            .refreshBody();

        this.scoreText = this.add.text(0, 0, this.score, {
            fontSize: width / 5 + 'px',
            fill: '#fff',
        });
        this.restartButton = this.add.image(0, 0, 'play-again').setInteractive();

        this.input.on('gameobjectdown', (pointer, gameObject) => {
            if (gameObject === this.restartButton) {
                this.scene.start('GameScene');
            }
        });
        Display.Align.In.Center(this.scoreText, this.add.zone(width / 2, height / 4, width, height));
        Display.Align.In.BottomCenter(this.restartButton, this.add.zone(width / 2, height / 4, width, height));
    }
}
