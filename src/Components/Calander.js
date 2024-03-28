import React from "react";
import { Calendar as CA } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const Calendar = () => {
  const date = [new Date(2024, 2, 9), new Date(2024, 2, 19)];
  return (
    <div className="calendar">
      <CA className="disabled-calendar" selectRange
        value={date}
        tileClassName={'range-selected'}
        />
    </div>
  );
};

export default Calendar;
