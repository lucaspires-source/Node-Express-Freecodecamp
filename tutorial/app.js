const fs = require('fs')


const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/subfolder/test.txt', 'utf8')
console.log(first)
console.log(second)
 fs.writeFileSync('./content/result-sync.txt', 'hello world')
