import {
    Actor,
    Input,
    Vector,
    SpriteSheet,
    Random,
    Animation,
    range,
    CollisionType,
    Scene,
    Label,
    Font, FontUnit, Color
} from "excalibur";
import {Background} from "./background.js";
import {Duck} from "./duck.js";

export class Gameover extends Scene {
    title;
    subtitle;

    constructor() {
        super();
        const background = new Background();
        this.add(background);

        const duck = new Duck();
        this.add(duck);
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        this.title = new Label({
            text: 'What the duck',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 100,
                color: Color.Black,
            }),
            pos: new Vector(400, 100)
        })
        this.add(this.title);

        this.subtitle = new Label({
            text: 'Press enter to start!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(400, 600)
        })
        this.subtitle.actions.blink(500, 100, 1000);
        this.add(this.subtitle);
    }

    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            engine.goToScene('startgame');
        }
    }
}