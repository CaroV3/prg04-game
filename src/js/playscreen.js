import {
    Input,
    Scene,
    Physics,
} from "excalibur";
import {Background} from "./background.js";
import {SpawnerObstacles} from "./spawner-obstacles.js";
import {SpawnerPerson} from "./spawner-person.js";
import {Duck} from "./duck.js";
import {UI} from "./UI.js";
import {Poop} from "./poop.js";

export class Playscreen extends Scene {
    duck
    ui
    score = 0;

    constructor() {
        super({ width: 800, height: 600 })
        Physics.useArcadePhysics();
        // this.showDebug(true);
        // this.debug.transform.showAll = true;
    }

    onInitialize() {
        console.log("start de game!")

        this.add(new Background());

        this.add(new SpawnerObstacles());

        this.add(new SpawnerPerson());

        this.duck = new Duck();
        this.add(this.duck);

        this.ui = new UI();
        this.add(this.ui);

    }

    onPreUpdate(engine) {
        if (
            engine.input.keyboard.wasReleased(Input.Keys.Space)
        ) {
            this.add(new Poop(this.duck.pos.x-20, this.duck.pos.y+35));
        }
    }

    addScore() {
        this.score++
        this.ui.updateScore(this.score);
    }

}
