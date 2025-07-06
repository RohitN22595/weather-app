import { Header } from '../../components/Header/Header';
import { ForecastHeader } from '../../components/ForecastType/ForecastHeader';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css'
import { Link } from 'react-router-dom';

export function HomePage(){
    const [cityName, setCityName] = useState("");
    const [data, setData] = useState({});

    const navigate = useNavigate();

    const popularIndianCities = ["Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad","Jaipur","Lucknow"];
    const apCities = ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kakinada", "Rajahmundry", "Nellore", "Anantapur", "Kadapa", "Ongole", "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Siddipet", "Adilabad", "Nalgonda"];
    
    useEffect(()=>{

    },[])

    useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        loadData(lat, lon)
        console.log(lat, lon)
    }, (error) => {
        console.error("Location access denied or error", error);
    });

    const loadData = async (lat, lon)=>{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        setData(response.data);
        console.log(response.data);
    }


}, []);

    return(
        <>
            <Header cityName={cityName} setCityName={setCityName}/>
            <ForecastHeader cityName={cityName}/>
            <div className='containerWrap'>
                <div className="maincontainer">    
                    <div className='container'>
                        <div>
                            <p className='title'>Real-time weather updates, anytime, anywhere.</p>
                            { data && data.main &&
                                <div className='currentcity' onClick={()=>{navigate('/today/Vetapalem')}}>
                                    <div className='details'>
                                        <p>{data.name}, {data.sys.country}</p>
                                        <div className='weatherDetails'>
                                            <p>{data.main.temp}</p>
                                            <div className='iconcontainer'><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/></div>
                                        </div>
                                        <p>{data.weather[0].description}</p>
                                    </div>
                                    
                                </div>
                            }
                        </div>
                        <div className='popularAp'>
                            <div className='apScrollContent'>
                                {
                                    [...apCities].map((city)=>{
                                        return(<Link to={`/today/${city}`} key={city}>{city}</Link>);
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="popularIndia">
                        <div className='row'>
                            {
                                    popularIndianCities.map((city)=>{
                                        return(<Link to={`/today/${city}`} key={city}><div style={{backgroundImage: `url('/${city}.png')`}} className='cityImageContainer'><p>{city}</p></div></Link>);
                                    })
                            }  
                        </div>
                    </div>

                    <footer className="footer">
                        <p>
                            Developed by <strong>Rohit</strong> | 
                            <a href="https://github.com/RohitN22595" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                            <a href="https://portfolio-ebon-chi-82.vercel.app/" target="_blank" rel="noopener noreferrer"> Portfolio</a> |
                            9490761562
                        </p>
                    </footer>
                </div>
            </div>
        </>
    )
}