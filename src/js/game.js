import '../css/style.css'
import {Engine, Input, Physics, Vector} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Startscreen} from './startscreen.js'
import {Playscreen} from "./playscreen.js";
import {Gameover} from "./gameover.js";


export class Game extends Engine {

    constructor() {
        super({width: 800, height: 600})
        // Physics.useArcadePhysics();
        Physics.useRealisticPhysics()
        Physics.gravity = new Vector(0, 1000)
        // this.showDebug(true);
        // this.debug.transform.showAll = true;
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene('startscreen', new Startscreen());
        this.addScene('startgame', new Playscreen());
        this.addScene('gameover', new Gameover());
        this.goToScene('startscreen');

    }
}

new Game()
