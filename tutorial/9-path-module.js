const path = require('path')

console.log(path.sep)


const filePath = path.join('/content','subfolder','test')

console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute = path.resolve(filePath)
console.log(absolute)