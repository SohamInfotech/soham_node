const { render } = require('ejs');
const express = require('express');

const app = express();
const mysql = require('mysql')

const data = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud-node'
})

data.connect((err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('scusess');
    }
})

app.set('view engine', 'ejs');
let storedata = []
let index = null;
let editdata = null;
app.get('/', (req, res) => {

    res.render('index', { data: storedata, editdata: editdata });
});

app.get('/createdata', (req, res) => {

    if (index != null) {
        storedata[index] = req.query;
        index = null;
        editdata = null;
    }
    else {
        storedata.push(req.query)
        var d = req.query;
        console.log(req.query);
        let soham = `insert into detail(name,surname,age)values('${d.name}','${d.surname}','${d.age}')`;
        console.log(soham);
        data.query(soham, (err) => {
            if (err) {
                console.log(err);

            } else {
                console.log("sucsess");
            }
        })

    }

    res.redirect('/')
})

app.get('/deletedata', (req, res) => {

    storedata.splice(req.query.delet, 1)
    res.redirect('/')
})
app.get('/updetedata', (req, res) => {
    index = req.query.updete;
    editdata = storedata[index];
    res.render('index', { editdata: editdata, data: storedata })
})
app.listen(3004)