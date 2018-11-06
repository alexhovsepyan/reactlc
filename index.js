const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use('/',express.static(__dirname + '/client/' +'build'))

app.listen(process.env.PORT || 3001)