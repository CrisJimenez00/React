/*import logo from './logo.svg';*/
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component, useReducer } from "react";

function User(props) {
  return (
    <li>
      {props.name} - {props.email}
    </li>
  );
}
function UserList(props) {
  return (
    <ul>
      {props.users.map((e) => (
        <>
          <User key={e.id} name={e.name} email={e.email} />
          <form onSubmit={props.onDeleteUser}>
          <Button name="borrar" value={e.id} >
            Eliminar
          </Button>
          </form>
        </>
      ))}
    </ul>
  );
}
function UserForm(props) {
  return (
    <form onSubmit={props.onAddUser}>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="submit" value="Guardar" />
    </form>
  );
}

//Método el cual elimina un elemento de la lista

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "perico", email: "perico@gmail.com" },
        { id: 2, name: "juanico", email: "juanico@gmail.com" },
        { id: 3, name: "andres", email: "andres@gmail.com" },
      ],
    };
  }

  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      id: this.state.users.length + 1,
      name: event.target.name.value,
      email: event.target.email.value,
    };
    let u = this.state.users;
    if (user.name !== "" && user.email !== "") {
      u.push(user);
    } else {
      console.log("No se puede");
    }
    this.setState({ users: u });
    
  }

  handleOnDeleteUser(event) {
    event.preventDefault();
    let user = {
      id: this.state.users.length + 1,
      name: event.target.name.value,
      email: event.target.email.value,
    };
    let u = this.state.users.filter(
      (user) => user.id != event.target.borrar.value
    );
    console.log("eyyeyeyyeyeyey");
    this.setState({ users: u });
  }

  render() {
    return (
      <div className="App">
        <p>
          <strong>Añade usuarios</strong>
        </p>
        <UserList users={this.state.users} onDeleteUser={(x)=>this.handleOnDeleteUser(x)}/>
        <UserForm onAddUser={(e) => this.handleOnAddUser(e)} />
      </div>
    );
  }
}

export default App;
