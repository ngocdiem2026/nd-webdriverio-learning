/** Extra exercise - Using color */
//The super nifty way
var colors = require('colors')
console.log('1. hello'.green) // outputs green text
console.log('2. I like cake and pies'.underline.red) // outputs red underlined text
console.log('3. inverse the color'.inverse) // inverses the color
console.log('4. OMG Rainbows!'.rainbow) // rainbow
console.log('5. Run the trap'.trap) // Drops the bass

// or a slightly less nifty way which doesn't extend String.prototype
var colors = require('colors/safe')
console.log(colors.green('6. hello')) // outputs green text
console.log(colors.red.underline('7. i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('8. inverse the color')) // inverses the color
console.log(colors.rainbow('9. OMG Rainbows!')) // rainbow
console.log(colors.trap('10. Run the trap')) // Drops the bass
/** Console.log string substitution */

var name = 'Marak';
console.log(colors.green('11. Hello %s'), name);

/** CUSTOM THEMES */
/** Using standard API */

var colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
})
// outputs red text
console.log("12. this is an error".error)
// outputs yellow text
console.log("13. this is a warning".warn)

/** Using string safe API */
var colors = require('colors/safe')
// set single property
var error = colors.red;
error('14. this is red');

// set theme
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
})
// outputs red text
console.log(colors.error("15. this is an error"))
// outputs yellow text
console.log(colors.warn("16. this is a warning"))
console.log(colors.help("17. this is a help text"))


/** Combining Colors */
var colors = require('colors')
colors.setTheme({
    custom: ['red', 'underline']
})
console.log('18. test'.custom)