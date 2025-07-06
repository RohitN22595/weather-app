import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios'

export function WeatherPage(){
    const {cityName} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        loadData();
    },[])

    const [data, setData] = useState({});

    const loadData = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
      console.log(response.data);
      setData(response.data);
    }

    return(
        <>
            <div>
                {
                    data && data.main && data.sys && data.weather && (
                        <>
                            <p>City Name = {data.name}</p>
                            <p>Country = {data.sys.country}</p>
                            <p>Temp = {data.main.temp}°C</p>
                            <p>Feels Like = {data.main.feels_like}°C</p>
                            <p>Weather Condition = {data.weather[0].main}</p>
                            <p>Wind Speed = {data.wind.speed}</p>
                            <p>Wind Direction = {data.wind.deg}</p>
                            <p>Humidity = {data.main.humidity}%</p>
                            <p>Sun Rise = {dayjs.unix(data.sys.sunrise).format("hh:mm A")}</p>
                            <p>Sun Set = {dayjs.unix(data.sys.sunset).format("hh:mm A")}</p>
                            <p>Latitude = {data.coord.lat}</p>
                            <p>Longitude = {data.coord.lon}</p>
                            <p>Min Temp = {data.main.temp_min}</p>
                            <p>Max Temp = {data.main.temp_max}</p>
                            <p>Pressure = {data.main.pressure}</p>
                            <p>Sea Level = {data.main.sea_level}</p>
                            <p>Gust Speed = {data.wind.gust}</p>
                            <p> Visibility = {(data.visibility)/1000} Km</p>
                        </>
                    )
                }

                <button onClick={()=>{
                    if(!cityName){
                        return(console.log('city name needed'));
                    }
                    navigate(`/forecast/${cityName}`)
                }}>5 days forecast</button>

                <button onClick={()=>{
                    navigate('/');
                }}>Home</button>
            </div>
        </>
    )
}