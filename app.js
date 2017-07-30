const http = require('http')

const port = parseInt(process.env.PORT, 10)

http.createServer((req, res) => {
  res.end('Hello World from CI\n')
}).listen(port)
