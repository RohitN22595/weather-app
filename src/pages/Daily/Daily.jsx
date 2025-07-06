import { Header } from '../../components/Header/Header';
import { ForecastHeader } from '../../components/ForecastType/ForecastHeader';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export function Daily(){
    const [days, setDays] = useState('');
    const {cityName} = useParams();

    const loadforecast = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${days}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        console.log(response.data);
    }

    const savedays = (event) => {
        setDays(event.target.value);
    }

    return(
        <>
            <Header/>
            <ForecastHeader />

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
        </>
    )
}