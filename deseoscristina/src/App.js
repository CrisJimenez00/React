import "./App.css";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavLink, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

//Crea la lista
class DesireList extends Component {
  render() {
    return (
      <ul>
        {this.props.deseos.map((i) => (
          <>
            <PrintDeseo deseo={i} />
            <Borrar deseo={i} quitar={(d) => this.props.quitar(d)} />
          </>
        ))}
      </ul>
    );
  }
}

//Hace el formulario para introducir el deseo
class Desire extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddDeseo}>
        <input type="text" placeholder="Escribe tu deseo" name="deseo" />
      </form>
    );
  }
}

//Hace que cada línea sea un deseo(hay que meterlo dentro del ul)
function PrintDeseo(props) {
  return <li>{props.deseo}</li>;
}

function Borrar(props) {
  return (
    <button onClick={() => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </button>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["GAMBAS", "JAMÓN"],
    };
  }

  //Método el cual hace que se pueda añadir deseos
  handleAniadirDeseo(event) {
    event.preventDefault();
    let d = this.state.deseos;
    d.push(event.target.deseo.value);
    this.setState({ deseos: d });
  }

  //Método el cual elimina un elemento de la lista
  quitar(elemento) {
    let d = this.state.deseos.filter((d) => d !== elemento);
    this.setState({ deseos: d });
  }

  //Vista principal del programa
  render() {
    return (
      <div className="App">
        <h1> AÑADE TU REGALO FAVORITO </h1>
        <DesireList
          quitar={(elemento) => this.quitar(elemento)}
          deseos={this.state.deseos}
        />
        <Desire onAddDeseo={this.handleAniadirDeseo.bind(this)} />
      </div>
    );
  }
}

export default App;
