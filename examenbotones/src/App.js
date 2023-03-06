import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

class DesireList extends Component {
  render() {
    return (
      <ul>
        {this.props.deseos.map((d) => (
          <>
            <PrintDeseo deseo={d} />
            <Borrar deseo={d} />
          </>
        ))}
      </ul>
    );
  }
}

class Desire extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddDeseo}>
        <input type="text" placeholder="Escribe tu deseo" name="deseo" />
      </form>
    );
  }
}

function PrintDeseo(props) {
  return <li>{props.deseo}</li>;
}

function Borrar(props) {
  return <button>Borrar {props.deseo}</button>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["GAMBAS", "JAMÓN"],
    };
  }

  quitar(elemento) {
    let d = this.state.deseos.filter((d) => d != elemento);
    this.setState({ deseos: d });
  }

  handleAniadirDeseo(event) {
    event.preventDefault();
    let d = this.state.deseos;
    d.push(event.target.deseo.value);
    this.setState({ deseos: d });
  }

  render() {
    return (
      <div className="App">
        <h1> AÑADE TU REGALO FAVORITO </h1>
        <DesireList deseos={this.state.deseos} />
        <Desire onAddDeseo={this.handleAniadirDeseo.bind(this)} />
      </div>
    );
  }
}

export default App;
