"use client";
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
import { Skeleton } from "@/components/ui/skeleton";

import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./ui/button";
import Task from ".././models/Task";
import { MdDone } from "react-icons/md";

const TaskEntryPlaceholder = () => {
  return (
    <TableRow
      className="task-inprogress dark:bg-zinc-900"
      style={{ backgroundColor: "#666" }}
    >
      <TableCell>
        <Skeleton className="h-4 w-[250px]" />
      </TableCell>
      <TableCell className="text-right">
        <Skeleton className="h-10 w-[180px]" />
      </TableCell>
      <TableCell className="text-right">
        <Skeleton className="h-10 w-[180px]" />
      </TableCell>
      <TableCell className="text-center">
        <Skeleton className="h-10 w-[40px] inline-block mr-2" />
        <Skeleton className="h-10 w-[40px] inline-block" />
      </TableCell>
    </TableRow>
  );
};

export default TaskEntryPlaceholder;
