import {
  Avatar,
  Heading,
  Spacer,
  Card,
  Icon,
  CenteredContent,
  FullHeightContent,
  Paragraph,
} from "@glrodasz/components";

export default function Home() {
  return (
    <FullHeightContent
      content={
        <>
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
            <Paragraph weight="medium" color="inverted" size="lg">
              Buscar un espacio para trabajar
            </Paragraph>
          </Card>
          <Spacer.Horizontal size="md" />
          <Card color="primary" size="lg">
            <Paragraph weight="medium" color="inverted" size="lg">
              Iniciar una sesión de productividad
            </Paragraph>
          </Card>
          <Spacer.Horizontal size="lg" />
          <Card size="sm">
            <Icon name="user" color="primary" background="highlight" />
            <Spacer.Vertical size="sm" />
            <Paragraph>Maria ha hecho check-in en Factoria</Paragraph>
          </Card>
          <Spacer.Horizontal size="xs" />
          <Card size="sm">
            <Icon name="user" color="primary" background="highlight" />
            <Spacer.Vertical size="sm" />
            <Paragraph>Frank ha iniciado una sesión de productividad</Paragraph>
          </Card>
          <Spacer.Horizontal size="xs" />
          <Card size="sm">
            <Icon name="arrowUp" color="primary" background="spotlight" />
            <Spacer.Vertical size="sm" />
            <Paragraph>
              Tu productividad ha incrementado un 30% durante la última semana
            </Paragraph>
          </Card>
        </>
      }
    ></FullHeightContent>
  );
}
