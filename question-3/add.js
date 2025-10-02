const fs = require("fs")
const path = require("path")

const logsDirectory = path.join(process.cwd(), "Logs")

if (!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory)
    console.log("Logs directory created.")
}

process.chdir(logsDirectory)

for (let i = 0; i < 10; i++){
    const fileName = "log"+i+".txt"
    fs.writeFileSync(fileName, "File number " + i)
    console.log(fileName)
}
   