import React from "react"
import { userList } from "../Utlis/Constant"
import "./styles.css"

const Table = () => {
  const keys = Object.keys(userList[0])
  const formatKey = (key) => {
    const formattedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2")
    return formattedKey.replace(/\b\w/g, (char) => char.toUpperCase())
  }

  const getBadgeColor = (status) => {
    switch (status) {
      case "Active":
        return "active"
      case "Hired":
        return "hired"
      case "Reject":
        return "danger"
      default:
        return ""
    }
  }

  return (
    <div className="table-list-container m-0 mt-5">
      <table className="table-list">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{formatKey(key)}</th>
            ))}
            <th>{"Actions"}</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td key={key}>
                  {key === "status" ? (
                    <span
                      className={`badge badge-${getBadgeColor(user.status)}`}
                    >
                      {user[key]}
                    </span>
                  ) : (
                    user[key]
                  )}
                </td>
              ))}
              <td>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                  src={"https://cdn-icons-png.flaticon.com/128/709/709612.png"}
                  alt="Icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
