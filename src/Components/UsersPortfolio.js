import React from "react";
import Table from "./Table";
import "./styles.css";

const UserPortfolioCard = () => {
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
      <div className="box_nav">
        <div className="left_content">
          <p className="heading content">Candidate Status</p>
          <span
            style={{
              textDecoration: "underline",
              color: "#0A66C2",
              marginTop: "12px",
              marginLeft: "20px",
            }}
            className="h4"
          >
            View All
          </span>
        </div>

        <div className="right_content">
          <span className="search_bar">
            <input
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="search_btn btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </span>
          <div className="filter">
            <button className="filter_btn btn">
              <ion-icon name="filter"></ion-icon> <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default UserPortfolioCard;
