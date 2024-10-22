const express = require('express')
const app = express();
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    // res.send('how are you')
    const soham="jam jam jmbura";
    res.render('index',{name:soham})
})
app.listen(200)
