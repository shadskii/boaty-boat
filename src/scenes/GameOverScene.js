class GameOver extends Phaser.Scene {
    constructor () {
        super({
            key: 'GameOver'
        });
    }

    create () {

        this.text = this.make.text(32, 32);
        this.text.x = 350;
        this.text.y = 350;
        this.text.setText('Game Over!')
    }
}

export default GameOver;
