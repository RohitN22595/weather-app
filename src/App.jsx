import { HomePage } from './pages/HomePage/HomePage'
import { Daily } from './pages/Daily/Daily'
import { Today } from './pages/Today/Today'
import { Hourly } from './pages/Hourly/Hourly'
import { Air } from './pages/Air-Pollution/Air'
import { About } from './pages/About/About'
import { Routes, Route } from 'react-router'
import './App.css'


function App() {
  return (
    <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/today/:cityName' element={<Today />}/>
        <Route path='/hourly/:cityName' element={<Hourly />}/>
        <Route path='/daily/:cityName' element={<Daily />}/>
        <Route path='/air/:cityName' element={<Air />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default App
