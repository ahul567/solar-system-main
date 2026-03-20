
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
function Graphs({data}){
    return(
     <LineChart width={900} height = {300} data = {data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip />
    <Line type="monotone" dataKey="temperature" stroke="#ff7300"/>
    <Line type="monotone" dataKey="windSpeed" stroke="#387908"/>

     </LineChart>
    );
}
export default Graphs;
