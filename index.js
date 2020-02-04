// import laptop class
const laptop = require('./models/laptop')

let dell = new laptop(500, '16', 2.5, 5, 15, 'Vostro', 'Dell', 1.5, 'Ubuntu', 2019120012589)
console.log(dell.printableString())

// test the output

module.exports = dell