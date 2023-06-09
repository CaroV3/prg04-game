import {Actor, Random, Timer} from "excalibur";
import {Person} from "./person.js";
import {Tree} from "./tree.js";

export class SpawnerPerson extends Actor{

    constructor() {
        super();

    }

    onInitialize(engine) {
        this.timerB = new Timer({
            fcn: () => this.spawn(engine),
            interval: 2000,
            repeats: true
        })
        engine.currentScene.add(this.timerB)
        this.timerB.start()
    }

    spawn(engine) {
        // console.log("spawn person");
        const person = new Person()
        engine.currentScene.add(person)
    }
}