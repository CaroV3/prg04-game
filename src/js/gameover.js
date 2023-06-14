import {
    Actor,
    Input,
    Vector,
    Scene,
    Label,
    Font, FontUnit, Color
} from "excalibur";
import {Background} from "./background.js";

export class Gameover extends Scene {
    title;
    subtitle;
    score;
    showScore;

    onActivate(ctx) {
        if (ctx.data) {
            this.score = ctx.data.score;
            console.log(`eindscore: ${this.score}`);
        }

        this.title = new Label({
            text: 'Game over!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 50,
                color: Color.Black,
            }),
            pos: new Vector(270, 230)
        })
        this.add(this.title);

        this.subtitle = new Label({
            text: 'Press enter to try again!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(250, 300)
        })
        this.subtitle.actions.blink(500, 100, 1000);
        this.add(this.subtitle);

        this.showScore = new Label({
            text: `your score: ${this.score}`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(310, 450)
        })
        this.add(this.showScore);
        console.log(this.score);
    }

    constructor() {
        super();
        const background = new Background();
        this.add(background);

    }


    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            // window.location.reload();
            engine.goToScene('startscreen');
        }
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.remove(this.title);
        this.remove(this.subtitle);
        this.remove(this.showScore);

    }


}