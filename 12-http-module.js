//this module show how to use http module in nodejs
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to my site')
    }
    else if (req.url === '/about'){
        res.end('This is my about page')
    }
    else{
        res.end(
            `<h1>Opps!!! ungas ka</h1>
            <p>walang page na ganyan</p>
            <a href="/">balik ka sa home</a>
            `)
    }
})

server.listen(5000)