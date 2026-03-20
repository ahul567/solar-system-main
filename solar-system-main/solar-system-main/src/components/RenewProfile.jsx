import Circle from './Circle/circle'
import rn_logo from '../assets/Renew_logo.svg'
import user_profile from '../assets/ix_user-profile-filled.svg'
import setting from '../assets/weui_setting-outlined.svg'
import cylinder_graph_1 from '../assets/cylinder-graph_1.svg'
import cylinder_graph_2 from '../assets/cylinder-graph_2.svg'
import State_Overview from './Power_dataset/State_Overview'
const profile_setting = [user_profile,setting]
function RenewProfile() {
  // Graph 1 CSS
  const graph1Style = {
    width: '103.92px',
    height: '240.21px',
    opacity: 1,
    position: 'absolute',
    top: '50px',
    left: '78px',
    transform: 'rotate(0deg)'
  };

  // Graph 2 CSS
  const graph2Style = {
    width: '103.92px',
    height: '146.21px',
    opacity: 1,
    position: 'absolute',
    top: '150px',
    left: '261px',
    transform: 'rotate(0deg)'
  };

  return (
    <div style={{width:"200Vh",height:"200vh"}}>
      {/* Header Section */}
      <div style = {{
        width: 352,
        height: 63,
        opacity: 1,
        marginBottom:"20px",
        marginLeft: 625,
        borderRadius: 50,
        marginTop:"7%",
        borderWidth: 1,
        display:"flex",
        background: "#E8EBEEB2",
        border: "1px solid",
        borderImageSource: "linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 100%)",
        boxShadow: "-3px -3px 7px 0px #FFFFFF inset,3px 3px 7px 0px #8896A394 inset"

      }}>
        <div style={{width:"100%",display:"flex",gap:"5%",marginTop:"1.5%",marginLeft:"3%"}}> 
         <Circle image = {rn_logo}/>
<p style={{
width: 119,
height: 24,
opacity: 1,
marginTop: "5%",
fontFamily: "Urbanist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
fontWeight: 500,
fontStyle: "Medium",
fontSize: 20,
lineHeight: "100%",
color:" #1E7A46"
}}>Renew Profile</p>
     </div> 

       <div style={{width:"25%",height:"25%",display:"flex", marginTop:"6%", marginRight:"4%",gap:"4%"}}>
         {profile_setting.map((item,index)=>(
          <div key ={index}>
           <img src={item} alt="" />
          </div>
         ))}
       </div>
      </div>

      {/* Graphs Section */}
      <div style={{ position: 'relative', width: '380px', height: '420px', marginTop: '10px', marginLeft: '580px' }}>
        {/* Content 1: 1338.2MW */}
        <div style={{
          position: 'absolute',
          width: '93px',
          height: '24px',
          top: '20px',
          left: '83px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000'
        }}>
          1338.2MW
        </div>

        {/* Graph 1 */}
        <div style={graph1Style}>
          <img src={cylinder_graph_1} alt="Graph 1" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Graph 1 Upper Limit */}
        <div style={{
          position: 'absolute',
          width: '23px',
          height: '14px',
          top: '19%',
          left: '66px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#7B7B7B'
        }}>
          4128
        </div>

        {/* Graph 1 Lower Limit */}
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '14px',
          top: '61%',
          left: '81px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#7B7B7B'
        }}>
          0
        </div>

        {/* Content 2: 93.48% */}
        <div style={{
          position: 'absolute',
          width: '62px',
          height: '24px',
          top: '120px',
          left: '282px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000'
        }}>
          93.48%
        </div>

        {/* Graph 2 */}
        <div style={graph2Style}>
          <img src={cylinder_graph_2} alt="Graph 2" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Graph 2 Upper Limit */}
        <div style={{
          position: 'absolute',
          width: '18px',
          height: '14px',
          top: '40%',
          left: '254px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#7B7B7B'
        }}>
          100
        </div>

        {/* Graph 2 Lower Limit */}
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '14px',
          top: '65%',
          left: '264px',
          opacity: 1,
          fontFamily: 'Urbanist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#7B7B7B'
        }}>
          0
        </div>
      </div>
      <div style={{
        width:"100%",
         display:"flex",
         gap: "2%",             
        marginTop:"-8%",
        marginLeft:"43%"
}}>
       <p style={{    width: 181,
                      height: 24,
                      opacity: 1,
                      left: "39px",
                      fontFamily: "Urbanist",
                      fontWeight: 500,
                      fontStyle: "Medium",
                      fontSize: "20px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#1E7A46"}}>Resource Availability</p>
       <p style={{    width: 181,
                      height: 24,
                      opacity: 1,
                      left: "39px",
                      fontFamily: "Urbanist",
                      fontWeight: 500,
                      fontStyle: "Medium",
                      fontSize: "20px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#1E7A46"}}>Active Power</p>
      </div>
        <div>
          <p 
            style={{
            width: 151,
            height: 24,
            opacity: 1,
            marginTop:"5%",
            marginLeft:"40%",
            fontFamily: "Urbanist",
            fontWeight:700,
            fontStyle: "Bold",
            fontSize: "20px",
            color: "#000000",
            }}>
              States Overview
          
            </p>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,170px)",
            gap: "30px",
            marginTop:"1%",
            marginLeft:"40%"
           
}}>
         {State_Overview.map((item,index)=>(
          <div style={{
                    width: 164,
                    height: 93,
                    opacity: 1,
                    top: "528px",
                    marginRight: "60px",
                    borderRadius: "20px",
                    background: "#1E7A4603",
                    backdropFilter: "blur(100px)",
                    boxShadow: "0px 1px 40px 0px #1E7A4633 inset,0px 4px 18px 0px #1E7A464D inset,0px 98px 100px -48px #1E7A4680 inset,0px -82px 68px -64px #1E7A464D inset,0px 7px 11px -4px #1E7A46 inset,0px 39px 56px -36px #1E7A4680 inset,0px 4px 4px 0px #00000080"

}}>
           <div style={{width:"100%"}}>
             <p key = {index} style={{
              width: "100%",
              height: 19,
              opacity: 1, 
              marginTop:"8%",
              fontFamily: "Urbanist",
              textAlign:"center",
              fontWeight: "500",
              fontStyle: "Medium",
              fontSize: "16px",
              lineHeight:"100%",
              letterSpacing:"0%",
              color:" #000000"
             }}>{item.State}</p>
             
                <p style={{width: "100%",
                            height: 16,
                            opacity: 1,
                            fontFamily: "Urbanist",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "13px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textAlign:"center",
                            color:" #757373",
                            marginLeft:"2%",
                            marginTop:"2%"

}}>{item.Label1}:
<span style={{
height: 16,
opacity: 1,
fontFamily: "Urbanist",
fontWeight: 500,
fontStyle: "Medium",
fontSize: "13px",
lineHeight: "100%",
letterSpacing: "0%",
textAlign:"center",
color:" #000000",
marginLeft:"3%"
}}>{item.Power}</span>
</p>
 <p style={{width: "100%",
                            height: 16,
                            opacity: 1,
                            fontFamily: "Urbanist",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "13px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textAlign:"center",
                            color:" #757373",
                            marginLeft:"2%",
                            marginTop:"2%"

}}>{item.Label2}:
<span style={{
height: 16,
opacity: 1,
fontFamily: "Urbanist",
fontWeight: 500,
fontStyle: "Medium",
fontSize: "13px",
lineHeight: "100%",
letterSpacing: "0%",
textAlign:"center",
color:" #000000",
marginLeft:"3%"
}}>{item.Percentage}</span>
</p>
 <p style={{width: "100%",
                            height: 16,
                            opacity: 1,
                            fontFamily: "Urbanist",
                            fontWeight: 400,
                            fontStyle: "Regular",
                            fontSize: "13px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textAlign:"center",
                            color:" #757373",
                            marginLeft:"2%",
                            marginTop:"2%"

}}>{item.Label3}:
<span style={{
height: 16,
opacity: 1,
fontFamily: "Urbanist",
fontWeight: 500,
fontStyle: "Medium",
fontSize: "13px",
lineHeight: "100%",
letterSpacing: "0%",
textAlign:"center",
color:" #000000",
marginLeft:"3%"
}}>{item.Wind_Speed}</span>
</p>
</div>
           </div>
          
              ))}
            </div>
        </div>
        <p style={{
            width: 70,
            height: 17,
            opacity: 1,
            marginTop: "2%",
            marginLeft: "50%",
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontStyle: "Medium",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textDecoration: "underline",
            textDecorationStyle: "solid",
            textDecorationOffset: "0%",
            textDecorationthickness: "0%",
            textDecorationSkInk: "auto",
            color: "#7B7B7B"

        }}>More State</p>
    </div>
  
  )
}

export default RenewProfile
