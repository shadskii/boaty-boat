export default class Boaty extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.acceleration = 600;
        this.body.maxVelocity.x = 200;
        this.setScale(0.08);
        this.alive = true;
    }

    update (jump) {
        if (jump) {
            this.jump();
        }
        else if (this.angle < 15) {
            this.angle += 1;
        }
    }

    jump () {
        this.body.setVelocityY(-200);
        if (this.angle > -20) {
            this.angle = -15;
        }
    }

    die () {
        this.alive = false;
    }
}
