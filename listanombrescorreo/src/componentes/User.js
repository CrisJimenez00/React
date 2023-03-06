//Esta clase nos indica cómo queremos que se muestren los usuarios
import React, { Component } from "react";
class User extends Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}
export default User;
