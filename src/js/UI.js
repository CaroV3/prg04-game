import {
    ScreenElement,
    Label,
    Vector,
    Font,
    FontUnit,
    Color,
    Text
} from "excalibur";

export class UI extends ScreenElement {
    lifes = 3;
    lifesText
    scoreText

    constructor() {
        super({x: 100, y: 100})
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 25,
                color: Color.Black
            }),
        })
        this.scoreText.pos =  new Vector(590, 30)
        this.addChild(this.scoreText)


        this.lifesText = new Label({
            text: 'lifes: 3',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 25,
                color: Color.Black
            }),
        })
        this.lifesText.pos = new Vector(500, 30)
        this.addChild(this.lifesText)
    }

    updateScore(score) {
        this.scoreText.text = `Score: ${score}`
    }

    updateLifes() {
        this.lifes--
        this.lifesText.text = `Score: ${this.lifes}`;
    }
}