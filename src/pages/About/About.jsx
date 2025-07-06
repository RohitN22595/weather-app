import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🌤️ About This Weather App</h1>
      
      <p>
        This weather app allows users to check current weather conditions of any city
        and view a 5-day forecast using data from the OpenWeatherMap API.
      </p>

      <h2>🛠️ Technologies Used</h2>
      <ul>
        <li>React JS</li>
        <li>Axios (for API calls)</li>
        <li>React Router (for navigation)</li>
        <li>DayJS (for formatting time)</li>
        <li>OpenWeatherMap API</li>
      </ul>

      <h2>👨‍💻 About Me</h2>
      <p>
        I'm Rohit, a passionate front-end developer currently studying at IIT Guwahati.
        I love building real-world web apps and constantly improving my skills.
        This weather app is part of my portfolio showcasing React projects.
      </p>

      <h2>📞 Contact Me</h2>
      <p>
        📧 Email: <a href="nrss4244@gmail.com">nrss4244@gmail.com</a><br/>
        📱 Phone: <a href="tel:+919490761562">+91 9490761562</a><br/>
        💼 GitHub: <a href="https://github.com/yourgithub" target="_blank">github.com/yourgithub</a><br/>
        🔗 LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank">linkedin.com/in/yourlinkedin</a>
      </p>

      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
        ⬅️ Back to Home
      </button>
    </div>
  );
}
