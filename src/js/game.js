import '../css/style.css'
import {Engine, Input} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Duck} from "./duck.js";
import { Background} from "./background.js";
import { Man} from "./Man.js";
import { Poop} from "./poop.js";

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.add(new Background());
        this.add(new Man());
        this.add(new Duck());

        if (
            this.input.keyboard.wasReleased(Input.Keys.Space)
        ) {
            console.log('hi')
            this.add(new Poop());
        }
    }
}
new Game()
