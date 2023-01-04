const { createServer } = require("node:http");
const http = require("node:http");

const server =  http.createServer((req,res)=>{
    //node will handle the request and we need to write the code that will handle the response
    res.writeHead(200,{"content-Type":"text/plain"})
    res.end("Hello world!");
})
// we also need to inform our server to listen to any incoming requests

server.listen(3000,()=>{
    console.log("server running on port 3000")
})