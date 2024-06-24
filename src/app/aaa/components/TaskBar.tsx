"use client";
import React, { useState } from "react";

const TaskBar = () => {
  const [tasks, setTasks] = useState([""]);

  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    const nowaWartosc = [newTask, ...tasks];
    setTasks(nowaWartosc);
    setNewTask(""); // Clear the input field after adding the new task
  };

  const removeLastTask = () => {
    setTasks(tasks.slice(0, -1));
  };

  return (
    <>
      <a onClick={removeLastTask} href="#">
        Usuń ostatni task
      </a>
      <h1>Lista zadań</h1>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addNewTask}>Dodaj task</button>

      <p>Masz jeszcze {tasks.length} zadań do zrobienia</p>
    </>
  );
};

export default TaskBar;
