import React from "react";
import "../styles/day.css";

const Day = () => {
  return (
    <div className="dayComponent">
      Day Component
      <div>Monday</div>
      <form>
        <div className="taskSet">
          <input type="textbox" value="Sleep" />
          <input type="time" placeholder="10:00 PM" />
          <input type="time" placeholder="Wakeup time" />
        </div>
        <div className="taskSet">
          <input type="textbox" placeholder="Task" />
          <input type="textbox" placeholder="Time taken" />
        </div>
      </form>
      <button>+</button>
    </div>
  );
};

export default Day;
