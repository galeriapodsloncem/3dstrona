import React from "react";
import "./App.css";
import { Row, Col, Card, Button } from "react-materialize";
import "materialize-css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import GUI from './WithGUI'
class NawigacjaPlakaty extends React.Component {
  render() {
    return (
      <div>
        <Row>
            <Row></Row>
    
            <div className="">
            <a
                className="btn red "
                href="plakaty/plakatyfilmowe"
              >
              Plakaty Filmowe
              </a>
            </div>
            
        </Row>

       
        </div>
     
    );
  }
}
export default NawigacjaPlakaty;
