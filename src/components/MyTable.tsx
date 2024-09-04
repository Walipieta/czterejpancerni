"use client";
import React, { useEffect, useState } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";

import Task from ".././models/Task";
import TaskEntry from "./TaskEntry";
import { Button } from "./ui/button";
import TaskEntryPlaceholder from "@/components/TaskEntryPlaceholder";
import { DatabaseService } from "@/services/DatabaseService";
import TaskItem from "./ui/TaskItem";

const MyTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  // const storedTasks = localStorage.getItem("korwin");
  // if (storedTasks == null) return;
  // setTasks(JSON.parse(storedTasks));

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(await DatabaseService.readTasks());
      setIsLoading(false);
    };
    fetchTasks();
  }, []);

  const [newTask, setNewTask] = useState<Task>({
    id: "",
    status: "inprogress",
    priority: "low",
    title: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, title: value });
  };

  const updateTasksList = (updatedTasks: any) => {
    setTasks(updatedTasks);
    //localStorage.setItem("korwin", JSON.stringify(updatedTasks));
  };

  const addNewTask = async () => {
    const lastTaskId = tasks[tasks.length - 1]?.id ?? 0;
    if (newTask.title.trim()) {
      setNewTask({ ...newTask, title: "" });
      const docId = await DatabaseService.addDocument({ ...newTask });
      updateTasksList([...tasks, { ...newTask, id: docId }]);
    }
  };

  const updateTask = (id: string, updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task
    );
    updateTasksList(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    updateTasksList(updatedTasks);
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
          <TableHeader>
            <TableRow>
              <TableHead className="text-left w-[400px]">Title</TableHead>
              <TableHead className="text-left w-[100px]">Status</TableHead>
              <TableHead className="text-left w-[100px]">Priority</TableHead>
              <TableHead className="text-left w-[100px]">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <TaskEntryPlaceholder key={i} />
                ))
              : tasks
                  .sort((a, b) => {
                    const priorities = ["high", "medium", "low"];
                    return (
                      priorities.indexOf(a.priority) -
                      priorities.indexOf(b.priority)
                    );
                  })
                  .map((task) => (
                    <TaskEntry
                      key={task.id}
                      task={task}
                      updateTask={updateTask}
                      deleteTask={deleteTask}
                    />
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
