import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import backgroundImage from '../images/background-park.jpg'
import duckSpriteSheet from '../images/duck-spritesheet.png'
import manSpriteSheet from '../images/walking-girl.png'
import birdPoop from '../images/bird_poop.png'
import poopSplash from '../images/splash-poop.png'
import tree from '../images/tree.png'

const Resources = {
    Background: new ImageSource (backgroundImage),
    Duck: new ImageSource (duckSpriteSheet),
    Man: new ImageSource (manSpriteSheet),
    Poop: new ImageSource (birdPoop),
    Splash: new ImageSource (poopSplash),
    Tree: new ImageSource (tree)
}
const ResourceLoader = new Loader([Resources.Background, Resources.Duck,  Resources.Man, Resources.Poop, Resources.Splash, Resources.Tree])

export { Resources, ResourceLoader }