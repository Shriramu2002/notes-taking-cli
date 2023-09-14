import http from 'node:http'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('hello there');
})

server.listen(4000, () => {
    console.log('server is running at port http://localhost:4000');
})