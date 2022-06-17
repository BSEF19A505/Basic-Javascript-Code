const { text } = require('express');
const res = require('express/lib/response');
const fs = require('fs')

const reqhandler = (req, res) => {
    const method = req.method;
    // console.log(req.url, req.method, req.headers)
    if (req.url === '/') {
        res.write('<html>')
        res.write('<head> <title> This is my first nodejs code </title></head>')
        res.write(' <body><form action="/message" method="POST"><input type="text" name = "message"><button type="submit">Send</button> </form></body>')
        res.write('</html> ')
        return res.end();
    }
    if (req.url === '/message' && method === 'POST') {
        const msg = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            msg.push(chunk)

        })
        req.on('end', () => {
            const message = Buffer.concat(msg).toString();
            console.log(message)
            const final = message.split('=')[1]

            fs.appendFileSync('message.txt', final);
        })

        res.statusCode = 302;
        res.setHeader('Location', '/');

        // res.write('<html>')
        // res.write('<head> <title> This is my first nodejs code </title></head>')
        // res.write(' <body><h1>Okay</h1></body>')
        // res.write('</html> ')
        return res.end();
    }
    res.write('<html>')
    res.write('<head> <title> This is my first nodejs code </title></head>')
    res.write(' <body><h1>Welcome to first page</h1> </body>')
    res.write('</html> ')
}

//exporting
//1
// module.exports = reqhandler;

//2
// module.exports = {
//     handler: reqhandler,
//     text: 'GREAT'
// }

//3
module.exports.handler = reqhandler;
module.exports.text = 'GREAT'