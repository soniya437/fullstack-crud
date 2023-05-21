import React, { useEffect, useState } from 'react';
import List from "./components/List";
import axios from "axios"
import { baseURL } from "./utils/constant";


const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
      })
  }, [])

  return (
    <main>
      <h1 className='title'>CRUD Operations</h1>

      <div className='input_holder'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add Task</button>
        <div>

          <ul>
            <List task="Something" />
          </ul>

        </div>



      </div>
    </main>
  )
};

export default App
