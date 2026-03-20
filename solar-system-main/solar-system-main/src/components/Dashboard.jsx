import axios from "axios";
import {useEffect,useState} from "react";
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,Legend,ResponsiveContainer,ComposedChart} from "recharts";

function Dashboard(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await axios.get("http://localhost:5000/api/weather");
            setData(res.data.data || []);
        } catch(err){
            console.error("Error:", err);
            setError(`Failed to fetch data: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const CustomStar = (props) => {
        const {cx, cy} = props;
        return (
            <text x={cx} y={cy - 8} textAnchor="middle" fontSize="18">★</text>
        );
    };

    const graphStyle = {
        marginBottom: "40px",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    };

    const titleStyle = {
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "15px",
        color: "#333"
    };

    return(
        <div style={{padding:"20px",backgroundColor:"#fff",minHeight:"100vh"}}>
            <h1 style={{marginBottom:"30px",color:"#333"}}>Weather Forecast Dashboard</h1>
            
            {loading && <p>Loading...</p>}
            {error && <div style={{color:"red",backgroundColor:"#ffe6e6",padding:"10px",borderRadius:"4px"}}>{error}</div>}
            {!loading && !error && data.length === 0 && <div style={{color:"orange",backgroundColor:"#fff3cd",padding:"10px",borderRadius:"4px"}}>No data. Visit http://localhost:5000/api/insert to seed database.</div>}
            
            {!loading && !error && data.length > 0 && (
                <div>
                    {/* Main Weather Overview - Top Graph */}
                    <div style={graphStyle}>
                        <div style={titleStyle}>Turbines Overview | Overview | Site Map | Weather Forecast | Wind Speed | Production | Production Index | Wind Rose | Performance Dashboard | Data Integrity</div>
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart data={data} margin={{top:20,right:30,left:0,bottom:20}}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" angle={-45} textAnchor="end" height={80} />
                                <YAxis yAxisId="left" label={{value:"Temperature (°C)",angle:-90,position:"insideLeft"}} />
                                <YAxis yAxisId="right" orientation="right" label={{value:"Pressure (hPa) / Speed",angle:90,position:"insideRight"}} />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#ff7300" name="Air Temperature" dot={<CustomStar />} strokeWidth={2} />
                                <Line yAxisId="right" type="monotone" dataKey="airPressure" stroke="#0066cc" name="Barometer Pressure" strokeWidth={2} />
                                <Line yAxisId="right" type="monotone" dataKey="windSpeed" stroke="#cc00cc" name="Wind Speed" strokeWidth={2} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Two Columns Layout */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
                        {/* Expected Temperature and Rain */}
                        <div style={graphStyle}>
                            <div style={titleStyle}>Expected Temperature & Rain</div>
                            <ResponsiveContainer width="100%" height={250}>
                                <ComposedChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                                    <YAxis yAxisId="left" label={{value:"Temp (°C)",angle:-90,position:"insideLeft"}} />
                                    <YAxis yAxisId="right" orientation="right" label={{value:"Rain (mm)",angle:90,position:"insideRight"}} />
                                    <Tooltip />
                                    <Legend />
                                    <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#333333" name="Expected Temperature" strokeWidth={2} />
                                    <Bar yAxisId="right" dataKey="rain" fill="#87ceeb" name="Expected Rain" />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Expected Wind Speed */}
                        <div style={graphStyle}>
                            <div style={titleStyle}>Expected Wind Speed</div>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                                    <YAxis label={{value:"m/s",angle:-90,position:"insideLeft"}} />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="windSpeed" stroke="#008000" name="Expected Wind Speed" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Two Columns Layout - Bottom */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginTop:"20px"}}>
                        {/* Expected Wind Direction */}
                        <div style={graphStyle}>
                            <div style={titleStyle}>Expected Wind Direction</div>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                                    <YAxis label={{value:"Degrees",angle:-90,position:"insideLeft"}} domain={[0,360]} />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="windDirection" stroke="#0066cc" name="Expected Wind Direction" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Expected Air Pressure */}
                        <div style={graphStyle}>
                            <div style={titleStyle}>Expected Air Pressure</div>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                                    <YAxis label={{value:"hPa",angle:-90,position:"insideLeft"}} />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="airPressure" stroke="#ff6600" name="Expected Air Pressure" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Dashboard;