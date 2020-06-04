import React from "react";
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import {
  Table,
  MediaBox,
  Icon,
  Row,
  CardPanel,
  Card,
  CardTitle,
  Col,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
import "materialize-css";
import Divider from "react-materialize/lib/Divider";

import "react-leaflet";
import "leaflet/dist/leaflet.css";

import MapIn from "./MapIn";

class Location extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col m={5} s={12} offset="m1">
            <CardPanel className="white">
              <span className="black-text left-align">
                Kamienica Gehanowska "Pod Słońcem" - Jest jedyną kamienicą
                stojącą przy Rynku Głównym, w której przedprożu zachowało się
                wejście na Rynek. Historia tego domu sięga swoimi początkami
                średniowiecza, części obecnego budynku pochodzą z połowy XIV
                wieku. Dom ten, strawiony pożarem w roku 1475 niebawem
                odbudowano, a na przełomie XV i XVI stulecia podwyższono o jedno
                piętro, ustalony został też wtedy, zachowany do dnia
                dzisiejszego przestrzenny układ wnętrz. Kamienica położona jest
                na linii AB, z południową ekspozycją. Elewacja kamienica została
                wyremontowana w 2008 roku.{" "}
              </span>
              <Divider />
              <div className="center">
                <YouTube key="1" videoId="9GrW1qSqCWk" />;
              </div>
            </CardPanel>
          </Col>
          <Col m={1} s={0} />

          <Col m={4} s={12}>
            <CardPanel className="white">
              <div id="map" style={{ height: 800 }}>
                <MapIn />
              </div>
              <p1>Location add a legend</p1>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Location;
