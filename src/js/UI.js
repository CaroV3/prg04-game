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
    lifesText
    scoreText

    constructor() {
        super({x: 100, y: 50})
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
        this.scoreText.pos =  new Vector(590, 0)
        this.addChild(this.scoreText)


        this.livesText = new Label({
            text: 'Lives: 3',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 25,
                color: Color.Black
            }),
        })
        this.livesText.pos = new Vector(500, 0)
        this.addChild(this.livesText)
    }

    updateScore(score) {
        this.scoreText.text = `Score: ${score}`
    }

    updateLives(lives) {
        this.livesText.text = `Lives: ${lives}`;
    }
}