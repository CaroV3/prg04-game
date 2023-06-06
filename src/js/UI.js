import {
    ScreenElement,
    Label,
    Vector,
    Font,
    FontUnit,
    Color,
} from "excalibur";

export class UI extends ScreenElement {
    score = 0
    scoreText

    constructor() {
        super({x: 10, y: 10})
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 25,
                color: Color.Black,
            }),
            pos: new Vector(670, 30)
        })
        this.addChild(this.scoreText)
    }

    updateScore() {
        this.score++
        this.scoreText.text = `Score: ${this.score}`
    }
}