"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";

import Task from ".././models/Task";
import TaskEntry from "./TaskEntry";
import { Button } from "./ui/button";

const MyTable = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Przykładowe zadanie",
      status: "inprogress",
      priority: "High",
    },
    {
      id: 2,
      title: "Przykładowe zadanie 2",
      status: "inprogress",
      priority: "High",
    },
    {
      id: 3,
      title: "Przykładowe zadanie 3",
      status: "inprogress",
      priority: "High",
    },
  ]);

  const [newTask, setNewTask] = useState<Task>({
    ...tasks[0],
    title: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addNewTask = () => {
    const lastTask = tasks[tasks.length - 1];
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, id: lastTask.id + 1 }]);
      setNewTask({ ...newTask, title: "" });
    }
  };

  const updateTask = (id: number, updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
      <section className="m-9">
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="New Task Title"
            value={newTask.title}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />

          <Button onClick={addNewTask}>Add Task</Button>
        </div>
        <Table>
          <TableCaption>List of tasks ToDo</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Select</TableHead>
              <TableHead className="text-left w-[400px]">Title</TableHead>
              <TableHead className="text-right w-[100px]">Status</TableHead>
              <TableHead className="text-right w-[100px]">Priority</TableHead>
              <TableHead className="text-center w-[100px]">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TaskEntry
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              ></TaskEntry>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total tasks:</TableCell>
              <TableCell className="text-right">{tasks.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default MyTable;

/*
NOTATKI


const [zmienna, setZmienna] = useState("");
<textarea value={zmienna} onChange={(e) => setZmienna(e.target.value)}></textarea>
*/
