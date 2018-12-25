const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const dbConfig = require('./configs/dbConfig')

const contactRouter = require('./routes/contact')

mongoose.connect(dbConfig.url,{useNewUrlParser:true})
    .then(()=> console.log("MongoDB connected. "))
    .catch(error => console.log(error));


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3001

app.use(express.static(__dirname + '/client/' +'build'))


app.use('/api/v1/contact', contactRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , '/client/build', 'index.html'))
})


app.listen(process.env.PORT || 3011)
