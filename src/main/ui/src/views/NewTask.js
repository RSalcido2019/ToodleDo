import React, { useState } from "react";
import { axios } from 'axios';

export default function NewTask(props) {

  const [input, setInput] = useState({
    taskName: "",
    description: "",
    datetime: "",
    reminder: "",
    priority: "",

  });
 // const [nameError, setNameError] = useState(null);

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
    alert(`Reminder Submitted ${input.taskName} #${input.datetime}`);
    console.clear();
      let sms = { phoneNumber: "YOUR NUMBER GOES HERE",  message: "text from judy's browser" };
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post('http://127.0.0.1:8080/api/v1/sms', sms)
            .then(res => {
              console.log(res);
              console.log(res.data);
            })

    setMessage("New task added :)");
  }

  return (
    <div className="form-container">
      {message ? (
        message
      ) : (
        <form id="form-id" onSubmit={handleSubmit}>
          <h1 id="heading">Task List Form</h1>
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
                  placeholder="task name"
                  required
                />
              </div>{" "}
              <div>
              <label for="datetime">Choose a time for your reminder:</label>

              <input type="datetime-local" id="meeting-time"
                     name="datetime" value={input.datetime}
                     min="2018-06-07T00:00" max="2023-06-14T00:00"/>
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
              <div class="prority">

                <p>Select the task prority:</p>

                  <label class="radio-inline">
                    <input type="radio" name="high" checked value={input.high}/>High Prority
</label>
                  <label class="radio-inline">
                    <input type="radio" name="medium" value={input.medium}/>Medium Prority
</label>
                  <label class="radio-inline">
                    <input type="radio" name="low" value={input.low}/>Low Prority
</label>
               </div>{" "}

              <div>
                <button type="submit" className="btn">
                  Submit Task
                </button>
                 <button type="button" className="btn">
                      Update Task
                       </button>

              </div>
            </div>
          </div>
        </form>
      )}
    </div>
    );
    }
