// Other modules
//Web-Server
const express = require('express')
//Module request and return promise
const bodyParser = require('body-parser')
// My modules
// Return wheater city
const weatherRequest = require('./requests/weather.request')
//Init web-server
const app = express()
//Listen port web-server
app.listen(3000)
//Init index.ejs from html code
app.set('view engine', 'ejs')
//Init publick static directory from init css styles index.ejs
app.use(express.static('public'))
//Init requst from other modules body-parser
app.use(bodyParser.urlencoded({extended: true}))

//Route
//Get requset from my root direcotry web-server
app.get('/', async (req, res) => {
res.render('index', {weather: null, error: null})
})

//Post request from my root directory with form
app.post('/' , async (req, res) => {
    const { city } = req.body
    const { weather, error } = await weatherRequest(city)
    res.render('index', {weather, error})
})

