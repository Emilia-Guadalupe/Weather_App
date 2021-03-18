import React from 'react';

function Conditions(props){
    return(
        <div>
            <div>
                {props.responseObj.cod === 200 ? 
                <div>
                    <p>{props.responseObj.name}</p>
                    <p>It's currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div> : null} 
            </div>
        </div>
    )
}

export default Conditions;