import Enemy from './Enemy';

/**
 * This floating ball of fun shouldn't be trifled with.
 */
export default class Mine extends Enemy {
    constructor(config) {
        super(config);
        this.body.velocity.x = -300;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.15, 0.15);
    }
}
