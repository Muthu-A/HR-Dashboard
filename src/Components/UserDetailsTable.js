import React from "react";
import { candidateInterviewDetails } from "../Utlis/Constant";
import "./styles.css";

const UserDetailsTable = () => {
  const formatKey = (key) => {
    const formattedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
    return formattedKey.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="table_div">
      <div className="col">
        <table>
          {candidateInterviewDetails.map((el) => (
            <>
              <tr>
                <td
                  rowspan="5"
                  colspan="2"
                  className="image"
                  style={{ verticalAlign: "top" }}
                >
                  <img src={el.image} alt="" />
                  <p className="name">{el.name}</p>
                  <small>{el.position}</small>
                </td>
              </tr>
              {el.interviewDetails.map((detail, index) => (
                <tr key={index}>
                  {Object.entries(detail).map(([key, value]) => (
                    <td key={key}>{`${formatKey(key)}: ${value}`}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td class="date">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ height: "25px", width: "25px" }}
                      src={
                        "https://cdn-icons-png.flaticon.com/128/2838/2838779.png"
                      }
                      alt="Icon"
                    />
                    <small style={{ color: "#0A66C2" }}>19th feb 2024</small>
                  </div>
                </td>
                <td class="clock">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        height: "25px",
                        width: "25px",
                      }}
                      src={
                        "https://cdn-icons-png.flaticon.com/128/992/992700.png"
                      }
                      alt="Icon"
                    />
                    <small style={{ color: "#0A66C2" }}>10:30 AM</small>
                  </div>
                </td>
                <td colspan="2" className="button">
                  <div className="d-flex" style={{ justifyContent: 'center' }}>
                    <div>
                      <button style={{
                        color: "#0A66C2",
                        backgroundColor: "white",
                        border: "1px solid #007bff",
                        padding: 4,
                        fontSize: '14px',
                        fontWeight:500
                      }}>
                        Reschedule Meeting
                      </button>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                      <button
                        style={{
                          color: "white",
                          backgroundColor: "#0A66C2",
                          border: "1px solid #007bff",
                          padding: 4,
                          fontSize: '14px',
                          fontWeight:500
                        }}
                      >
                        Join Meeting
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserDetailsTable;
