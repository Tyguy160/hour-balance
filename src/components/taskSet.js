import React from "react";
import "../styles/taskSet.css";
const TaskSet = () => {
  return (
    <form className="taskSet">
      <input type="textbox" placeholder="Enter your task..." />
      <input type="textbox" placeholder="Time taken" />
    </form>
  );
};

export default TaskSet;
