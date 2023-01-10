import "./App.css";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavLink, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

//Crea la lista
function DesireList(props) {
  return (
    <ul>
      {props.deseos.map((i) => (
        <>
          <PrintDeseo deseo={i} />
          <Borrar deseo={i} quitar={(d) => props.quitar(d)} />
        </>
      ))}
    </ul>
  );
}

//Hace el formulario para introducir el deseo
function Desire(props) {
  return (
    <form onSubmit={props.onAddDeseo}>
      <input type="text" placeholder="Escribe tu deseo" name="deseo" />
    </form>
  );
}

//Hace que cada línea sea un deseo(hay que meterlo dentro del ul)
function PrintDeseo(props) {
  return <li>{props.deseo}</li>;
}

function Borrar(props) {
  return (
    <button onClick={() => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </button>
  );
}

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function App() {
  let forceUpdate = useForceUpdate();
  const [deseos, setDeseo] = useState(["GAMBAS", "JAMÓN"]);

  //Método el cual hace que se pueda añadir deseos
  const handleAniadirDeseo = (event) => {
    event.preventDefault();
    let d = deseos;
    d.push(event.target.deseo.value);
    setDeseo(d);
    forceUpdate();//Hace que se actualice la página automáticamente
  };

  //Método el cual elimina un elemento de la lista
  const quitar = (elemento) => {
    let d = deseos.filter((d) => d !== elemento);
    setDeseo(d);
    forceUpdate();
  };

  //Vista principal del programa

  return (
    <div className="App">
      <h1> AÑADE TU REGALO FAVORITO </h1>
      <DesireList quitar={(elemento) => quitar(elemento)} deseos={deseos} />
      <Desire
        onAddDeseo={handleAniadirDeseo.bind(deseos)}
      />
    </div>
  );
}
export default App;
