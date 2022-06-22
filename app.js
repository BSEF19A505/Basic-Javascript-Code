const express = require('express');
const bodyparser = require('body-parser')
const path = require('path')

const app = express();

const admin = require('./routes/admin')
const shopr = require('./routes/shop')

app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', admin.routes);
app.use(shopr);

//No page found error
app.use((req, res, next) => {
    res.render('NotFound', { pageTitle: 'NOT FOUND' })
    res.status(404) //.send('<h1>Page Not Found</h1>')
})

// const server = http.createServer(app)
// server.listen(3000)
app.listen(3000)