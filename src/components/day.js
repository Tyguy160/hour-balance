import React, { Component } from "react";
import moment from "moment";
import TimePicker from "rc-time-picker";
import TaskSet from "./taskSet";
import "../styles/day.css";
import "rc-time-picker/assets/index.css";

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: props.day,
      wakeupTime: moment()
        .hour(6)
        .minute(0),
      tasks: [
        {
          taskName: "",
          taskTime: "",
          taskTimeUnit: "min"
        }
      ],
      bedTime: moment()
        .hour(22)
        .minute(0),
      totalTime: 0
    };

    this.addTask = this.addTask.bind(this);
    this.updateTaskDescription = this.updateTaskDescription.bind(this);
    this.updateTaskTime = this.updateTaskTime.bind(this);
    this.updateTaskTimeUnit = this.updateTaskTimeUnit.bind(this);
    this.updateSleeps = this.updateSleeps.bind(this);
    this.updateTotalTime = this.updateTotalTime.bind(this);
  }

  addTask(e) {
    this.setState(
      {
        tasks: [
          ...this.state.tasks,
          {
            taskName: "",
            taskTime: "",
            taskTimeUnit: "min"
          }
        ]
      },
      () => console.log("Added new task")
    );
  }

  updateTaskDescription(e, taskID) {
    // console.log(e.target.value, taskID);
    let updatedTask = JSON.parse(JSON.stringify(this.state.tasks));
    updatedTask[taskID].taskName = e.target.value;
    this.setState({
      tasks: [...updatedTask]
    });
  }

  updateTaskTime(e, taskID) {
    let updatedTask = JSON.parse(JSON.stringify(this.state.tasks));
    updatedTask[taskID].taskTime = e.target.value ? e.target.value : 0;
    this.setState(
      {
        tasks: [...updatedTask]
      },
      () => {
        this.updateTotalTime();
      }
    );
  }

  updateTaskTimeUnit(e, taskID) {
    let updatedTask = JSON.parse(JSON.stringify(this.state.tasks));
    updatedTask[taskID].taskTimeUnit = e.target.value;
    this.setState(
      {
        tasks: [...updatedTask]
      },
      () => {
        this.updateTotalTime();
      }
    );
  }

  // Updates the wake up or bed time based
  // on the type in the function call
  updateSleeps(e, type) {
    let hr = e._d.getHours();
    let min = e._d.getMinutes();
    this.setState({
      [`${type}`]: moment()
        .hour(hr)
        .minute(min)
    });
  }

  // Update state with new total time, then use the
  // total time in the balance equation
  updateTotalTime() {
    let totalTime = 0;
    this.state.tasks.map(
      task =>
        task.taskTimeUnit === "hour"
          ? (totalTime += parseInt(task.taskTime))
          : (totalTime += parseInt(task.taskTime) / 60)
    );
    this.setState({
      totalTime: totalTime
    });
  }

  render() {
    return (
      <div className="dayComponent">
        <div className="dayTitle">{this.props.day}</div>
        {/* <button className="addTaskButton" onClick={this.addTask}>
          +
        </button> */}
        <hr />
        <div className="tasks">
          <div className="sleepInput">
            <span>Wakeup Time</span>
            <TimePicker
              showSecond={false}
              defaultValue={this.state.wakeupTime}
              className="timePicker"
              format={"h:mm a"}
              use12Hours
              inputReadOnly
              onChange={e => this.updateSleeps(e, "wakeupTime")}
            />
          </div>
          {this.state.tasks.map((task, index) => (
            <TaskSet
              key={index}
              taskID={index}
              taskName={task.taskName}
              taskTime={task.taskTime}
              taskTimeUnit={task.taskTimeUnit}
              addTask={this.addTask}
              updateTaskDescription={this.updateTaskDescription}
              updateTaskTime={this.updateTaskTime}
              updateTaskTimeUnit={this.updateTaskTimeUnit}
            />
          ))}
          <div className="sleepInput">
            Bedtime
            <TimePicker
              showSecond={false}
              defaultValue={this.state.bedTime}
              className="timePicker"
              format={"h:mm a"}
              use12Hours
              inputReadOnly
              onChange={e => this.updateSleeps(e, "bedTime")}
            />
          </div>
        </div>
        <hr />
        <div className="balance">
          {`24.00`}
          <br />
          {`${this.state.totalTime.toFixed(2)}`}
          <br />
          {`${(24 - this.state.totalTime).toFixed(2)}`}
        </div>
      </div>
    );
  }
}

export default Day;
