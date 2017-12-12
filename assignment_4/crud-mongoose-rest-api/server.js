const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/bank', {useMongoClient: true})

let Account = mongoose.model('Account', {
    name: String,
    balance: Number
})


let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())



app.post('/accounts', (req, res) => {
            
    let newAccount  = new Account(req.body);
    
    newAccount.save((err, results) => {
        if (err) {
            console.error(err)
            process.exit(1)
        } else {
            console.log('Saved: ', results)
            res.status(201).send(results)
        }
    } )
})

app.get('/accounts', (req, res) => {
    
    Account.find({}, (error, accounts) => {
        res.status(200).json(accounts)
    })

})

app.put('/accounts/:id', (req, res) => {
    
    Account.findOne({_id: req.params.id},  (error, account) => {
        account.balance = req.body.balance
        account.save(console.log)
        res.status(200).send(account.toJSON())
    })
})


app.delete('/accounts/:id', (req, res) => {
    
    Account.findOne({_id: req.params.id},  (error, account) => {
    account.remove()
    res.status(204).send()
    })
})

app.use(errorhandler())
app.listen(3000)   