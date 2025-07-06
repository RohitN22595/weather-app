import { useNavigate } from 'react-router-dom';
import './Header.css'


export function Header({cityName, setCityName, confirmedCity}){
    const navigate = useNavigate();
    
    const saveCityName = (event) =>{
        setCityName(event.target.value);
    }


    return(
        <>
            <div className='header'>
                <div className='imageContainer' onClick={()=>{
                        navigate('/');
                    }}><img className='image' src='/logo.png'/></div>
                <div className='cityName'><p>{confirmedCity}</p></div>
                <div className='searchBar'>
                    <div>
                        <input 
                            className='searchInput'
                            onChange={saveCityName} 
                            onKeyDown={(event)=>{
                                if(event.key === 'Enter'){
                                    if(!cityName){
                                    return(console.log('city name needed'));
                                    }
                                    console.log(cityName);
                                    navigate(`/today/${cityName}`);
                                }
                            }}
                            value={cityName}
                            type='text'
                        />

                        <button className='searchButton' onClick={()=>{
                            if(!cityName){
                                return(console.log('city name needed'));
                            }
                            navigate(`/today/${cityName}`);
                        }}><i className="fa-solid fa-magnifying-glass"></i></button>  
                    </div>

                    <button className='homeButton' onClick={()=>{
                        navigate('/');
                        localStorage.clear('townname');
                    }}><i className="fa-solid fa-house"></i>Home</button>               
                </div>

                <button className='aboutButton' onClick={()=>{
                    navigate('/about')
                }}><i className="fa-regular fa-address-card"></i>About</button>
            </div>
        </>
    )
}