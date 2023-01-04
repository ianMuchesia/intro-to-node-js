const fs = require("node:fs")

const readableStream = fs.createReadStream("./index.txt",{
    encoding: "utf-8",
    highWaterMark:2,

})

const writeableStream = fs.createWriteStream("./index2.txt")

readableStream.on("data", (chunk)=>{
    console.log(chunk)
    writeableStream.write(chunk)
});