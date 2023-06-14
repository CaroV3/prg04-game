import {
    Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range, Random,
} from "excalibur";
import {Resources} from "./resources.js";


export class Person extends Actor {
    constructor() {
        super({width: 75, height: 125});
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.Man,
            grid: {rows: 1, columns: 4, spriteWidth: 123, spriteHeight: 200},
        });
        // test of alle sprites er zijn
        let randomStart = Math.random() * 300
        this.pos = new Vector(1000, 510);

        const walkLeft = Animation.fromSpriteSheet(walkSheet, range(0,3), 100);
        this.graphics.add("walkleft", walkLeft);
        this.graphics.use(walkLeft);

    }

    onInitialize(engine) {
        let randomSpeed = Math.random() * -400

        this.vel = new Vector(-400 + randomSpeed, 0);
    }

    onPostUpdate(_engine, _delta) {
        if(this.pos.x < -200) {
            this.kill()
        }
    }


}
