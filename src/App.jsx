import { HomePage } from './pages/HomePage/HomePage'
import { WeatherPage } from './pages/WeatherPage/WeatherPage'
import { Forecast } from './pages/Forecast/Forecast'
import { About } from './pages/About/About'
import { Routes, Route } from 'react-router'
import './App.css'


function App() {
  return (
    <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/weather/:cityName' element={<WeatherPage />}/>
        <Route path='/forecast/:cityName' element={<Forecast />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default App
