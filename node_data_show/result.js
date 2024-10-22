const server = require('express');
const app = server();
const fs = require('fs')


var so = []
var index = null
const data=JSON.parse(fs.readFileSync('./data.json','utf-8'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index.ejs',{data})
})

app.get("/subdata",(req,res)=>{
res.render("subdata.ejs",{data:data[req.query.index]})
})



app.listen(150)
