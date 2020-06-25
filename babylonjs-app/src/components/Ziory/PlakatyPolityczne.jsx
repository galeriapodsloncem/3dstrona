import React from "react";
import {
  NavItem,
  Navbar,
  Icon,
  Button,
  Col,
  CardTitle,
  Card,
  Row,
  CardPanel,
  MediaBox,
  Divider,
  Modal,
  DatePicker,
  Form,
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "materialize-css";
import ListaPlakatowPolitycznych from "../../jsony/ListaPlakatowPolitycznych";



const PlakatyPolityczne = ({ listaPlakatowPolitycznych }) => {
  //let baseUrl =
    //"https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

  const cardsArray = ListaPlakatowPolitycznych.map((ListaPlakatowPolitycznych) => (
      

    <Col m={5} s={12} push="">
      <Card
      className="z-depth-2 hoverable "
      id="Cardposters"
      actions={[
        <a key="1" href={ListaPlakatowPolitycznych.img}>Zobacz w wysokiej rozdzielczosci</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={ListaPlakatowPolitycznych.img} />}
      horizontal
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{ListaPlakatowPolitycznych.plname}</h4>
        <h5>{ListaPlakatowPolitycznych.autor}</h5>
      <p1>{ListaPlakatowPolitycznych.pldescription}</p1>
      <br></br>
    <h5>{ListaPlakatowPolitycznych.cena}</h5>
    </Card>
    </Col>
    
  ));

  return (
    <div>
      
      <Row>
      
      <Col m={11} s={0} push="m1">
      {cardsArray}
      </Col></Row>
    </div>
  );
};
export default PlakatyPolityczne;
