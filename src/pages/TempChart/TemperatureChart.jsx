import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

export function TemperatureChart({ data }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="Temperature" stroke="green" dot={{ fill: 'red' }} />
          <Line type="monotone" dataKey="Feels_like" stroke="brown" dot={{ fill: 'red' }} />
          <Line type="monotone" dataKey="Temperature_max" stroke="red" dot={{ fill: 'red' }} />
          <Line type="monotone" dataKey="Temperature_min" stroke="blue" dot={{ fill: 'red' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
