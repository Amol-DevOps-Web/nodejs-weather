const request = require ('request');
//const forecast = require ('./util/forecast')
//Geocoding 
//Address-> lat/long ->Weather
const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_key=pk.eyJ1IjoiYW1vbG1hcGJveGFjYyIsImEiOiJja3JkMW1rbjA1OHJ2MnBvNmRhenM0d2YwIn0.ZRcisFjcMJa250sucKoApA&limit=1';
request({url:url1,json:true},(error, response) => {
     console.log("Latitude "+response.body)
     console.log("Logitude "+response.body)
})
// forecast('17.96',-73.2633, (err, data)=>{
//    console.log("Error ",err)
//    console.log("Data ",data)
// });