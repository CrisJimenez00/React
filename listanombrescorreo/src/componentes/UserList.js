import React, { Component } from "react";
//Importamos los usuarios
import User from "./User";
class UserList extends Component {
  render() {
    //Usamos los props de user y creamos la variable users 
    //El componente user tendrá key(id), name(name). email(email).
    return (
      <ul>
        {this.props.users.map((u) => {
          return <User key={u.id} name={u.name} email={u.email} />;
        })}
      </ul>
    );
  }
}
export default UserList;
