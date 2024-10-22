 const { write } = require('fs')
const http=require('http')
const fs=require("fs")

const server =http.createServer((req,res)=>{
    
    var soham=fs.readFileSync('demo.text','utf-8')
    console.log(soham);
    
    res.write(soham)


res.end()

})
server.listen(5000)