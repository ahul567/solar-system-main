import { useState } from "react";
import sidebardata from "./Power_dataset/Sidebardata";

function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Windfarm Overview");

  return (
    <div>
      {/* ✅ HAMBURGER BUTTON */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "30px",
          height: "22px",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        <span style={{
          display: "block",
          height: "4px",
          background: "#1E7A46",
          marginBottom: "5px",
          transition: "0.3s",
          transform: isOpen ? "rotate(45deg) translateY(8px)" : "none"
        }}></span>

        <span style={{
          display: "block",
          height: "4px",
          background: "#1E7A46",
          marginBottom: "5px",
          transition: "0.3s",
          opacity: isOpen ? 0 : 1
        }}></span>

        <span style={{
          display: "block",
          height: "4px",
          background: "#1E7A46",
          transition: "0.3s",
          transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none"
        }}></span>
      </div>

      {/* ✅ OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            top: 0,
            left: 0,
            zIndex: 500
          }}
        />
      )}

      {/* ✅ SIDEBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? "0" : "-280px",
          width: "260px",
          height: "100vh",
          background: "#F5F5F5",
          padding: "20px",
          transition: "0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 999,
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px"
        }}
      >

        {/* 🔹 TOP SECTION */}
        <div>

          {/* ✅ LOGO */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            {sidebardata.auragreen_data.map((item) => (
              <img
                key={item.image}
                src={item.image}
                alt=""
                style={{ width: "70px" }}
              />
            ))}
            
          </div>

          {/* ✅ MENU ITEMS */}
          {sidebardata.powered_data.map((item) => (
            <div
              key={item.caption}
              onClick={() => setActive(item.caption)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "10px",
                cursor: "pointer",
                background:
                  active === item.caption ? "#DCEFE5" : "transparent",
                fontWeight: active === item.caption ? "600" : "400"
              }}
            >
              <img src={item.image} alt="" style={{ width: "20px" }} />
              <span>{item.caption}</span>
            </div>
          ))}
        </div>

        {/* 🔹 BOTTOM SECTION */}
        <div>
          {sidebardata.called_data.map((item) => (
            <div
              key={item.caption}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px",
                cursor: "pointer"
              }}
            >
              <img src={item.image} alt="" style={{ width: "20px" }} />
              <span>{item.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;