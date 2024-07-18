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
      title: "Wyrzucić śmieci",
      status: "inprogress",
      priority: "High",
    },
  ]);

  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    status: "inprogress",
    priority: "Medium",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addNewTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({
        id: 0,
        title: "",
        status: "inprogress",
        priority: "Medium",
      });
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
