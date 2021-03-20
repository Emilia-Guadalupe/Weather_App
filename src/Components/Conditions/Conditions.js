import React from 'react';
import './conditionsStyles.css';

function Conditions(props){
    return(
        <>
            <div className="wrapper">
                {props.error && <small className="small">Please enter a valid city.</small>}
                {props.loading && <div className="loader">Loading...</div>}
                {props.responseObj.cod === 200 ? 
                <div>
                    <p>{props.responseObj.name}</p>
                    <p>It's currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div> : null} 
            </div>
        </>
    )
}

export default Conditions;