import { Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,} from "excalibur";
import {Resources} from "./resources.js";


export class Tree extends Actor {
    constructor() {
        super({radius:190});
        this.graphics.add(Resources.Tree.toSprite());
        let randomStart = Math.random() * 700
        this.pos = new Vector(1000 + randomStart, 370);
        this.vel = new Vector(0, 1000);
    }

    onInitialize(engine) {
        this.vel = new Vector(-400, 0);
    }

    onPostUpdate(_engine, _delta) {
        if(this.pos.x < -200) {
            this.kill()
        }
    }

}