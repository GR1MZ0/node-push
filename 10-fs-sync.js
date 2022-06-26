const {readFileSync, writeFileSync} = require('fs')

console.log("start");

// reading a file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// makes a new file if one is not available
writeFileSync('./content/sync.txt', 'hello this is the third text file using sync',{flag: 'a'})

console.log("done with this task");
console.log("starting the next one");