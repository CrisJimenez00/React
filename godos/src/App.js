import "./App.css";
import GODOS from "./componentes/Godos";
import { Component } from "react";

function DisplayGodos(props) {
  let lista = props.godos.map(
    (e) => {return (
      <li key={e.id}>
        <h2>{e.nombre}</h2>
        <p>{e.texto}</p>
      </li>
    );
  });
  return <>{lista}</>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      godos: GODOS,
    };
  }
  render() {
    return (
      <div className="App">
        <DisplayGodos godos={this.state.godos} />
      </div>
    );
  }
}

export default App;
