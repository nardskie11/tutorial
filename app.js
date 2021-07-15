// npm - is a global command that can call all the npm package/dependencies that uploaded in npmjs.org
// npm --v is the code to check npm version

// local dependencies - use in only on this or local project
// npm i <packageName>

//global dependecy - use in any project 
//npm install -g <packageName>
//sudo npm install -g <packageName>(macOS)

//package.json - manifest file (store important info about project/package)
//manual approach(create package.json in the root folder)
//npm init (step by step, press enter to skip)
//npm init -y (everything is default)

//why important to install package.json???
//its because all the local packages/dependencies that will be install in the project will be stored in package.json

const _ = require('lodash')

const item =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems)