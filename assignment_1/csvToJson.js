const fs = require('fs')
const path = require('path')
const csvConvert = require('csvtojson')

if (process.argv.length <= 3) {
    console.log("Usage: node csvToJson.js [csv-file] [json file]")
    process.exit(-1)
}

let csvFile = path.resolve(process.argv[2])
let jsonFile =  path.resolve(process.argv[3])

// Absolute path or relative path


let jsonObjects = []

csvConvert().fromFile(csvFile)
            .on('json',(jsonObj)=>{
                
                jsonObjects.push(jsonObj)
            })            
            .on('done', (error) => {
         

                let jsonString  = JSON.stringify(jsonObjects, null, 2)

                fs.writeFile(jsonFile, jsonString, (error) => {
                    if (error) {
                        return console.log(error)
                    }
                    console.log("File was saved")
                })
                console.log("Converion done")
            })

