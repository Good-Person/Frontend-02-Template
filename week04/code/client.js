const net = require('net');

class Request{
    constructor(options){
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.headers = options.headers || {};
        this.body = options.body || {};
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded"
        }

        if (this.headers["Content-Type"] === "application/json") {
            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map((key) => `${key}=${encodeURIComponent(this.body[key])}`).join("&")
        }

        this.headers["Content-Length"] = this.bodyText.length;

    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r\n${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\n\r\n${this.bodyText}`
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            if (connection) {
                connection.write(this.toString())
            } else {
                connection = new net.createConnection({
                    host: this.host,
                    port: this.port
                },() => {
                    console.log(`链接到${this.host}:${this.port}`);
                    connection.write(this.toString())
                })
            }

            connection.on("data", (data) => {
                console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinshed) {
                    resolve(parser.response)
                    connection.end()
                }
            })

            connection.on("end", (e) => {
                console.log("断开链接")
                resolve(e)
            })

            connection.on("error", (err) => {
                reject(err);
                connection.end();
            })
        })
    }
}

class ResponseParser{
    constructor() {
        this.isFinshed = false;
        this.response = null;
    }

    receive(string) {

    }
}

void async function() {
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: 8088,
        path: "/",
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "huige"
        }
    })

    let response = await request.send();

    console.log(response)
}();