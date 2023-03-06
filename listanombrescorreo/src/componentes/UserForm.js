import React, { Component } from "react";
class UserForm extends Component {
  render() {
    //Hacemos que cuando se envíe se genere la variable onAddUser(es inventado, pat aluego llamarlo)
    return (
      <form onSubmit={this.props.onAddUser}>
        <input type="text" placeholder="Nombre" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="submit" value="Guardar" />
      </form>
    );
  }
}
export default UserForm;
