import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ForecastHeader.css'

export function ForecastHeader(){
    const navigate = useNavigate();
    const {cityName} = useParams();

    return(
        <>
            <div className='ForecastHeader'>
                <p
                    onClick={()=>{
                        if(!cityName){
                            return(alert('enter city name'))
                        }
                        navigate(`/today/${cityName}`);
                    }}                                         
                 >TODAY</p>
                <p
                    onClick={()=>{
                        if(!cityName){
                            return(alert('enter city name'))
                        }
                        navigate(`/hourly/${cityName}`);
                    }}
                >HOURLY</p>
                <p
                    onClick={()=>{
                        if(!cityName){
                            return(alert('enter city name'))
                        }
                        navigate(`/daily/${cityName}`);
                    }}
                >DAILY</p>
                <p
                    onClick={()=>{
                        alert('page is under process')
                    }}
                >MONTHLY</p>
                <p 
                     onClick={()=>{
                        if(!cityName){
                            return(alert('enter city name'))
                        }
                        navigate(`/air/${cityName}`);
                    }}
                >AIR QUALITY</p>
            </div>
        </>
    )
}