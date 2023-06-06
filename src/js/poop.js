import {Actor, Vector,} from "excalibur";
import {Resources} from "./resources.js";
import {Person} from "./person.js";


export class Poop extends Actor {
    constructor(x, y) {
        super({width: 90, height: 300});
        this.graphics.add(Resources.Poop.toSprite());
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.15, 0.15);
        this.vel = new Vector(0, 1000);
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event, engine))
    }

    hitSomething(event, engine){
        if (event.other instanceof Person) {
            engine.ui.updateScore();
            this.graphics.use(Resources.Splash.toSprite());
            this.vel = event.other.vel;
            this.scale = new Vector(0.1, 0.1);
        }
    }

}