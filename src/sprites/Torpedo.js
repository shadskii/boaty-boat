import Enemy from './Enemy';

/**
 * This guy loves moving fast and blowing stuff up.
 */
export default class Torpedo extends Enemy {
    constructor(config) {
        super(config);
        this.body.velocity.x = -1000;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.3, 0.3);
    }
}
