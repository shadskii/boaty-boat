export default class Mine extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.velocity.x = -200;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.2, 0.2);
        this.boaty = this.scene.boaty;
        this.scene.physics.add.overlap(this, this.boaty, this.boatyHit, null, this);

        // this.setTypeA().setCheckAgainstB();
        // this.boaty.setTypeB().setCheckAgainstA();
        // this.setCollideCallback(this.boatyHit, this);
    }

    boatyHit (mine, boaty) {
        console.log("die");
        this.boaty.die();
    }
    update () {

    }
}
