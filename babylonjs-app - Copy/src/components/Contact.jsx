import React from 'react';

import {NavLink} from 'react-router-dom';
import {Table, MediaBox, Icon, Row, CardPanel, Card,CardTitle, Col, Slider, Slide, Caption, Footer} from 'react-materialize';
import 'materialize-css';
import Divider from 'react-materialize/lib/Divider';
import Form from './form'

const Contact = () => {
    return(
<div>
  <Row></Row>
<Row>
<Col
    m={1}
    s={0}
  />
  <Col
    m={4}
    s={12}
  >
    <Card>
     <Form/>
    </Card>
  </Col>
  <Col
    m={1}
    s={0}
  />

  <Col
    m={5}
    s={12}
  >
    <CardPanel className="white">
    <Footer
  className="white"
  
>
  <h5 className="red-text">
    Dane Kontaktowe
  </h5>
  <p className="red-text text-lighten-2">
    Rynek Główny 43
    
  </p>
  <p className="red-text text-lighten-2">
    
    31-013, Kraków
  </p>
  <p className="red-text text-lighten-2">
    
    + 48 3213 321321
  </p>
  <p className="red-text text-lighten-2">
    
    podsloncemkrakow@gmail.com
  </p>
</Footer>
     
    
    </CardPanel>
  </Col>
</Row>

</div>
    )
}
export default Contact;