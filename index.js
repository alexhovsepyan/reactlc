const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3001


// app.use("/",express.static(__dirname + '/client/' +'build'))
// app.use("/about",express.static(__dirname + '/client/' +'build'))
// app.use("/skills",express.static(__dirname + '/client/' +'build'))
// app.use("/mywork",express.static(__dirname + '/client/' +'build'))
// app.use("/contact",express.static(__dirname + '/client/' +'build'))

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})



app.listen(port, (error) => {
    if(error) throw error
    console.log(`Server run on ${port}`)
})