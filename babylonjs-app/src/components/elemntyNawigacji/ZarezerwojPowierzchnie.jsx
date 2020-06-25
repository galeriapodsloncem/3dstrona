import React from "react";
import {
  Icon,
  Button,
  SideNav,
  SideNavItem,
  Row,
  Col,
  Card,
  CardTitle,
} from "react-materialize";
import "materialize-css";



class Rezerwacja extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: "plakaty"};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Wybrales kategorie' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        
         <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6"/>
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
      <input className="btn red" type="submit" value="Wyślij" />
    </form>
    
  </div>
      
      );
    }
  }

  export default Rezerwacja