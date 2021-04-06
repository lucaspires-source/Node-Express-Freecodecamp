const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.end('Hello World')
    }
    if(req.url === '/about'){
        res.end('Hello World from about page')
    } 
    res.end(
        `
        <h1>Ops</h1>
        <p>The page you are looking for doesn not exist</p>
        <a href="/">Return to the home page</a>
        `
    )   
})

server.listen(5000)