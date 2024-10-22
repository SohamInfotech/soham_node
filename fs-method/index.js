
const fs = require("fs");
console.log("hello1");
console.log("hello2");

//.....WRITE.....//

// fs.writeFile('demo.text','creative',(data,eror)=>{
//     if(!eror){
//         console.log(data);

//     }else{

//         console.log(eror);
//     }

// })

// fs.writeFileSync('demo.text','soham',(data,eror)=>{
//     console.log(data);

// })

//.....READ.....//

//  fs.readFile('demo.text',"utf-8",(eror,data)=>{
//     if(!eror){
//         console.log(data);

//     }else{
//         console.log(eror);

//     }
//  })
// var data= fs.readFileSync('demo.text',"utf-8")
// console.log(data);

// var so=fs.readFileSync('demo.text','utf-8')
// console.log(so);


//.....APPEND.....//

// fs.appendFile('demo.text','sohambhai',(eror)=>{
    
//     console.log(eror);
    

// })  

// var soham=fs.appendFileSync('demo.text',"ssssss")
// console.log(soham);


fs.unlink('demo.text',(e)=>{
    console.log(e);
    
})
console.log("hello3");
console.log("hello4");



