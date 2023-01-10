//import logo from "./logo.svg";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colores: [
        "secondary",
        "secondary",
        "secondary",
        "secondary",
        "secondary",
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Botoncillo
            col={this.state.colores[0]}
          />{" "}
          <Botoncillo
            col={this.state.colores[1]}
          />{" "}
          <Botoncillo
            col={this.state.colores[2]}
          />{" "}
          <Botoncillo
            col={this.state.colores[3]}
          />{" "}
          <Botoncillo
            col={this.state.colores[4]}
            
          />{" "}
        </header>
      </div>
    );
  }
   
}
/*pos={[0]} 
    1º Cuando clicka cambia de colores
    2º Cuando pulsa un tercer botón el primero cambia a secondary de nuevo
*/
function Botoncillo(props) {
  return <Button color={props.col}></Button>;
}

export default App;
