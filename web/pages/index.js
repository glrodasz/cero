import { useState } from 'react'

import {
  Heading,
  Input,
  Button,
  Spacer,
  CenteredContent,
} from '@glrodasz/components'

export default function Home() {
  const [formValues, setFormValues] = useState({})

  const onChange = (key) => (event) => {
    const { value } = event.target
    setFormValues({ ...formValues, [key]: value })
  }

  return (
    <CenteredContent>
      <Heading size="xl">Cuentame sobre ti</Heading>
      <Spacer.Horizontal size="md" />
      <Input
        value={formValues.name}
        onChange={onChange('name')}
        placeholder="Nombres"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.lastname}
        onChange={onChange('lastname')}
        placeholder="Apellidos"
      />
      <Spacer.Horizontal size="sm" />
      <Input
        value={formValues.email}
        onChange={onChange('email')}
        placeholder="Correo electrónico"
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Spacer.Horizontal size="lg" />
        <Button type="primary">Completa tu perfil</Button>
        <Spacer.Horizontal size="md" />
        <Button style={{}} type="tertiary">
          Saltar este paso por ahora
        </Button>
      </div>
    </CenteredContent>
  )
}
