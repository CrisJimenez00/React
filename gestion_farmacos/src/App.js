/*import logo from './logo.svg';
import './App.css';*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";
import { FARMACOS } from "./datos";
import { Toast } from "reactstrap";
import { ToastHeader } from "reactstrap";
import { ToastBody } from "reactstrap";
import React, { useState } from "react";
import Gestion from "./componentes/Gestion";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dentro: [],
      fuera: [],
    };
  }

  render() {
    return (
      <div id="coso1">
        <Gestion/>
              
            
      </div>
    );
  }
}

export default App;
