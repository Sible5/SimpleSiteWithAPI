/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict"


const url = "https://api.openweathermap.org/data/2.5/weather?q=Ankeny&appid=a1484c058a6d7d94fc3699dafaa02c92";

$.ajax ({
    url: url, 
    success: function (result){
        //console.log(result);
        //console.log(result.name);
        
        $("#location").text(result.name);
        
        $("#sky").text(result.weather[0].description);

        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let F2 = Math.round(result.main.feels_like * (9/5) - 459.67);
        $("#temperature").text(F);
        $("#feelsLike").text(F2);
        let windSpeed = Math.round(result.wind.speed / .44704);

        $("#wind").text(windSpeed);
    }
})

