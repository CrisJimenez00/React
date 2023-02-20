import React, { Component, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Altas = (props) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  return (
    <Form>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="introduzca nombre" />

        <Label for="Nombre">Apellidos:</Label>
        <Input
          name="apellidos"
          id="apellidos"
          placeholder="introduzca apellidos"
        />

        <Label for="Nombre">Telefono:</Label>
        <Input
          name="telefono"
          id="telefono"
          placeholder="introduzca telefono"
        />
      </FormGroup>
      <Button>Añadir</Button>
    </Form>
  );
};

const Mostrar = (props) => {
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
  return (
    <p>
      {props.toString()}
      <Button>X</Button>
    </p>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Primero creamos la lista
      listaUsuarios: ["hfshfrhf"],

      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA
      //INFORMACIÓN DE LA APLICACIÓN. EL LISTÍN TELEFÓNICO
    };
  }
  render() {
    return (
      <div className="App">
        <Mostrar
          props={this.state.listaUsuarios}
          onClick={(x) => {
            this.state.listaUsuarios.pop(x);
          }}
        />
        <Altas
          onSubmit={() => {
            this.state.listaUsuarios.push(
              document.getElementById("nombre") +
                " " +
                document.getElementById("apellidos") +
                " - " +
                document.getElementById("telefono")
            );
          }}
        />
      </div>
    );
  }
}
export default App;
