const fs = require('fs')
const path = require('path')
const csvConvert = require('csvtojson')
const validateCSV = require('detect-csv')

if (process.argv.length <= 3) {
    console.log("Usage: node csvToJson.js [csv-file] [json file]")
    process.exit(-1)
}

let csvFile = path.resolve(process.argv[2])
let jsonFile =  path.resolve(process.argv[3])
let isCSV = false

fs.readFile(csvFile,'utf8', function(err,data) {
    if (err) {
        throw err;
    }
    //Do something with data
    let isCSV = validateCSV(data)
    if (isCSV) {
        let jsonObjects = []
        
        csvConvert().fromFile(csvFile)
                    .on('json',(jsonObj)=>{
                        
                        jsonObjects.push(jsonObj)
                    })            
                    .on('done', (error) => {
                        
                        if (error) {
                            return console.error(error);
                        }
        
                        let jsonString  = JSON.stringify(jsonObjects, null, 2)
        
                        fs.writeFile(jsonFile, jsonString, (error) => {
                            if (error) {
                                return console.log(error)
                            }
                            console.log("File was saved")
                        })
                        console.log("Converion done")
                    })
                    
        } else {
            console.log("Please supply a valid CSV file")
        }
        
   
});


