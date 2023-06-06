import '../css/style.css'
import {Engine, Input, Physics} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Duck} from "./duck.js";
import { Background} from "./background.js";
import { SpawnerCharacter} from "./spawner-character.js";
import { SpawnerObstakels} from "./spawner-obstakels.js";
import { Poop} from "./poop.js";
import { UI} from "./UI.js";

export class Game extends Engine {
    duck
    ui

    constructor() {
        super({ width: 800, height: 600 })
        Physics.useArcadePhysics();
        this.showDebug(true);
        this.debug.transform.showAll = true;
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.add(new Background());
        this.add(new SpawnerObstakels());
        this.add(new SpawnerCharacter());
        this.duck = new Duck();
        this.add(this.duck);
        this.ui = new UI();
        this.add(this.ui);

    }

    _preupdate(delta) {
        super._preupdate(delta);
        if (
            this.input.keyboard.wasReleased(Input.Keys.Space)
        ) {
            this.add(new Poop(this.duck.pos.x-20, this.duck.pos.y+35));
        }
    }
}
new Game()
