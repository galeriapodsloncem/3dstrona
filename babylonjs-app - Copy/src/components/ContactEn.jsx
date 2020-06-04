import React from 'react';

import {NavLink} from 'react-router-dom';
import {Table, MediaBox, Icon, Row, CardPanel, Card,CardTitle, Col, Slider, Slide, Caption} from 'react-materialize';
import 'materialize-css';
import Divider from 'react-materialize/lib/Divider';

const Contact = () => {
    return(
<div>
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
      <span className="black-text">
      Kamienica Gehanowska "Pod Słońcem" - Jest jedyną kamienicą stojącą przy Rynku Głównym, w której przedprożu zachowało się wejście na Rynek.

Historia tego domu sięga swoimi początkami średniowiecza, części obecnego budynku pochodzą z połowy XIV wieku. Dom ten, strawiony pożarem w roku 1475 niebawem odbudowano, a na przełomie XV i XVI stulecia podwyższono o jedno piętro, ustalony został też wtedy, zachowany do dnia dzisiejszego przestrzenny układ wnętrz.

Kamienica położona jest na linii AB, z południową ekspozycją. Elewacja kamienica została wyremontowana w 2008 roku.      </span>
<Divider/>
<span className="black-text">
      Kamienica Gehanowska "Pod Słońcem" - Jest jedyną kamienicą stojącą przy Rynku Głównym, w której przedprożu zachowało się wejście na Rynek.

Historia tego domu sięga swoimi początkami średniowiecza, części obecnego budynku pochodzą z połowy XIV wieku. Dom ten, strawiony pożarem w roku 1475 niebawem odbudowano, a na przełomie XV i XVI stulecia podwyższono o jedno piętro, ustalony został też wtedy, zachowany do dnia dzisiejszego przestrzenny układ wnętrz.

Kamienica położona jest na linii AB, z południową ekspozycją. Elewacja kamienica została wyremontowana w 2008 roku.      </span>
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
    <MediaBox
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    width="100%"
  />
</MediaBox>
     
    
    </CardPanel>
  </Col>
</Row>

</div>
    )
}
export default Contact;