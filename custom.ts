
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block="three"
    Three
}

/**
 * animation blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED 
     * TODO: describe your function here
     * @param x hori. led
     * @param y vert. led
     * @param interval time in ms for blinks
     */
    //% block="blink with $x and $y and $interval"
    export function blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x,y)
        sprite.setBlink(interval)
        sprite.blink()
        // Add code here
    }
}
 