import React from "react";
import "../styles/taskSet.css";

// Select all text that has been entered
function selectText(e) {
  e.target.select();
}

const TaskSet = props => {
  return (
    <form className="taskSet">
      <input
        type="textbox"
        placeholder="Enter your task..."
        className="taskInput input"
        onFocus={e => selectText(e)}
        onKeyPress={e => {
          if (e.which === 13) {
            e.preventDefault();
            props.addTask(e);
          }
        }}
        onChange={e => props.updateTaskDescription(e, props.taskID)}
      />
      <div className="timeInputContainer">
        <input
          type="textbox"
          placeholder="Time"
          className="timeInput input"
          onFocus={e => selectText(e)}
          onKeyPress={e => {
            if (e.which === 13) {
              e.preventDefault();
              props.addTask(e);
            }
          }}
          onChange={e => props.updateTaskTime(e, props.taskID)}
        />
        <select className="timeUnit">
          <option value="min">mins</option>
          <option value="hour">hrs</option>
        </select>
      </div>
    </form>
  );
};

export default TaskSet;
