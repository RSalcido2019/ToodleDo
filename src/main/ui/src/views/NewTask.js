import React, { useState,useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function NewTask(props) {

  const [taskList, setTaskList] = useState([]);

  const [input, setInput] = useState({
    taskName: "",
    description: "",
    datetime: "",
    reminder: "",
    priority: "",
  });
 // const [nameError, setNameError] = useState(null);

useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
 },[taskList]);

  const [message, setMessage] = useState("");

  function handleChange(e) {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // prevents refresh in all browsers
    alert(`Reminder Added : ${input.taskName} `);
  setTaskList(taskList.concat(input));
    console.clear();

    let sms = { phoneNumber: "ENTER YOUR CELL NUMBER HERE",  message: input.description };
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // THIS WAS CHANGED FROM HTTP://LOCALHOST:3000/API/V1/SMS TO BYPASS WORK PC CONFIG
    axios.post('http://127.0.0.1:8080/api/v1/sms', sms)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })

    setMessage("New Reminder Task Added ");
  }



  return (
    <div className="form-container">
      {message ? (
        message
      ) : (
        <form id="form-id" onSubmit={handleSubmit}>
          <h1 id="heading">New Reminder Task Form</h1>
          <div className="taskContainer">
            <div className="task-center">
              <div>
                <label for="taskName">Task Name: </label>
                <input
                  className="box"
                  type="text"
                  name="taskName"
                  value={input.taskName}
                  onChange={handleChange}
                  placeholder="Enter task name"
                  required
                />
              </div>{" "}
              <div>
              <label for="datetime">Choose a time for your reminder:</label>

              <input type="datetime-local" id="meeting-time"
                     name="datetime"
                     min="2021-06-07T00:00" max="2023-06-14T00:00"/>
               </div>{" "}
              <br />
              <div>
                <label for="description">Description: </label>
                <textarea
                  className="box"
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Description"
                  required
                />
              </div>{" "}
              <br />
              <div class="priority">

                <p>Select the task priority:</p>

                  <label class="radio-inline">
                    <input type="radio" name="high"/>High
</label>
                  <label class="radio-inline">
                    <input type="radio" name="medium" />Medium
</label>
                  <label class="radio-inline">
                    <input type="radio" name="low" />Low
</label>
               </div>{" "}

              <div>
                <button type="submit" className="btn">
                  Submit Task
                </button>
                 <button type="button" className="home-btn" >
                 <Link to="/home">Home </Link>
                  </button>

              </div>
            </div>
          </div>
        </form>
      )}
    </div>
    );
    }
