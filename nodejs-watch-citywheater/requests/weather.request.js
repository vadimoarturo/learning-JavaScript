//Other modules
//Init modules request-promise, from return primose with other request
const rp = require('request-promise')

//Init my global modules
module.exports = async function(city) {

    // Api-KEY from api.openweathermap.org
    const KEY = '17d2567d1dbab1546707a15ae0e0c332'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    // Request options
    const options = { 
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    // Processing requests
    
    // Not error
    try{
    // Await promise request with other options and get data
        const data = await rp(options)
    // Formula kelvin to celsious
        const celsious = (data.main.temp - 32) * 5/9
     // Callback city and celsious
        return {
            weather: `${data.name}: ${celsious.toFixed(0)}`,
            error: null
        }

    } 
  // Error
  catch (error){
        return {
            weather: null,
            error: error.error.message
        }
    }


}
