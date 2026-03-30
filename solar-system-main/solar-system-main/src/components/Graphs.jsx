
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import FooterIcon from '../footer_icon';
function Graphs({data}){
    return(
      <div className="graphs-page">
        <LineChart width={900} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300"/>
          <Line type="monotone" dataKey="windSpeed" stroke="#387908"/>
        </LineChart>
        <FooterIcon />
      </div>
    );
}
export default Graphs;
