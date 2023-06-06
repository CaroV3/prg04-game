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
    score = 0
    scoreText

    constructor() {
        super({x: 100, y: 100})
    }

    onInitialize(engine) {
        this.scoreText = new Text({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 25,
                color: Color.Black
            }),
        })
        this.graphics.use(this.scoreText)
        this.pos = new Vector(670, 30)
    }

    updateScore() {
        this.score++
        this.scoreText.text = `Score: ${this.score}`
    }
}