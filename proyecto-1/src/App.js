import logo from "./logo.svg";
import "./App.css";

function Nombres(props) {
  return (
    <div className="Nombres">
      <p>
        Nombre: 
        <input type="text" className="Input-Nombre" />
        <button type="submit" className="Button">
          Enviar
        </button>
      </p>
    </div>
  );
}
const Saludo =()=>{
  return(<>{props.saludo}</>);
}
const CampoTexto = ()=>{
  return(<><input type="text"></input></>);
}
const MiBoton=()=>{
  return(<><button>Dale</button></>);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saludo saludo={"hola"}/>
        <CampoTexto/>
        <MiBoton/>
        
      </header>
    </div>
  );
}

export default App;
