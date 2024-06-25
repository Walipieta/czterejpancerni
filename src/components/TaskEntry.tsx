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
import Task from ".././models/Task";

const TaskEntry = ({
  task,
  deleteTask,
  updateTask,
}: {
  task: Task;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updatedTask: Task) => void;
}) => {
  return (
    <TableRow key={task.id}>
      <TableCell className="font-medium">
        <Checkbox />
        {task.id}
      </TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell className="text-right">{task.status}</TableCell>
      <TableCell className="text-right">{task.priority}</TableCell>
      <TableCell className="text-center">
        {task.status === "completed" ? (
          <Button
            onClick={() =>
              updateTask(task.id, {
                ...task,
                status: "inprogress",
              })
            }
            variant="outline"
          >
            Still Doing
          </Button>
        ) : (
          <Button
            onClick={() =>
              updateTask(task.id, {
                ...task,
                status: "completed",
              })
            }
            variant="outline"
          >
            Done
          </Button>
        )}

        <Button onClick={() => deleteTask(task.id)} variant="outline">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TaskEntry;
