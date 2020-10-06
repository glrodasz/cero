// import { useState } from "react";
import { useQuery } from "react-query";

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
} from "@glrodasz/components";

import tasks from "../features/planning/api";

function Start() {
  const { isLoading, error, data } = useQuery("todos", () => tasks.getAll());

  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;

  console.log(data);
  return (
    <FullHeightContent
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex" }}>
            <Avatar src="https://placeimg.com/200/200/people" />
            <Spacer.Vertical size="xs" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Heading size="lg">Hola, Cristian</Heading>
              <Heading size="md" color="primary">
                ¿Cómo quieres empezar?
              </Heading>
            </div>
          </div>
          <Heading size="lg">
            Ahora dime, ¿cuál es la primera tarea en la que trabajarás hoy?
          </Heading>
          <button onClick={() => {}}>Toca para agregar la tarea</button>
          {data &&
            data.map((task) => {
              return (
                <div>
                  <Heading>{task.id}</Heading>
                  <Heading>{task.description}</Heading>
                </div>
              );
            })}
        </div>
      }
      footer={
        <div>
          <p>
            Basados en la matriz de Eisenhower priorizamos tus tareas evitando
            listas de pendientes saturadas.
          </p>
          <Button type="primary">Empieza ahora</Button>
        </div>
      }
    />
  );
}

export default Start;
