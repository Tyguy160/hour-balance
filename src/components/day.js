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
          taskTimeUnit: ""
        }
      ],
      bedTime: moment()
        .hour(22)
        .minute(0)
    };

    this.addTask = this.addTask.bind(this);
    this.updateTaskDescription = this.updateTaskDescription.bind(this);
    this.updateTaskTime = this.updateTaskTime.bind(this);
    this.updateTaskTimeUnit = this.updateTaskTimeUnit.bind(this);
    this.updateSleeps = this.updateSleeps.bind(this);
  }

  addTask(e) {
    this.setState(
      {
        tasks: [
          ...this.state.tasks,
          {
            taskName: "",
            taskTime: "",
            taskTimeUnit: ""
          }
        ]
      },
      () => console.log("Added new task")
    );
  }

  updateTaskDescription(e, taskID) {
    console.log(e.target.value, taskID);
    const updatedTask = e.target.value;
    this.setState({
      tasks: {
        // ...this.state.tasks,
        // [taskID]: [
        //   {
        //     ...this.state.tasks[taskID],
        //     taskName: updatedTask
        //   }
        // ]
      }
    });
  }

  updateTaskTime(e, taskID) {
    console.log(e.target.value, taskID);
  }

  updateTaskTimeUnit(e, taskID) {
    console.log(e.target.value, taskID);
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
        <div className="balance">{`24 - ${8} = ${24 - 8}`}</div>
      </div>
    );
  }
}

export default Day;
