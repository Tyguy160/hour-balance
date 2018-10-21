import React from "react";
import moment from "moment";
import TimePicker from "rc-time-picker";
import TaskSet from "./taskSet";
import "../styles/day.css";
import "rc-time-picker/assets/index.css";

const Day = props => {
  return (
    <div className="dayComponent">
      <div className="dayTitle">{props.day}</div>
      <div className="tasks">
        <div className="sleepInput">
          <span>Wakeup Time</span>
          <TimePicker
            showSecond={false}
            defaultValue={moment()
              .hour(0)
              .minute(0)}
            className="timePicker"
            format={"h:mm a"}
            use12Hours
            inputReadOnly
          />
        </div>
        <TaskSet />
        <TaskSet />
        <TaskSet />
        <div className="sleepInput">
          Bedtime
          <TimePicker
            showSecond={false}
            defaultValue={moment()
              .hour(0)
              .minute(0)}
            className="timePicker"
            format={"h:mm a"}
            use12Hours
            inputReadOnly
          />
        </div>
      </div>
      <button>+</button>
    </div>
  );
};

export default Day;
