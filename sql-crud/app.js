const express = require('express');
const app = express();
const mysql = require('mysql');
app.set('view engine', 'ejs');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud-node"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection successful");
});

var id = null;
var data = [];

function get_data() {
    const qry = `SELECT * FROM inputhandling`;
    con.query(qry, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Query successful");
            data = result;
        }
    });
}
get_data()

function delet(did) {
    const qry = `DELETE FROM inputhandling WHERE id = ${did}`;
    con.query(qry, (err) => {
        if (err) throw err;
        console.log("Data deleted successfully");
    });
    get_data()
}







app.get('/', (req, res) => {
    get_data();
    res.render('form', { result: data, editdata: null });
});

app.get('/createdata', (req, res) => {
    const subdata = req.query;

    const hobbies = Array.isArray(subdata.hobby) ? subdata.hobby.join(',') : subdata.hobby;

    if (id) {
        const qry = `UPDATE inputhandling SET  name ='${subdata.name}', gender ='${subdata.gender}', hobby ='${hobbies}', city = '${subdata.city}' WHERE id = '${id}'`;
        con.query(qry, (err) => {
            if (err) throw err;
            console.log("data updated successfully");
            res.redirect('/');
        });
        id = null;
        get_data()

    } else {
        const qry = `INSERT INTO inputhandling (name, gender, hobby, city) VALUES ( '${subdata.name}', '${subdata.gender}', '${hobbies}', '${subdata.city}')`;
        con.query(qry, (err) => {
            if (err) throw err;
            console.log("Data inserted successfully");
            res.redirect('/');
        });
        get_data()

    }
});



app.get('/deletedata', (req, res) => {
    delet(req.query.delet);

    res.redirect('/');
});

app.get('/editdata/:id', (req, res) => {
    const editid = req.params.id;
    id = editid;
    const qry = `SELECT * FROM inputhandling WHERE id = ${editid}`;
    con.query(qry, (err, res2) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res2);
            res.render('form', { editdata: res2[0], result: data });
        }
    })
})


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
