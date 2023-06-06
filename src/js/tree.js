import { Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,} from "excalibur";
import {Resources} from "./resources.js";


export class Tree extends Actor {
    constructor() {
        super({radius:200});
        this.graphics.add(Resources.Tree.toSprite());
        this.pos = new Vector(1000, 370);
        this.vel = new Vector(0, 1000);
    }

    onInitialize(engine) {
        this.vel = new Vector(-600, 0);
    }


}