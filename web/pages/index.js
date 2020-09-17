import { useState } from "react";
import Head from "next/head";

import { Heading, Input, Button, Spacer } from "@glrodasz/components";

export default function Home() {
  const [formValues, setFormValues] = useState({});

  const onChange = (key) => (event) => {
    const { value } = event.target;
    setFormValues({...formValues, [key]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading size="xl">Cuentame sobre ti</Heading>
      <Spacer.Horizontal size="md" />
      <Input
        value={formValues.name}
        onChange={onChange("name")}
        placeholder="Nombres"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.lastname}
        onChange={onChange("lastname")}
        placeholder="Apellidos"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.email}
        onChange={onChange("email")}
        placeholder="Correo electrónico"
      />
      <Spacer.Horizontal size="lg" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button type="primary">Completa tu perfil</Button>
        <Spacer.Horizontal size="md" />
        <Button style={{}} type="tertiary">
          Saltar este paso por ahora
        </Button>
      </div>
    </div>
  );
}
