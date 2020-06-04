import React from 'react';

import {NavLink} from 'react-router-dom';
import {Table, MediaBox, Icon, Row, Card, CardTitle, Col, Slider, Slide, Caption} from 'react-materialize';
import 'materialize-css';
import kamienica from '../zdjecia/kamienica.jpg'
import sukiennice from './sukiennice.jpg'
const HomeEn = () => {
    return(
      <Row>
        <Row></Row>
        <Col
           m={10}
           s={12}
           push="m1"
        >
<Slider
className='z-depth-3'
  fullscreen={false}
  options={{
    duration: 500,
    height: 800 ,
    indicators: false,
    interval: 5000
  }}
>
  <Slide image={<img alt="" src={sukiennice}/>}>
    <Caption placement="center">
      <h3>
        Stay in the heart of Cracow
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Apartamenty, Rynek Glowny 43
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={require(`./apartament 5d.jpg`)}/>}>
    <Caption placement="left">
      <h3>
      Authentic Interiors
      </h3>
      <h5 className="light grey-text text-lighten-3">
        cos cos cos
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
      Przestronne Apartamenty
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        Wyjatkowa Atmosfera
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
</Slider>
</Col>
</Row>
)
}
export default HomeEn;