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
import ListaPlakatowSpolecznoReklamowych from "../../jsony/ListaPlakatowspolecznoreklamowych";



const PlakatySpolecznoReklamowe = ({ listaPlakatowSpolecznoReklamowych }) => {
  //let baseUrl =
    //"https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

  const cardsArray = ListaPlakatowSpolecznoReklamowych.map((ListaPlakatowSpolecznoReklamowych) => (
      

    <Col m={5} s={12} push="">
      <Card
      className="z-depth-1 hoverable"
      id="Cardposters"
      actions={[
        <a key="1" href={ListaPlakatowSpolecznoReklamowych.img}>Zobacz w wysokiej rozdzielczosci</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={ListaPlakatowSpolecznoReklamowych.img} />}
      horizontal
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{ListaPlakatowSpolecznoReklamowych.plname}</h4>
        <h5>{ListaPlakatowSpolecznoReklamowych.autor}</h5>
      <p1>{ListaPlakatowSpolecznoReklamowych.pldescription}</p1>
      <br></br>
    <h5>{ListaPlakatowSpolecznoReklamowych.cena}</h5>
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
export default PlakatySpolecznoReklamowe;
