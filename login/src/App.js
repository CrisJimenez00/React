import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Menu from "./componentes/Menu";
import AppLogin from "./componentes/AppLogin";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: "UNO",
      logged: false,
    };
  }

  changeMenu(item) {
    this.setState({ menuItem: item });
  }

  userLogin(telefono, password) {
    if (telefono == "Myfpschool" && password == "2023") {
      this.setState({ logged: true });
    }
  }
  render() {
    let obj = <></>;

    if (!this.state.logged) {
      obj = (
        <AppLogin
          userLogin={(telefono, password) => this.userLogin(telefono, password)}
        />
      );
    }
    return (
      <div className="App">
        <Menu
          menuItem={this.state.menuItem}
          changeMenu={(item) => this.changeMenu(item)}
        />
        {obj}
      </div>
    );
  }
}
export default App;
