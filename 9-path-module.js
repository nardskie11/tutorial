//built in module doesnt need path(./) just call the name of the module.
const { copyFileSync } = require('fs')
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolutePath)