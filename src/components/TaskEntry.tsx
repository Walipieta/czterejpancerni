"use client";
//          onChange={handleInputChange}
import { ChevronRightIcon, Loader2 } from "lucide-react";
import { FaBeer, FaTrashAlt } from "react-icons/fa";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./ui/button";
import Task from ".././models/Task";
import { MdDone } from "react-icons/md";

const TaskEntry = ({
  task,
  deleteTask,
  updateTask,
}: {
  task: Task;
  deleteTask: (id: string, deletedTasks: Task) => void;
  updateTask: (id: string, updatedTask: Task) => void;
}) => {
  const updatePriority = (newValue: string) => {
    if (newValue != "low" && newValue != "medium" && newValue != "high")
      return alert("invalid value");
    updateTask(task.id, {
      ...task,
      priority: newValue,
    });
  };

  const updateStatus = (newValue: string) => {
    if (newValue != "inprogress" && newValue != "completed")
      return alert("invalid value");
    updateTask(task.id, {
      ...task,
      status: newValue,
    });
  };

  const updateTitle = (newTitle: string) => {
    updateTask(task.id, {
      ...task,
      title: newTitle,
    });
  };

  return (
    <TableRow
      key={task.id}
      className={
        task.status == "inprogress"
          ? "task-inprogress dark:bg-zinc-900"
          : "task-completed dark:bg-zinc-900"
      }
      style={{ backgroundColor: "#666" }}
    >
      <TableCell>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => updateTitle(e.target.value)}
          className=" p-2 mr-2 w-full bg-transparent color-white text-white"
          color="white"
          style={{ color: "#fff" }}
        />
      </TableCell>
      <TableCell className="text-right">
        <Select onValueChange={updateStatus} defaultValue={task.status}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Task status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inprogress">inprogress</SelectItem>
            <SelectItem value="completed">completed</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell className="text-right">
        <Select onValueChange={updatePriority} defaultValue={task.priority}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Task priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">low</SelectItem>
            <SelectItem value="medium">medium</SelectItem>
            <SelectItem value="high">high</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
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
            size="icon"
          >
            <MdDone />
          </Button>
        )}

        <Button
          onClick={() =>
            deleteTask(task.id, {
              ...task,
            })
          }
          variant="outline"
          size="icon"
        >
          <FaTrashAlt />
        </Button>
        {/*<Loader2 className="mr-2 h-4 w-4 animate-spin" />*/}
      </TableCell>
    </TableRow>
  );
};

export default TaskEntry;
