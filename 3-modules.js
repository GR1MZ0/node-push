// commonJS - every file is a module by default
// Modules - Encapsulated code (only share minium)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')



sayHi("kilan")
sayHi(names.john) //destructuring the export to work in  the file
sayHi(names.peter)