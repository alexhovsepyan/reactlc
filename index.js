const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.use('/',express.static(__dirname + '/client/' +'build'))

app.listen(process.env.PORT || 3001)