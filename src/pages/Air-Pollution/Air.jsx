import { Header } from "../../components/Header/Header";
import { ForecastHeader } from "../../components/ForecastType/ForecastHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Air(){
    const {cityName} = useParams();
    const [Tdata, TsetData] = useState({});
    const [data, setData] = useState('');

    useEffect(()=>{
        loadData();
    },[])

     useEffect(()=>{
        if(Tdata.coord){
            loadDialyData();
        }
    },[Tdata])

    const loadData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
        console.log('weather:');
        console.log(response.data);
        TsetData(response.data);
    }

    const loadDialyData = async () => {
        const response  = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${Tdata.coord.lat}&lon=${Tdata.coord.lon}&appid=9512dfa32acada475c46982a00aa80de&units=metric`);
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