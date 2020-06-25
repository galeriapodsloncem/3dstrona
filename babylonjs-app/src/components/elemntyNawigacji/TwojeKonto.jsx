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
import ListaSztukaUzytkowa from "../../jsony/ListaSztukaUzytkowa";



const SztukaUzytkowa = ({ listaSztukaUzytkowa }) => {
  //let baseUrl =
    //"https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

  const cardsArray = ListaSztukaUzytkowa.map((ListaSztukaUzytkowa) => (
      

    <Col m={5} s={12} push="">
      <Card
      className="z-depth-1 hoverable"
      actions={[
        <a key="1" href={ListaSztukaUzytkowa.img}>Zobacz w wysokiej rozdzielczosci</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={ListaSztukaUzytkowa.img} />}
      horizontal
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{ListaSztukaUzytkowa.plname}</h4>
        <h5>{ListaSztukaUzytkowa.autor}</h5>
      <p1>{ListaSztukaUzytkowa.pldescription}</p1>
      <br></br>
    <h5>{ListaSztukaUzytkowa.cena}</h5>
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
export default SztukaUzytkowa;
