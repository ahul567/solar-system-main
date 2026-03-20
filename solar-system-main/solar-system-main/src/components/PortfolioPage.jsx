import React from "react";
import HeaderBanner from "./HeaderBanner";
import { portfolioSummary, farmCards } from "../data/portfolioData";
import cylinderGroup1 from "../assets/cylinder-group1.svg";
import cylinderGroup2 from "../assets/cylinder-group2.svg";
import cylinderGroup3 from "../assets/cylinder-group3.svg";
import farm_Cards  from "../assets/tejuva_Bhesada.png";
import Vec2 from "../assets/Vector2.svg";
import Vec3 from "../assets/Vector3.svg";
import Vec4 from "../assets/Vector4.svg";
import vec_home from "../assets/Vector_home.svg";
const vec_map = [vec_home,Vec4,Vec2,Vec3];
export default function PortfolioPage() {
  return (
    <div
      style={{
        width:"220vh",
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeaderBanner />
      <div style={{
        width: 300,
        height: 24,
        marginTop: 24,
        marginRight:70,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
        <span style={{
          fontFamily: "Urbanist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#000000",
        }}>
          Rajasthan Wind Farms Portfolio
        </span>
      </div>

      {/* graph summary */}
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          marginTop: 36,
          display: "flex",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {portfolioSummary.map((item, idx) => {
          const svgFiles = [
            cylinderGroup1,
            cylinderGroup2,
            cylinderGroup3,
          ];

          const svgSrc = svgFiles[idx] || cylinderGroup1;

          return (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                width: 103.92,
              }}
            >
              <div
                style={{
                  fontFamily:
                    "Urbanist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                {item.value}
                {item.unit}
              </div>

              <img
                src={svgSrc}
                alt={item.label}
                style={{ width: 103.92, height: 189.21 }}
              />

              <div
                style={{
                  width: 103.92,
                  fontFamily:
                    "Urbanist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#1E7A46",
                  textAlign: "center",
                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
     <div>
        <img src={farm_Cards} style={{
            marginTop: 30,
            background: "#f4f7fb",
            height:500
        }} alt="" />
     </div>
     <div style={{
        width: 410,
height: 87,
opacity: 1,
marginTop: "4%",
marginLeft: -5,
borderWidth: 1,
background: "#E8EBEEB2",
border: "1px solid",
borderImageSource: "linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 100%)",
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:50
}}>
     { vec_map.map((item,index)=>(
     <div key={index}>
        <div style={{
        width: 40,
        height: 40,
        opacity: 1,
        borderRadius: 20,
        border: "1px dashed #000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
}}><img src={item}/></div>
     </div>
    ))}
</div>
  
    </div>
   
  );
}
