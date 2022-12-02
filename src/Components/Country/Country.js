import React from "react";
import './Country.css'
const Country =(props)=>{
    return(
        <div className="country">
                <img src={` http://www.geognos.com/api/en/countries/flag/${props.stats.CountryCode}.png`}></img>
                <div className="describe">
                    <p>{`Active : ${props.stats.Active}`}</p>
                    <p>{`Confirmed : ${props.stats.Confirmed}`}</p>
                    <p>{`Deaths : ${props.stats.Deaths}`}</p>
                    <p>{`Recovered : ${props.stats.Recovered}`}</p>
                </div>
                <h5>{props.stats.Country}</h5>
        </div>
    )
}

export default Country;