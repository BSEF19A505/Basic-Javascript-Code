const http = require('http')

const hand = require('./routes')
console.log(hand.text)
const server = http.createServer(hand.handler)
server.listen(3000)