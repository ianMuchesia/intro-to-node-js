/* const fs = require("node:fs");
console.log("first")
const fileContents = fs.readFileSync("./file.txt","utf-8")//synchronous way of reading files

console.log(fileContents)
console.log("second")
fs.readFile("./file.txt","utf-8", (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
console.log("third")

fs.writeFileSync("./greet.txt", "Hello world")

//this overwrite written content
fs.writeFile("./greet.txt"," Hello worlds",{flag:"a"},  (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("done!")
    }
}); */

const fs = require("node:fs/promises")
console.log("first")

const fetchData = async()=>{
    const response =await fs.readFile("file.txt", "utf-8")
  
    console.log(response)
}
fetchData()
/* fs.readFile("file.txt", "utf-8")
 .then((data)=>console.log(data))
 .catch((error)=>console.log(error))
 */
 console.log("second")