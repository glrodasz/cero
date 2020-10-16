import {
  Avatar,
  Heading,
  Spacer,
  Card,
  Icon,
  CenteredContent,
} from "@glrodasz/components";

export default function Home() {
  return (
    <CenteredContent>
      <div style={{ display: "flex" }}>
        <Avatar src="https://placeimg.com/200/200/people" />
        <Spacer.Vertical size="xs" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Heading size="lg">Buenos días, Cristian</Heading>
          <Heading size="md" color="primary">
            ¿Cómo quieres empezar?
          </Heading>
        </div>
      </div>
      <Spacer.Horizontal size="lg" />
      <Card color="secondary" size="lg">
        Buscar un espacio para trabajar
      </Card>
      <Spacer.Horizontal size="md" />
      <Card color="primary" size="lg">
        Iniciar una sesión de productividad
      </Card>
      <Spacer.Horizontal size="lg" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <span>Maria ha hecho check-in en Factoria</span>
      </Card>
      <Spacer.Horizontal size="xs" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <span>Maria ha hecho check-in en Factoria</span>
      </Card>
      <Spacer.Horizontal size="xs" />
      <Card size="sm">
        <Icon type="angleDown" hasBackground />
        <Spacer.Vertical size="xs" />
        <span>Maria ha hecho check-in en Factoria</span>
      </Card>
    </CenteredContent>
  );
}
