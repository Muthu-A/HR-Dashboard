import React from "react";
import UserDetailsTable from "./UserDetailsTable";
import "./styles.css";

const MeetingInfoCard = () => {
  return (
    <div
      className="card"
      style={{
        boxShadow: "3px 3px 8px 3px rgba(0,0,0,0.1)",
        height: "100%",
        minHeight: "383px",
        borderRadius: 10,
        padding: 20,
      }}
    >
      <div className="left_content">
        <p className="heading content">Today Interviews Meeting Info</p>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <UserDetailsTable />
    </div>
  );
};

export default MeetingInfoCard;
