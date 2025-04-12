const express = require('express')
const port=3000
const app=express();

app.get('/', (req, res)=>{
res.send('<b>HEllo sonu what are you doing  <b>')
    } )
app.post('/conversation',(req,res)=>{
res.send('<b>jay shree ram<b>')
});
app.listen(port,() =>{
    console.log('example app listening on ${port}');
});



/*create a todo app that let user store todos on server
try yo create a https server from scratch in 
create a http server in  rust using actix-lab
create an http server in  golang using the gurilla framework
spring boot java */
// fs->filesystem
// req->request
//rest,API,