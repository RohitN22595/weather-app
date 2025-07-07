import { Header } from "../../components/Header/Header";
import { ForecastHeader } from "../../components/ForecastType/ForecastHeader";
import { LocationMap } from "../Location/Location";
import { TemperatureChart } from "../TempChart/TemperatureChart";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

export function Today(){
    const [data, setData] = useState({});
    const [todayArray, setTodayArray] = useState([]);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [percent, setPercent] = useState(null);
    const {cityName} = useParams();
    const today = dayjs().format('YYYY-MM-DD');

    useEffect(()=>{
        loadData();
        loadhourlyData();
        console.log(today);
    },[])
    

    useEffect(()=>{
       if(data.sys?.sunrise && data.sys?.sunset){
            const sunrise = dayjs.unix(data.sys.sunrise); // e.g. 6:00 AM
            const sunset = dayjs.unix(data.sys.sunset);   // e.g. 6:00 PM
            const now = dayjs();
            const totalDaylightMinutes = sunset.diff(sunrise, 'minute');
            const minutesSinceSunrise = now.diff(sunrise, 'minute');
            const percent = Math.min(100, Math.max(0, (minutesSinceSunrise / totalDaylightMinutes) * 100));

            setSunrise(sunrise);
            setSunset(sunset);
            setPercent(percent);
       }     
    },[data])

    useEffect(()=>{
        console.log('todayarray',todayArray);
        console.log(today);
    },[todayArray])


    const loadData = async () => {
         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
            console.log('today:', response.data);
            setData(response.data);    
    }

    const loadhourlyData = async () => {
        const response  = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        console.log('hourly:', response.data);

        if( response.data && response.data.list){
           const array = response.data.list.filter((item)=>{
                return item.dt_txt.split(" ")[0] === today;
           });
           setTodayArray(array);
        }
    }

    return(
        <>
            <Header confirmedCity={data?.name}/>
            <ForecastHeader />
            <div className="mainToday">
                <div className="weather1">
                    {
                        data && data.main && data.sys && data.weather && (
                        <>  
                            <div className="current1">
                                <p>CURRENT WEATHER</p>
                                <p>{today}</p>
                            </div>
                            <div className="line1"></div>
                            <div className="currentcontainer">
                                <div className="current2">
                                    <div className="main1">
                                        <div className="logotype"><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/></div>
                                        <div>
                                            <p className="ctemp">{data.main.temp}°C</p>
                                            <p className="cfeel">RealFeel  {data.main.feels_like}°C</p>
                                        </div>
                                    </div>
                                    <p className="wtype">{data.weather[0].main}</p>
                                </div>
                                <div className="current3">
                                    <p><p className="t1"> Feels Like </p>  <p className="t2">{data.main.feels_like}°C</p></p>
                                        <div className="line2"></div>
                                    <p><p className="t1">Wind Speed</p> <p className="t2">{data.wind.speed}</p></p>
                                        <div className="line2"></div>
                                    <p><p className="t1">Wind Direction</p>  <p className="t2">{data.wind.deg}°</p></p>
                                        <div className="line2"></div>
                                    {data.wind.gust && <p><p className="t1">Gust Speed</p>  <p className="t2">{data.wind.gust}</p></p>}  
                                        <div className="line2"></div>              
                                    <p><p className="t1">Humidity</p>  <p className="t2">{data.main.humidity}%</p></p>
                                </div>  
                            </div>     
                        </>
                        )
                    }
                </div>

                {data.coord && <LocationMap lat = {data.coord.lat} lon = {data.coord.lon}/>}

                <div className="weather3">
                    <div className="sweather3">
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px" }}>
                            <span>Sunrise <br/> {sunrise?.format("HH:mm")}</span>
                            <span>Sunset <br/> {sunset?.format("HH:mm")}</span>
                        </div>

                        <div style={{
                            position: "relative",
                            height: "6px",
                            background: "#ccc",
                            borderRadius: "10px",
                            marginTop: "10px",
                        }}>
                            <div style={{
                            position: "absolute",
                            top: "-8px",
                            left: `${percent}%`,
                            transform: "translateX(-50%)",
                            fontSize: "18px"
                            }}>🔘</div>

                            <div style={{
                            height: "6px",
                            width: `${percent}%`,
                            background: "linear-gradient(to right, #FFA500, #FF4500)",
                            borderRadius: "10px"
                            }} />
                        </div>
                    </div>
                </div>

                <div className="weather4">
                    <div className="mweather4">
                        {todayArray.length > 0 && (
                            <TemperatureChart data={todayArray.map((item) => ({
                                time: item.dt_txt.split(" ")[1].slice(0, 5),
                                Temperature: item.main.temp,
                                Feels_like: item.main.feels_like,
                                Temperature_max: item.main.temp_max,
                                Temperature_min: item.main.temp_min,
                            }))} />
                        )}
                    </div>
                </div>

            

                {/* <div>
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
                                {data.main.sea_level && <p>Sea Level = {data.main.sea_level}</p>}
                                {data.wind.gust && <p>Gust Speed = {data.wind.gust}</p>}
                                <p> Visibility = {(data.visibility)/1000} Km</p>
                            </>
                        )
                    }
                </div>  */}
            </div>
        </>
    )
}