import {
    Actor,
    SpriteSheet,
    Vector,
    Animation,
    range, Random,
    RotationType
} from "excalibur";
import {Resources} from "./resources.js";

export class Hat extends Actor {
    sprite


    constructor() {
        super()
    }

    onInitialize(engine) {
        this.sprite = Resources.Hat.toSprite();
        this.sprite.width = 40;
        this.sprite.height = 25;
        this.graphics.use(this.sprite);
        this.pos = new Vector(12, -28);
    }


    rotate() {
        this.actions.rotateTo(6.28319, 5, RotationType.Clockwise);
    }
}
