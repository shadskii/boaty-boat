export default class extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.boaty = this.scene.boaty;
        this.scene.physics.add.overlap(this, this.boaty, this.boatyHit, null, this);
    }

    boatyHit (mine, boaty) {
        this.boaty.die();
    }
    update () {
        if (this.x <= 0) {
            this.scene.incrementScore();
            this.scene.enemies.remove(this);
            this.destroy();
        }
    }
}
