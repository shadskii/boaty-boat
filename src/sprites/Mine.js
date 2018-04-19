import Enemy from './Enemy';

export default class Mine extends Enemy {
    constructor (config) {
        super(config);
        this.body.velocity.x = -400;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.2, 0.2);
    }

}
