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
import { Button } from "./ui/button";

const MyTable = () => {
  const removeLastTask = () => {
    setTasks(tasks.slice(0, -1));
  };
  const [tasks, setTasks] = useState([
    {
      task: "1",
      title: "Wyrzucić śmieci",
      status: "Pending",
      priority: "High",
    },
  ]);

  const [newTask, setNewTask] = useState({
    task: "",
    title: "",
    status: "Pending",
    priority: "Medium",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addNewTask = () => {
    if (newTask.title.trim()) {
      setTasks([...tasks, { ...newTask, task: `${tasks.length + 1}` }]);
      setNewTask({
        task: "",
        title: "",
        status: "Pending",
        priority: "Medium",
      });
    }
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
              <TableRow key={task.task}>
                <TableCell className="font-medium">
                  <Checkbox />
                  {task.task}
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell className="text-right">{task.status}</TableCell>
                <TableCell className="text-right">{task.priority}</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline">Edit</Button>
                  <Button onClick={removeLastTask} variant="outline">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total tasks to complete:</TableCell>
              <TableCell className="text-right">{tasks.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default MyTable;
