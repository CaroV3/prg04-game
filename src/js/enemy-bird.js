import { Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,} from "excalibur";
import {Resources} from "./resources.js";


export class EnemyBird extends Actor {
    constructor() {
        super({width: 80, height: 70});
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        const flySheet = SpriteSheet.fromImageSource({
            image: Resources.EnemyBird,
            grid: {rows: 4, columns: 4, spriteWidth: 115, spriteHeight: 90},
        });
        // test of alle sprites er zijn
        console.log(flySheet.sprites);

        const flyLeft = Animation.fromSpriteSheet(flySheet, range(0, 7), 60);

        this.graphics.add("flyleft", flyLeft);
        this.graphics.use("flyleft", flyLeft);
    }
    onInitialize(engine) {

        let randomStartX = Math.random() * 700
        let randomStartY = Math.random() * 200
        this.pos = new Vector(1000 + randomStartX, 50 + randomStartY);

        let randomSpeed = Math.random() * -400
        this.vel = new Vector(-400 + randomSpeed, 0);
    }

    onPostUpdate(_engine, _delta) {
        if(this.pos.x < -200) {
            this.kill()
            // console.log('vijandige een dood');
        }
    }


}