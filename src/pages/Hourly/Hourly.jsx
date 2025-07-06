import { Header } from "../../components/Header/Header";
import { ForecastHeader } from "../../components/ForecastType/ForecastHeader";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function Hourly(){
    const {cityName} = useParams();
    const [data, setData] = useState('');

    useEffect(()=>{
        loadDialyData();
    },[])

    const loadDialyData = async () => {
        const response  = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        setData(response.data);
        console.log(response.data)
    }



    return(
        <>
            <Header/>
            <ForecastHeader />
        </>
    )
}