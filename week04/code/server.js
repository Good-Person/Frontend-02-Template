const http = require('http');

http.createServer((req, res) => {
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
        console.log('body', body)
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        console.log(body)
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(" Hello world\n")
    })
}).listen(8088)

console.log('启动成功')