import Enemy from './Enemy';

/**
 * This evil little guy loves to run across the bottom of the ocean
 */
export default class Crab extends Enemy {
    constructor(config) {
        super(config);
        this.body.velocity.x = -1000;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.2, 0.2);
    }
}
