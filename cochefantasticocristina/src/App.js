import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorBot: [0, 0, 0, 0, 0],
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
          <Botoncillo pos={0} col={this.state.colores[0]} />{" "}
          <Botoncillo pos={1} col={this.state.colores[1]} />{" "}
          <Botoncillo pos={2} col={this.state.colores[2]} />{" "}
          <Botoncillo pos={3} col={this.state.colores[3]} />{" "}
          <Botoncillo pos={4} col={this.state.colores[4]} />{" "}
        </header>
      </div>
    );
  }


  componentDidMount() {
    setInterval(() => {
      kit();
    }, 1000);
  }
}
function kit() {
  let lista = this.state.valorBot;
  lista.map((i) => {
    
  });
}

function Botoncillo(props) {
  //cambia el color con el tiempo
  return <Button color={props.col}></Button>;
}

export default App;
