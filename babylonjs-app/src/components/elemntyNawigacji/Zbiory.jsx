import React, {  } from 'react';
import { Icon, Button, SideNav, SideNavItem, Row, Col, Card, CardTitle} from 'react-materialize';
import 'materialize-css';
import Plakaty from '../Ziory/PlakatyFilmowe';

class Zbiory extends React.Component {
    render(){
      return (
<div>
  <Row>
    <Plakaty/>
  </Row>
</div>
  );
}
}
export default Zbiory;