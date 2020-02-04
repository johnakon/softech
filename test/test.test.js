const laptop = require('../models/laptop')

// console.log(require('../index.js'))
let myLaptop = require('../index.js')

//instatiating


test('test string version of the object', () => {
    expect(myLaptop.printableString()).toBeDefined()
})

test('test string version of the object', () => {
    expect(myLaptop.checkRam()).toBe(true)
})

