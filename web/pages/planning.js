import { useQuery, useQueryCache, useMutation } from "react-query";

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
  Paragraph,
  AddButton,
  Card,
  Icon,
} from "@glrodasz/components";

import tasks from "../features/planning/api";

export async function getStaticProps() {
  const initialTasks = await tasks.getAll();
  return { props: { initialTasks } };
}

function Planning(props) {
  const cache = useQueryCache();
  const { isLoading, error, data } = useQuery("tasks", () => tasks.getAll(), {
    initialData: props.initialTasks,
  });

  const [addTask] = useMutation((params) => tasks.create(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries("tasks");
    },
  });

  const [deleteTask] = useMutation((params) => tasks.delete(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries("tasks");
    },
  });

  if (isLoading) return "Loading...";
  if (error) return `An error has ocurred ${error.message}`;

  return (
    <FullHeightContent
      content={
        <>
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
              <Paragraph size="lg">Conoce la metodologia RETO</Paragraph>
            </div>
          </div>
          <Spacer.Horizontal size="lg" />
          <Heading size="lg">
            Ahora dime, ¿cuál es la primera tarea en la que trabajarás hoy?
          </Heading>
          <Spacer.Horizontal size="md" />
          {data &&
            data.map((task) => {
              return (
                <Card key={task.id}>
                  <Spacer.Vertical size="sm" />
                  <Paragraph weight="medium">{task.description}</Paragraph>
                  <Spacer.Vertical size="sm" />
                  <Icon
                    name="arrowRight"
                    size="sm"
                    onClick={() => deleteTask({ id: task.id })}
                    background="inverted"
                  />
                </Card>
              );
            })}
          <Spacer.Horizontal size="md" />
          <AddButton onAdd={(value) => addTask({ description: value })}>
            Toca para agregar la tarea
          </AddButton>
        </>
      }
      footer={
        <div>
          <Paragraph size="sm">
            Basados en la matriz de Eisenhower priorizamos tus tareas evitando
            listas de pendientes saturadas.
          </Paragraph>
          <Spacer.Horizontal size="sm" />
          <Button type="primary">Empieza ahora</Button>
        </div>
      }
    />
  );
}

export default Planning;
