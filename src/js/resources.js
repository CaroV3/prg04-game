import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import backgroundImage from '../images/background-park.jpg'
import duckSpriteSheet from '../images/duck-spritesheet.png'
import manSpriteSheet from '../images/walking-girl.png'
import birdPoop from '../images/bird_poop.png'
import poopSplash from '../images/splash-poop.png'
import tree from '../images/tree.png'
import enemyBird from '../images/enemy-bird.png'
import hat from '../images/hat.png'

const Resources = {
    Background: new ImageSource (backgroundImage),
    Duck: new ImageSource (duckSpriteSheet),
    Man: new ImageSource (manSpriteSheet),
    Poop: new ImageSource (birdPoop),
    Splash: new ImageSource (poopSplash),
    Tree: new ImageSource (tree),
    EnemyBird: new ImageSource (enemyBird),
    Hat: new ImageSource(hat)
}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Duck,
    Resources.Man,
    Resources.Poop,
    Resources.Splash,
    Resources.Tree,
    Resources.EnemyBird,
    Resources.Hat
])

export { Resources, ResourceLoader }