import './App.css';
import {Component } from 'react'
import {Button}  from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function User(props){
  return(
    <li>{props.name}-{props.email}</li>
  );
}
function UserList(props){
  return (<ul>{
    props.users.map(user=>{return(<>
      <User key={user.id} name={user.name} email={user.email}/><form onSubmit={props.onDeleteUser}><Button name="borrar" value={user.id}>Borrar</Button></form></>)})
  }
  </ul>);
}
function UserForm(props){
  return(<form onSubmit={props.onAddUssers}>
    <input type="text" name="name"/>
    <input type="text" name="email"/>
    <Button>Enviar</Button>
  </form>)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[
    ]}
  }
    handleOnAddUsers(event){
      event.preventDefault();
      if(event.target.name.value!=="" &&event.target.email.value!==""){
      let idmax=0;
      this.state.users.map(u=>{if(u.id>idmax){idmax=u.id}})
      let user={
        id:idmax+1,
        name:event.target.name.value,
        email:event.target.email.value,
      }
      let copia=this.state.users;
      copia.push(user);
      this.setState({users:copia})
      console.log(this.state.users)
    }
    }
    handleOnDeleteUsers(event){
      event.preventDefault();
      console.log(event.target.borrar.value)
      let copia= this.state.users.filter(u=>u.id!=event.target.borrar.value);
      console.log(copia)
      this.setState({users:copia})
    }
  
  render(){
  return (
    <div className="App">
      <p><strong>Añade usuarios</strong></p>
      <UserList users={this.state.users} onDeleteUser={(e)=>this.handleOnDeleteUsers(e)}/>
      <UserForm onAddUssers={(e)=>this.handleOnAddUsers(e)}/>
    </div>
  );
}
}


export default App;