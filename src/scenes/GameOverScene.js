export default class GameOverScene extends Phaser.Scene {
    constructor () {
        super({ key: 'GameOverScene' });
    }

    init (data) {
        this.score = data.score;
    }
    create () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        this.scene.bringToTop();
        this.add.image(width / 2, height / 2, 'water').setScale(10, 2);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, height, 'ground').setScale(10, 0.5).refreshBody();

        this.title = this.add.text(width / 10, height / 10, 'Game Over',
            {
                fontSize: width / 10 + 'px',
                fill: '#fff'
            });
        this.scoreText = this.add.text(0, 0, this.score,
            {
                fontSize: width / 5 + 'px',
                fill: '#fff'
            });
        this.restartButton = this.add.image(0, 0, 'play-again').setInteractive();

        this.input.on('gameobjectdown', (pointer, gameObject) => {
            if (gameObject === this.restartButton) {
                this.scene.start('GameScene');
            }
        });
        Phaser.Display.Align.In.TopCenter(this.title, this.add.zone(width / 2, height - height / 2, width, height));
        Phaser.Display.Align.In.Center(this.scoreText, this.add.zone(width / 2, height / 4, width, height));
        Phaser.Display.Align.In.BottomCenter(this.restartButton, this.add.zone(width / 2, height / 4, width, height));
    }
}
