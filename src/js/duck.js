import {
    Actor,
    SpriteSheet,
    Vector,
    Input,
    Animation,
    range,
} from "excalibur";
import {Resources} from "./resources.js";
import {Tree} from "./tree.js";
import {EnemyBird} from "./enemy-bird.js";
import {Poop} from "./poop.js";
import {Hat} from "./hat.js";


export class Duck extends Actor {

    hat

    constructor() {
        super({width: 90, height: 80});
        // de player heeft zelf de hele spritesheet omdat er maar 1 player is
        const flySheet = SpriteSheet.fromImageSource({
            image: Resources.Duck,
            grid: {rows: 4, columns: 4, spriteWidth: 115, spriteHeight: 90},
        });
        // test of alle sprites er zijn
        console.log(flySheet.sprites);

        const flyRight = Animation.fromSpriteSheet(flySheet, range(0, 7), 60);

        this.graphics.add("flyright", flyRight);
        this.pos = new Vector(200, 200);
        this.vel = new Vector(0, 0);

        this.hat = new Hat();
        this.addChild(this.hat)
    }

    onInitialize(engine) {

        this.on('collisionstart', (event) => this.hitSomething(event, engine));
    }

    onPreUpdate(engine) {


        let xspeed = 0;
        let yspeed = 0;

        this.graphics.use("flyright");

        if (
            engine.input.keyboard.isHeld(Input.Keys.A) ||
            engine.input.keyboard.isHeld(Input.Keys.Left)
        ) {
            xspeed = -300;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.D) ||
            engine.input.keyboard.isHeld(Input.Keys.Right)
        ) {
            xspeed = 300;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.W) ||
            engine.input.keyboard.isHeld(Input.Keys.Up)
        ) {
            yspeed = -300;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.S) ||
            engine.input.keyboard.isHeld(Input.Keys.Down)
        ) {
            yspeed = 300;
        }
        if (
            engine.input.keyboard.wasPressed(Input.Keys.E)
        ) {
           this.hat.rotate();
        }

        this.vel = new Vector(xspeed, yspeed);


        if (
            engine.input.keyboard.wasReleased(Input.Keys.Space)
        ) {
            engine.currentScene.add(new Poop(this.pos.x - 20, this.pos.y + 35))
        }
    }

    hitSomething(event) {
            if (event.other instanceof Tree || event.other instanceof EnemyBird) {
                // console.log("ouch you've hit something");
                this.actions.blink(100, 100, 6);
                this.scene.subtractLive();
            }
    }
}

