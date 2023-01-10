/*import logo from './logo.svg';
import './App.css';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";
import Flashcard from "./componentes/FlashcardComponent";
const GODOS = [
  {
    id: 0,
    imagen: "assets/images/Leovigildo.jpeg",
    nombre: "Leovigildo",
    texto: "Vida y obra de Leovigildo.",
  },
  {
    id: 1,
    imagen: "assets/images/Atanagildo.jpeg",
    nombre: "Atanagildo",
    texto: "Vida y obra de Atanagildo.",
  },
  {
    id: 2,
    imagen: "assets/images/Suintila.jpeg",
    nombre: "Suintila",
    texto: "Vida y obra de Suintila.",
  },
  {
    id: 3,
    imagen: "assets/images/Recaredo.jpeg",
    nombre: "Recaredo",
    texto: "Vida y obra de Recaredo",
  },
  {
    id: 4,
    imagen: "assets/images/Witiza.jpeg",
    nombre: "Witiza",
    texto: "Vida y obra de Witiza",
  },
  {
    id: 5,
    imagen: "assets/images/Amalarico.jpeg",
    nombre: "Amalarico",
    texto: "Vida y obra de Amalarico",
  },
  {
    id: 6,
    imagen: "assets/images/Recesvinto.jpeg",
    nombre: "Recesvinto",
    texto: "Vida y obra de Recesvinto.",
  },
  {
    id: 7,
    imagen: "assets/images/Sisebuto.jpeg",
    nombre: "Sisebuto",
    texto: "Vida y obra de Sisebuto.",
  },
  {
    id: 8,
    imagen: "assets/images/Ervigio.jpeg",
    nombre: "Ervigio",
    texto: "Vida y obra de Ervigio.",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flashcard
          imagen={GODOS[0].imagen}
          titulo={GODOS[0].nombre}
          texto={GODOS[0].texto}
        />
      </header>
    </div>
  );
}

export default App;
