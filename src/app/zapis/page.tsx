"use client";
import React, { useState } from "react";
import Task from "@/models/Task";
import { Button } from "@/components/ui/button";

export default function Dawid() {
  const [poleTekstu, setPoleTekstu] = useState(
    localStorage.getItem("korwin") ?? "Wartośc domyslna"
  );

  const ButtonOnClick = () => {
    localStorage.setItem("korwin", poleTekstu);
  };

  return (
    <>
      <section className="m-9">
        <h1>Zapis stringa w Local Storage</h1>
        <textarea
          rows={20}
          style={{ border: "3px solid black", width: "100%" }}
          value={poleTekstu}
          onChange={(e) => setPoleTekstu(e.target.value)}
        ></textarea>

        <Button onClick={ButtonOnClick}>Zapisz dane</Button>
      </section>
    </>
  );
}
