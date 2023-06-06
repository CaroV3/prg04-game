import {Actor, Random, Timer} from "excalibur";
import {Man} from "./man.js";
import {Tree} from "./tree.js";

export class SpawnerCharacter extends Actor{

    constructor() {
        super();


    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 2000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        console.log("spawnC");
        const man = new Man()
        engine.currentScene.add(man)
    }
}