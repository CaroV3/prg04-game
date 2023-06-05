import { Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,} from "excalibur";
import {Resources} from "./resources.js";


export class Man extends Actor {
    constructor() {
        super();
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.Man,
            grid: {rows: 1, columns: 4, spriteWidth: 123, spriteHeight: 200},
        });
        // test of alle sprites er zijn
        console.log(walkSheet.sprites);

        const walkLeft = Animation.fromSpriteSheet(walkSheet, range(0,3), 100);


        this.graphics.add("walkleft", walkLeft);

        this.graphics.use(walkLeft);
    }

    onInitialize(engine) {
        this.pos = new Vector(750, 510);
        this.vel = new Vector(-600, 0);
    }
}
