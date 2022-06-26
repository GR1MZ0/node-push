const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('this is our about page')
    }
    res.end(`
    <h1>404 PAGE NOT FOUND!</h1>
    <p>We can't find the page you requested</p>
    <a href='/'>back home</a>
    `)
})

server.listen(5000)