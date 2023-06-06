import {Actor, Random, Timer} from "excalibur";
import {Man} from "./man.js";
import {Tree} from "./tree.js";

export class SpawnerObstakels extends Actor{

    constructor() {
        super();

        this.random = new Random(1337)

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
        console.log("spawnO");
        const tree = new Tree()
        engine.currentScene.add(tree)
    }
}