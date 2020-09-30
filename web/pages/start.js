import { FullHeightContent, Button } from "@glrodasz/components";

function Start() {
  return (
    <FullHeightContent
      content={
        <>
          <div
            style={{
              height: 200,
              background: "tomato",
              width: "100%",
            }}
          ></div>
          <div>hello</div>
          <span>hola</span>
        </>
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
