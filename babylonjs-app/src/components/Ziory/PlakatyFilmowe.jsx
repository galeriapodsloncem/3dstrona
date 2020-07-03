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
import ListaPlakatowFilmowych from "../../jsony/ListaPlakatowFilmowych";



const PlakatyFilmowe = ({ listaPlakatowFilmowych }) => {
  //let baseUrl =
    //"https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

  const cardsArray = ListaPlakatowFilmowych.map((ListaPlakatowFilmowych) => (
      

    <Col m={5} s={12} push="">
      <Card
      className="z-depth-1 hoverable "
      id="Cardposters"
      actions={[
        <a key="1" href={ListaPlakatowFilmowych.img}>Zobacz w wysokiej rozdzielczosci</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={ListaPlakatowFilmowych.img} />}
      horizontal
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{ListaPlakatowFilmowych.plname}</h4>
        <h5>{ListaPlakatowFilmowych.autor}</h5>
      <p1>{ListaPlakatowFilmowych.pldescription}</p1>
      <br></br>
    
    
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
export default PlakatyFilmowe;
