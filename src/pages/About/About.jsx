import { useNavigate} from 'react-router-dom';
import './About.css';

export function About() {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <h1>About the Weather App</h1>
      <p>
        This weather app provides real-time weather updates and forecasts for popular cities in India, 
        including Andhra Pradesh and Telangana. It offers features like current weather, 5-day forecasts, 
        air quality index, and more.
      </p>

      <h2>My Role</h2>
      <p>
        I'm Rohit, a Front-End Developer and a student at IIT Guwahati. I designed and built this app to improve 
        my skills in React.js, API integration, and responsive UI design. This project also reflects my 
        interest in building practical tools that are useful for daily life.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Search and view current weather of any city</li>
        <li>5-day forecast and climate data</li>
        <li>Air quality and pollution information</li>
        <li>Pre-built links to major cities for quick access</li>
        <li>Responsive layout optimized for all screen sizes</li>
      </ul>

      <h2>Contact</h2>
      <p><strong>GitHub:</strong> <a href="https://github.com/RohitN22595" target="_blank" rel="noopener noreferrer">github.com/RohitN22595</a></p>
      <p><strong>Email:</strong> nrss4244@gmail.com</p>
      <button onClick={()=>{navigate('/')}}>Go Home</button>
    </div>
  );
}
