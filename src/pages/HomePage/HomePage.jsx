import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

export function HomePage(){
    const [cityName, setCityName] = useState("");
    const navigate = useNavigate();

    const saveCityName = (event) =>{
        setCityName(event.target.value);
    }

    return(
        <>
            <div>
                <input 
                    onChange={saveCityName} 
                    onKeyDown={(event)=>{
                        if(event.key === 'Enter'){
                            if(!cityName){
                            return(console.log('city name needed'));
                            }
                            console.log(cityName);
                            navigate(`/weather/${cityName}`)
                        }
                    }}
                    value={cityName}
                    type='text'
                />

                <button onClick={()=>{
                    if(!cityName){
                        return(console.log('city name needed'));
                    }
                    navigate(`/weather/${cityName}`)
                }}>weather</button>

                <button onClick={()=>{
                    if(!cityName){
                        return(console.log('city name needed'));
                    }
                    navigate(`/forecast/${cityName}`)
                }}>5 days forecast</button>

                <button onClick={()=>{
                    navigate('/about')
                }}>About</button>
            </div>

            
        </>
    )
}