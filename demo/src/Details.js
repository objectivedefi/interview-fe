import { Link, useParams } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ComposedChart, Area } from 'recharts';
import priceData from './mockPriceData.json'

const Details = () => {
const { id } = useParams();

  const prices = priceData.prices.map(d => ({
    ...d,
    time: new Date(d.timestamp).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }));

  return (
    <div>
      <Link to="/">← Back to table</Link>
      <h2>Token: {id}</h2>
      <ComposedChart width={800} height={300} data={prices} margin={{top: 25, right: 30, left: 20, bottom: 5}}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis dataKey="price"/>
        <CartesianGrid vertical={false} stroke="#DDD" />
        
        <Line type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
          dataKey="price"
          stroke="#006991"
          dot={false}
          legendType="none"
        />
        <Area type="monotone" dataKey="price" stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
      </ComposedChart>
    </div>
  );
};

export default Details;