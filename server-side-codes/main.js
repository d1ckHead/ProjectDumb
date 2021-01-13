const request = require('postman-request')

request('http://api.weatherapi.com/v1/current.json?key=7d03bd8aad2249299b6113133211301&q=kohat',(error,response,body)=>{
    if(error){
        return console.log('Error: ',error)
    }
    result = JSON.parse(response.body)
    console.log(result.location.region)
})