import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export function Forecast(){
    const [days, setDays] = useState('');
    const {cityName} = useParams();
    const navigate = useNavigate();

    const loadforecast = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${days}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        console.log(response.data);
    }

    const savedays = (event) => {
        setDays(event.target.value);
    }

    return(
        <>
          <input 
            placeholder='how many days'
            onChange={savedays}
            onKeyDown={(event)=>{
                if(event.key === 'Enter'){
                    loadforecast();
                    setDays('');
                }
            }}
            value={days}
          /> 
          
          <button 
            onClick={
                ()=>{
                    console.log(days);
                    loadforecast();
                    setDays('');
                }
            }>get</button> 

            <button onClick={()=>{
                if(!cityName){
                    return(console.log('city name needed'));
                }
                navigate(`/weather/${cityName}`)
            }}>weather</button>

            <button onClick={()=>{
                navigate('/');
            }}>Home</button>
        </>
    )
}