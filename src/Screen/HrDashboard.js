import React from "react";
import ComboChart from "../Components/Chart";
import CustomCard from "../Components/CustomCard";
import MeetingInfoCard from "../Components/MeeingInfoCard";
import JobPostingCard from "../Components/JobPostingCard";
import UserPortfolioCard from "../Components/UsersPortfolio";
import Calendar from "../Components/Calander";
import { upcommingLists, activities, hiringCandidates } from "../Utlis/Constant";

const HrDashboard = () => {

  return (
    <div className="" style={{ padding: 20, paddingTop: 60 }}>
      <div className="d-flex justify-content-between">
        <div>
          <h1>HR Employee</h1>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            Enjoy your selecting potential candidates Tracking and Management
            System
          </p>
        </div>

        <div>
          <button
            style={{
              color: "white",
              backgroundColor: "#007bff",
              border: "1px solid #007bff",
              padding: 10
            }}
          >
            Task Details
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <ComboChart />
        </div>
        <div className="col-md-4">
          <CustomCard>
            <div className="row" style={{ padding: 10 }}>
              <div className="col justify-content-between">
                <div
                  className="card"
                  style={{
                    height: 125,
                    width: 125,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    height={79}
                    width={58}
                    src="https://cdn-icons-png.flaticon.com/128/14654/14654458.png"
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div>
                  <h1 style={{ color: "#FFFFFF" }}>0033</h1>
                </div>
                <div>
                  <h2 style={{ color: "#FFFFFF" }}>New Assessments</h2>
                </div>
              </div>

              <div className="col" style={{ marginLeft: "-100px" }}>
                <div className="row">
                  <div className="col">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1d64/0f2b/7f173636b2c48ada21040dd26f13bf35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TB0DhcuXm2UvTJRexR9gP7PG3MB7ijuz6dzqWTLRA9iRi~EkJv1RwqK~seb6gY4dFIu70XVXyVaaO7aUKBAXDhRKe2yZ~ccfE3FiuSser6e4IR6-IcMTQk0SFZvFEGcHGX4ks~pN9Vdgu1Rei0liEiA4s0caWz8GYPP~ZzLuHLNqoAP18tTuIbpI6q6FLGUqcm~yU5h5gKz6FvizZX3PbP8wJMp2C1lEJHKuQVFJy0PzDJ3hwp9DyxbJcMroXFrFsWLwgPcZL~bG7H1Xn6iga9sV1f4RPM61ucsHjM7tKPIc-llf20sfhEL0HZhQP5yLYF9Kxa0Trvc0hyuo~S~prA__"
                      className="img-fluid"
                      alt="..."
                      style={{ height: "165px", width: "132px" }}
                    />
                  </div>
                  <div
                    className="col"
                    style={{
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-100px",
                        left: 0,
                      }}
                    >
                      <img
                        src="https://s3-alpha-sig.figma.com/img/1d64/0f2b/7f173636b2c48ada21040dd26f13bf35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TB0DhcuXm2UvTJRexR9gP7PG3MB7ijuz6dzqWTLRA9iRi~EkJv1RwqK~seb6gY4dFIu70XVXyVaaO7aUKBAXDhRKe2yZ~ccfE3FiuSser6e4IR6-IcMTQk0SFZvFEGcHGX4ks~pN9Vdgu1Rei0liEiA4s0caWz8GYPP~ZzLuHLNqoAP18tTuIbpI6q6FLGUqcm~yU5h5gKz6FvizZX3PbP8wJMp2C1lEJHKuQVFJy0PzDJ3hwp9DyxbJcMroXFrFsWLwgPcZL~bG7H1Xn6iga9sV1f4RPM61ucsHjM7tKPIc-llf20sfhEL0HZhQP5yLYF9Kxa0Trvc0hyuo~S~prA__"
                        className="img-fluid"
                        alt="..."
                        style={{
                          width: "277px",
                          height: "346px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="mt-5">
            <MeetingInfoCard />
          </div>

          <div className="mt-5">
            <JobPostingCard />
          </div>

          <div className="mt-5">
            <UserPortfolioCard />
          </div>
        </div>

        <div className="col-3 mt-5">
          <div>
            <Calendar />
          </div>

          <div style={{ marginTop: 45 }}>
            <div className="upcoming_part">
              <div className="d-flex justify-content-between">
                <span className="h3">Upcomings</span>
                <span
                  style={{ textDecoration: "underline" }}
                  className="text-primary h4 "
                >
                  View All
                </span>
              </div>

              {upcommingLists.map((el, index) => (
                <div
                  className="upcoming_content"
                  style={{ marginTop: index === 0 ? 20 : 37 }}
                >
                  <div className="date_month">
                    <span>
                      17 <span>Feb</span>
                    </span>
                  </div>
                  <div className="details">
                    <div className="detail_title">{el}</div>
                    <div className="detail_create">Created by Stella</div>
                    <div className="detail_time">10 A.M to 11 A.M</div>
                  </div>
                  <div className="button">
                    <button className="btn">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 45 }}>
            <div className="d-flex justify-content-between">
              <span className="h3">Activity</span>
              <span
                style={{ textDecoration: "underline" }}
                className="text-primary h4 "
              >
                View All
              </span>
            </div>
            {activities.map((user, index) => (
              <div key={user.id}>
                <div
                  className="d-flex"
                  style={{ marginTop: index === 0 ? 20 : 37 }}
                >
                  <img
                    style={{ width: "63px", height: "63px " }}
                    className="rounded-circle p-2"
                    src={user.image}
                    alt="User Image"
                  />

                  <div className="upcoming_content">
                    <div className="details">
                      <div className="detail_title">
                        {user.name}
                        <span className="text-primary">[{user.title}]</span>
                      </div>
                      <div className="detail_create">
                        {user.interviewerName}
                      </div>
                      <div className="detail_time">{user.interviewEndTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 37 }}>
            <div className="upcoming_part">
              <div className="d-flex justify-content-between">
                <span className="h3">Hiring Candidates</span>
                <span
                  style={{ textDecoration: "underline" }}
                  className="text-primary h4 "
                >
                  View All
                </span>
              </div>

              {hiringCandidates.map((user, index) => (
                <div
                  className="upcoming_content"
                  style={{ marginTop: index === 0 ? 20 : 45 }}
                >
                  <div>
                    <img
                      style={{ width: "63px", height: "63px " }}
                      className="rounded-circle p-2"
                      src={user}
                      alt="User Image"
                    />
                  </div>
                  <div className="details">
                    <div className="detail_title">{"John Doe"}</div>
                    <div className="detail_create">
                      {"Senior Python Developer"}
                    </div>
                    <div className="detail_time">{"Hired by: Stella"}</div>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary">Details</button>
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

export default HrDashboard;
