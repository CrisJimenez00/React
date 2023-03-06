import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapaBotones = (props) => {
  //Creamos la matriz y la llenamos de botones(le ponemos una key)
  let lista = [];
  for (let i = 0; i < 9; i++) {
    let lista2 = [];
    for (let j = 0; j < 9; j++) {
      if (props.listaBotones[i][j] === "-") {
        lista2.push(
          <Button key={i * 10 + j} outline onClick={() => props.clica(i, j)} />
        );
      } else {
        lista2.push(
          <Button key={i * 10 + j} color={props.listaBotones[i][j]} />
        );
      }
    }
    lista2.push(<br />);
    lista.push(lista2);
  }
  return lista;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
    };
  }

  findPos(y) {
    let l = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      if (l[i][y] != "-") return i - 1;
    }
    return 8;
  }

  clica(x, y) {
    if (x !== 0) return;
    let l = this.state.listaBotones;
    let p = this.findPos(y);
    if (p >= 0) {
      l[p][y] = "primary";
    }

    this.setState({ listaBotones: l });
  }

  componentWillMount() {
    // Utilízalo si necesitas hacer algo antes de renderizar
    let l = this.state.listaBotones;
    for (let i = 0; i < l.length; i++) {
      let x = Array(9).fill("-");
      l[i] = x;
    }
    this.setState({ listaBotones: l });
  }
  
  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          clica={(x, y) => this.clica(x, y)}
        />
      </div>
    );
  }
}
export default App;
