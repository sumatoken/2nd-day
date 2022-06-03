import logo from "./logo.svg";
import "./app.scss";
import { Card, Button, Container } from "react-bootstrap";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "primereact/checkbox";
import { Button as Pbutton } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { ColorPicker } from "primereact/colorpicker";

import React from "react";

function App() {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [color, setColor] = React.useState();

  const [date, setDate] = React.useState();
  return (
    <Container fluid>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="electrical">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-electrical">2 days ago</Card.Footer>
      </Card>
      <Dialog visible={visible} onHide={() => setVisible(false)}>
        // content
      </Dialog>
      <Checkbox
        onChange={(e) => setChecked(e.checked)}
        checked={checked}
      ></Checkbox>
      <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>
      <ColorPicker value={color} onChange={(e) => setColor(e.value)} />

      <Pbutton label="Show" onClick={() => setVisible(!visible)} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Container>
  );
}

export default App;
