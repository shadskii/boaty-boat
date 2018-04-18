export default class Crab extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.velocity.x = -1000;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.2, 0.2);
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
