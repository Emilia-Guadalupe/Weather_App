import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';

function Forecast(){

    const [responseObj, setResponseObj] = useState({});

    function getForecast(){
        //Weather data fetch function will go here
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	"method": "GET",
	"headers": {
	"x-rapidapi-key": "ab1adc361fmsha9a75b5caa148fep15801cjsnd4d0717bf4ca",
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
    setResponseObj(response);
})
.catch(err => {
	console.error(err);
});

    }

    return(
        <>
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
        <div>
            <Conditions responseObj={responseObj} />
        </div>
        </>
    )
}

export default Forecast;