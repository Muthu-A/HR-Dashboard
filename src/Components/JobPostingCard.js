import React from "react";
import { positions } from "../Utlis/Constant";

const JobPostingCard = () => {

  return (
    <div
      style={{
        boxShadow: "3px 3px 8px 3px rgba(0,0,0,0.1)",
        height: "100%",
        minHeight: "383px",
        borderRadius: 10,
        padding: 20,
      }}
    >
      <div>
        <div className="box_nav">
        <div className="left_content">
          <p className="heading content">Posted Jobs</p>
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
                className="search_input"
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

        <div className="main_content">
          <div className="active">
            <p className="title">Active Jobs</p>
            <hr />
            <div className="job_detail">
              <div className="job_card">
                <div className="top_content">
                  <img src={'https://cdn-icons-png.flaticon.com/128/5968/5968350.png'} alt="" />
                  <p className="name">Python Developer</p>
                  <a href="#" className="menu">
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                  </a>
                </div>
                <hr style={{ width: "100%" }} />

                <div className="middel_content">
                  <p>Senior Developers</p>
                  <p className="job_count">258</p>
                  <p>Total Applications</p>
                </div>
                <hr />

                <div className="justify-content-between d-flex">
                  <span className="icon">
                    <span>&#8593;</span> 28% vs Last month
                  </span>
                  <span className="end">6 min ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pending">
            <p className="title">Pending Jobs</p>
            <hr style={{ width: "104%" }} />
            <div className="job_detail">
              {/* Repeat this section for each job card */}
              {positions.map((el,index) => (
                <div className="job_card" key={index}>
                  <div className="top_content">
                    <img src={el.logo} alt="" />
                    <p className="name">Python Developer</p>
                    <a href="#" className="menu">
                      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    </a>
                  </div>
                  <hr style={{ width: "100%" }} />

                  <div className="middel_content">
                    <p>Senior Developers</p>
                    <p className="job_count">258</p>
                    <p>Total Applications</p>
                  </div>
                  <hr />

                  <div className="justify-content-between d-flex">
                    <span className="icon">
                      <span>&#8593;</span> 28% vs Last month
                    </span>
                    <span className="end">6 min ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingCard;
