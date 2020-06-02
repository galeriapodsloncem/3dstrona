import React from 'react';
import './App.css';
import {Row, Col,} from 'react-materialize';
import 'materialize-css';

import Scena from './Scena'
import NavLeft from './NavLeft'
import WithModel from './WithModel old'

class App extends React.Component {
render(){
  return (
    <div className="App">
      
      <Row>
        <Col
         m={2}
         s={12}
         offset="">
        
        <NavLeft/>
        </Col>
        <Col 
         m={10}
         s={12}
         offset="">
           <Row></Row><Row></Row><Row></Row>
        <WithModel/>
        </Col>
      </Row>
    </div>
  );
}
}
export default App;