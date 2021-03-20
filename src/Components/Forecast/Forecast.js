import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';
import './forecastStyles.css';

function Forecast(){

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('imperial');
    const [responseObj, setResponseObj] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY; 

    function getForecast(e){
        e.preventDefault();

        if(city.length === 0) {
            return setError(true);
        }

        //Clear state in preparation for new data

        setError(false);
        setResponseObj({});

        setLoading(true);

        const uriEncodedCity = encodeURIComponent(city);

        //Weather data fetch function will go here
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
	"x-rapidapi-key": API_KEY,
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {

        if(response.cod !== 200){
            throw new Error();
        }
    setResponseObj(response);
    setLoading(false);
})
.catch(err => {
    setError(true);
    setLoading(true);
	console.error(err);
});

    }

    return(
        <>
        <div>
            <h2>Find Current Weather Conditions</h2>
        </div>
        <div>
        <form onSubmit={getForecast}>
                <input  className="textInput" type="text" placeholder="Enter City" maxLength="50" value={city} onChange={(e) => setCity(e.target.value)} />
                <label className="radio">
                    <input type="radio" name="units" checked={unit === "imperial"} value="imperial" onChange={(e) => setUnit(e.target.value)} />
                    Fahrenheit
                </label>
                <label className="radio">
                    <input type="radio" name="units" checked={unit === "metric"} value="metric" onChange={(e) => setUnit(e.target.value)} />
                    Celcius
                </label>
                <button  className="button" type="submit">Get Forecast</button>
            </form>
        </div>
        <div>
            <Conditions 
            responseObj={responseObj}
            error={error}
            loading={loading}
            />
        </div>
        </>
    )
}

export default Forecast;