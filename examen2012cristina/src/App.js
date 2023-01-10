/*import logo from './logo.svg';
import './App.css';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";

const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.
  
  for (let i = 0; i < props.listaBotones.length; i++) {
    console.log(props.listaBotones[i]);
    
    for (let j = 0; j < props.listaBotones[i].length; j++) {
      //Llenamos la lista de botones
      props.listaBotones.push(
        <>
          <Button outline key={i * 10 + j} click="false" />
          
        </>
      );
    }
  }
  return props.listaBotones;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
    };
  }

  clica(x, y) {
    // x se supone que la columna, y la fila
    //this.state.listaBotones[x][y]="danger";
    //return <Button color=""
  }

  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    let lista1 = this.state.listaBotones;
    let lista2 = [];

    for (let i = 0; i < lista1.length; i++) {
      lista2.push(lista1);
    }
    this.setState({ listaBotones: lista2 });
    /*for (let j = 0; j < lista2.length; j++) {
      for (let k = 0; k < lista2[j].length; k++) {
        <Button outline />;
      }
    }*/
  }

  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} />
      </div>
    );
  }
}

export default App;
