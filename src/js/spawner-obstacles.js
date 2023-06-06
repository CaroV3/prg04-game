import {Actor, Random, Timer} from "excalibur";
import {EnemyBird} from "./enemy-bird.js";
import {Tree} from "./tree.js";

export class SpawnerObstacles extends Actor{
    obstacle
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
        console.log("spawnO");
        let randomNumber = Math.random()*4;
        console.log(randomNumber);
        if (randomNumber < 2) {
            this.obstacle = new Tree();
            console.log('tree')
        } else {
            console.log('enemy bird')
            this.obstacle = new EnemyBird();
        }
        engine.currentScene.add(this.obstacle);

    }
}