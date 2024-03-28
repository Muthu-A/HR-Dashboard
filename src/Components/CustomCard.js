import React from "react";

const CustomCard = ({ children }) => {
  return (
    <div
      className="card"
      style={{
        boxShadow: "3px 3px 8px 3px rgba(0,0,0,0.1)",
        height: "100%",
        minHeight: "383px",
        background: "linear-gradient(180deg, #0A66C2 0%, #5994CE 100%)",
        borderRadius: 10,
        padding:20
      }}
    >
      {children}
    </div>
  );
};

export default CustomCard;
