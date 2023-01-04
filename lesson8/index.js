
const http = require("node:http");

const server =  http.createServer((req,res)=>{
    //node will handle the request and we need to write the code that will handle the response
    const superHero ={
       firstName: "Bruce",
       lastName: "Wayne", 
    }
    res.writeHead(200,{"content-Type":"application/json"})
    res.end(JSON.stringify(superHero));
})
// we also need to inform our server to listen to any incoming requests

server.listen(3000,()=>{
    console.log("server running on port 3000")
})