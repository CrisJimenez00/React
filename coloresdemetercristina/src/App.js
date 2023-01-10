//import logo from "./logo.svg";
//import './App.css';
import { Button } from "reactstrap";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
  let lista = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    let lista2 = [];
    for (let j = 0; j < props.listaBotones.length; j++) {
      lista2.push(
        <Button
          key={i * 10 + j}
          color={props.listaBotones[i][j].color}
          onClick={()=>props.CambiarColores(i, j)}
        />
      );
    }
    lista.push(
      <>
        {lista2}
        <br />
      </>
    );
  }
  return <>{lista}</>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "secondary", "success", "warning", "danger"],
    };
    this.carga();
  }

  carga() {
    let l = this.state.listaBotones;
    for (let i = 0; i < l.length; i++) {
      let x = Array(9).fill({ color: "info", pulsado: false });
      l[i] = x;
    }
    this.setState({ listaBotones: l });
  }

  CambiarColores(i, j) {
    let copiaListaBotones = this.state.listaBotones;
    //Primero le decimos que cambie ese
    copiaListaBotones[i][j].pulsado = true;
    copiaListaBotones[i][j].color = "danger";
    //Miramos los vecinos(Si se tocan mismo color, que no, siguiente color del array)
    this.setState.listaBotones = copiaListaBotones;
  }
  render() {
    return (
      <>
        <MapaBotones listaBotones={this.state.listaBotones} click={(i, j)=>this.CambiarColores(i, j)}/>
      </>
    );
  }
}

export default App;
