
const http = require("node:http");
const fs = require("node:fs")

const server =  http.createServer((req,res)=>{
    //node will handle the request and we need to write the code that will handle the response
   
    res.writeHead(200,{"Content-Type":"text/html"})
    const html = fs.readFileSync("./index.html", "utf-8")
    res.end(html);
})
// we also need to inform our server to listen to any incoming requests

server.listen(5000,()=>{
    console.log("server running on port 5000")
})