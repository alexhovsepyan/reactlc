const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static(__dirname + '/client/' +'build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , '/client/build', 'index.html'))
})

app.listen(process.env.PORT || 3011)