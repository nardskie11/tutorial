//built in module doesnt need path(./) just call the name of the module.
const os = require('os')

//info about the current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system update is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalem: os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)