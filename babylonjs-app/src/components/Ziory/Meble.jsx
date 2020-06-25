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
import ListaMebli from "../../jsony/ListaMebli";



const Meble = ({ listaMebli }) => {
  //let baseUrl =
    //"https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

  const cardsArray = ListaMebli.map((ListaMebli) => (
      

    <Col m={5} s={12} push="">
      <Card
      className="z-depth-1 hoverable"
      actions={[
        <a key="1" href={ListaMebli.img}>Zobacz w wysokiej rozdzielczosci</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={ListaMebli.img} />}
      horizontal
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{ListaMebli.plname}</h4>
        <h5>{ListaMebli.autor}</h5>
      <p1>{ListaMebli.pldescription}</p1>
      <br></br>
    <h5>{ListaMebli.cena}</h5>
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
export default Meble;
