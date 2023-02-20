/*import logo from './logo.svg';
import './App.css';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";

const Imagen = (props) => {
  switch (props.numeroIntentos) {
    case 0:
      return <img src="imagenes/ahorcado0.jpeg" />
      break;
    case 1:
      return <img src="imagenes/ahorcado1.jpeg" />
      break;
    case 2:
     return <img src="imagenes/ahorcado2.jpeg" />
      break;
    case 3:
      return <img src="imagenes/ahorcado3.jpeg" />
      break;
    case 4:
      <img src="imagenes/ahorcado4.jpeg" />
      break;
    case 5:
      <img src="imagenes/ahorcado5.jpeg" />
      break;
    case 6:
      <img src="imagenes/ahorcado6.jpeg" />
      break;
    case 7:
      <h2>HAS PERDIDO</h2>
      break;
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Declaramos parámetros
      palabra: "maritimo",
      palabraUsuario: "",
      numeroIntentos: 0,
    };
  }

  //HadlerChange -> Cuando se ejecuta un cambio pasa por aquí
  HandleChange(event) {
    if (event.target.value == this.state.palabra) {
      this.setState.palabra({ palabra: event });
    }
    if (event.target.value == this.state.palabraUsuario) {
      this.setState.palabraUsuario({ palabraUsuario: event });
    }
    if (event.target.value == this.state.ahorcado) {
      this.setState.ahorcado({ ahorcado: event });
    }
  }

  //Renderizamos
  render() {
    return (
      <>
        <h1>Juego del Ahorcado</h1>
        <p>Bienvenido al juego del ahorcado</p>
        <Imagen numeroIntentos={this.state.numeroIntentos}></Imagen>
      </>
    );
  }
}

export default App;
