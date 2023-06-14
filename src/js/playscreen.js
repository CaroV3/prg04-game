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
    obstacle
    person
    score = 0;
    lives = 3;

    constructor() {
        super({ width: 800, height: 600 })
        Physics.useArcadePhysics();
        // this.showDebug(true);
        // this.debug.transform.showAll = true;
    }

    onInitialize(engine) {
        this.game = engine
    }

    onActivate(){

        console.log("start de game!")

        this.add(new Background());

        this.obstacle = new SpawnerObstacles();
        this.add(this.obstacle);


        this.person = new SpawnerPerson();
        this.add(this.person);

        this.ui = new UI();
        this.add(this.ui);

        this.duck = new Duck();
        this.add(this.duck);
    }



    addScore() {
        this.score++
        this.ui.updateScore(this.score);
    }

    subtractLive() {
        this.lives--
        this.ui.updateLives(this.lives);

        if (this.lives === 0) {
            this.duck.kill();
            if (this.duck.isKilled()){
                this.game.goToScene('gameover', {score: this.score });
            }
        }
    }

    onDeactivate(_context) {
        super.onDeactivate(_context);
        this.obstacle.timerA.stop();
        this.person.timerB.stop();
        //not needed. scene.clear() is enough
        // this.obstacle.kill();
        // this.person.kill();
        this.clear();
        this.lives = 3;
        this.score = 0;

    }

}
