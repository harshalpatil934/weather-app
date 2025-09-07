import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 40.77,
        humidity: 53,
        max: 34.55,
        min: 34.55,
        temp: 34.55,
        weather: "light rain"
    })

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    } 

    return(
        <div style={{textAlign:"center"}}>
            <h1>weather app</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>


        </div>
    )
}