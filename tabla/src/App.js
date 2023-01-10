import React, { Component } from "react";
import Sino from './componentes/SinoComponent';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: "/assets/images/yes.png",
    };
  }

  boton(idioma) {
    this.setState({ saludo: idioma });
  }

  render() {
    return (
      <div className="App">
        <Sino imagen={this.state.imagen} titulo="si o no??" />
      </div>
    );
  }
}

export default App;
