/*import logo from './logo.svg';
import './App.css';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";
import Sino from "./componentes/SinoComponent";

class App extends Component {
  //Ponemos el constructor el cual hereda de super
  constructor(props){super(props);
    //Se pone cual es el estado en normal(sería la imagen yes en este caso)
  this.state={
    imagen:"/assets/images/yes.png"
  }
}
//Creamos un método el cual cuando cambie de estado 
  si(){this.setState({imagen:"/assets/images/yes.png"});}
  no(){this.setState({imagen:"/assets/images/no.png"});}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sino
            imagen={this.state.imagen}
            titulo="Yer or Not"
            textobotonSi="Yes"
            textobotonNo="No"
            onClickSi={()=>this.si()}
            onClickNo={()=>this.no()}
          />
        </header>
      </div>
    );
  }
}

export default App;
