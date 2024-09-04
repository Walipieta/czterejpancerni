"use client";
import React, { useState, useEffect } from "react";
import Task from "@/models/Task";
import { Button } from "@/components/ui/button";

export default function Dawid() {
  const initialTasks: Task[] = [
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
  ];

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("korwin");
    if (storedTasks) {
      setPoleTekstu(storedTasks);
      setTasks(JSON.parse(storedTasks));
    } else {
      localStorage.setItem("korwin", JSON.stringify(initialTasks));
      setTasks(initialTasks);
    }
  }, []);

  const [poleTekstu, setPoleTekstu] = useState(JSON.stringify(tasks));

  const ButtonOnClick = () => {
    const updatedTasks = JSON.parse(poleTekstu);
    setTasks(updatedTasks);
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
        {tasks.map((setTask) => (
          <div key={setTask.id} className="m-4">
            <p>{setTask.title}</p>
            <p>{setTask.priority}</p>
            <p>{setTask.status}</p>
          </div>
        ))}
      </section>
    </>
  );
}
