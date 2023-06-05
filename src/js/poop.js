import {
    Actor,
    Vector,
} from "excalibur";
import {Resources} from "./resources.js";


export class Poop extends Actor {
    constructor() {
        super();
        console.log('hello');
        this.graphics.add(Resources.Poop.toSprite());
        this.pos = new Vector(750, 510);
        this.scale = new Vector(0.15, 0.15);
        this.vel = new Vector(0, 1000);
    }

}