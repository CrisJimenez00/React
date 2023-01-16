import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin.js'
import Menu from './componentes/Menu'
import { Component } from 'react';
import {PHPLOGIN} from './componentes/Datos';
import axios from 'axios';
import md5 from 'md5';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuItem:"UNO",
      logged:false,
    }
  }
  
  changeMenu(item){
    this.setState({menuItem:item})
  }

  userLogin(telefono,password){
    /*
    if (telefono=="Myfpschool" && password=="2023"){
      this.setState({logged:true})
    }
    */
    axios.post(PHPLOGIN,JSON.stringify({
      telefono:telefono,
      password:md5(password)
    }))
    .then(res => {
      console.log(res.data.usuario);
      if ( res.data.usuario !== undefined){
        this.setState({logged:true});
      }
    })
  }

  render(){
    let obj=<><Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} /></>
    if (!this.state.logged){
      obj=<AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)}/>
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;