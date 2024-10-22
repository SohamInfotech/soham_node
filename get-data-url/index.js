const express = require('express')
const app = express();
app.set('view engine', 'ejs')

const soham = []
let storedata=

app.get('/', (req, res) => {

    res.render('index', { data: soham })
})
app.get('/creatdata', (req, res) => {
    soham.push(req.query)
    console.log(req.query);
    res.redirect('/');

})
app.listen(200)
