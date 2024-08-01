"use client";
import React, { useState } from "react";
import Task from "@/models/Task";
import { Button } from "@/components/ui/button";

export default function Dawid() {
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
  ]);

  const [poleTekstu, setPoleTekstu] = useState(JSON.stringify(tasks));

  const ButtonOnClick = () => {
    setTasks(JSON.parse(poleTekstu));
    localStorage.setItem("korwin", poleTekstu);
  };

  return (
    <>
      <section className="m-9">
        <h1>Konwersja z Task na JSON i z JSON na Task</h1>
        <textarea
          rows={20}
          style={{ border: "3px solid black", width: "100%" }}
          value={poleTekstu}
          onChange={(e) => setPoleTekstu(e.target.value)}
        ></textarea>

        <Button onClick={ButtonOnClick}>Aktualizuj wszystkie taski</Button>

        <h2 className="mt-4">Lista zadań</h2>
        {tasks.map((task) => (
          <div key={task.id} className="m-4">
            <p>{task.title}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
          </div>
        ))}
      </section>
    </>
  );
}
