const mongodb = require('mongodb')
const async = require('async')

let mainData = require('./data/m3-customer-data.json')
let addressData = require('./data/m3-customer-address-data.json')

const url = 'mongodb://localhost:27017/edx-course-db'
let tasks = []

const numberOfQueries = parseInt(process.argv[2], 10) || 1000 

mongodb.MongoClient.connect(url, (error, db) => {

    // If no connection, quit
    if (error) return process.exit(1)
    
    db.collection('customers').drop(function(err, delOK) {
    if (err) console.error("Error deleting collection customers")
    if (delOK) {
        console.log("Collection deleted");
        mainData.forEach((customer, index, list) => {
            mainData[index] = Object.assign(customer, addressData[index])
    
            // If a multiple of....
            if (index % numberOfQueries == 0) {
                const start = index
                const end = (start+numberOfQueries > mainData.length) ? mainData.length -1 : start + numberOfQueries
                // Add to the list of tasks
                tasks.push((done) => {
                    console.log(`Adding ${start} - ${end} of ${mainData.length}`)
                    db.collection('customers').insert(mainData.slice(start, end), (error, results) => {
                        done(error, results)
                    })
                })
            }
    
        })
    
        // Now execute the tasks
        console.log(`Number of tasks to execute: ${tasks.length}` )
        const startTime = Date.now()
        
        async.parallel(tasks, (error, results) => {
            if (error) console.error(error)
            const endTime = Date.now()
            console.log(`Done in: ${endTime-startTime}`)
            db.close()
        })
    } 
  });
 