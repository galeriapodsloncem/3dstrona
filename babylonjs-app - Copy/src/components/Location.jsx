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
import { render } from "react-dom";
import "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapIn from "./MapIn";
import WithModel from "./WithModel";

class Location extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col m={4} s={12} offset="m1">
            <CardPanel className="white z-depth-3">
              <div className="center">
                <Slider
                  fullscreen={false}
                  options={{
                    duration: 500,
                    height: 300,
                    indicators: false,
                    interval: 6000,
                  }}
                >
                  <Slide
                    image={
                      <img
                        alt=""
                        src="https://q-cf.bstatic.com/images/hotel/max1024x768/247/247929274.jpg"
                      />
                    }
                  ></Slide>
                  <Slide
                    image={
                      <img
                        alt=""
                        src="http://lorempixel.com/780/580/nature/2"
                      />
                    }
                  ></Slide>
                  <Slide
                    image={
                      <img
                        alt=""
                        src="https://lorempixel.com/780/580/nature/3"
                      />
                    }
                  ></Slide>
                  <Slide
                    image={
                      <img
                        alt=""
                        src="https://lorempixel.com/580/250/nature/4"
                      />
                    }
                  ></Slide>
                </Slider>
                <Row></Row>
              </div>
              <div id="map" style={{ height: 400 }}>
                <MapIn />
              </div>
              <p1>Location add a legend maybe add a link to google maps</p1>
            </CardPanel>
          </Col>

          <Col m={6} s={12}>
            <CardPanel className="white z-depth-3">
              <Row>
                <Col m={6} s={12}>
                  <span className="black-text left-align">
                    Kamienica Gehanowska "Pod Słońcem" - Jest jedyną kamienicą
                    stojącą przy Rynku Głównym, w której przedprożu zachowało
                    się wejście na Rynek. Historia tego domu sięga swoimi
                    początkami średniowiecza, części obecnego budynku pochodzą z
                    połowy XIV wieku. Dom ten, strawiony pożarem w roku 1475
                    niebawem odbudowano, a na przełomie XV i XVI stulecia
                    podwyższono o jedno piętro, ustalony został też wtedy,
                    zachowany do dnia dzisiejszego przestrzenny układ wnętrz.
                    Kamienica położona jest na linii AB, z południową
                    ekspozycją. Elewacja kamienica została wyremontowana w 2008
                    roku.{" "}
                  </span>
                </Col>
                <Col m={6} s={12}>
                  <WithModel />
                  Interaktywny Model 3d Eleacji
                </Col>
              </Row>
              <Row></Row>
              <Divider />
              <Row></Row>
              <Row>
                <div className="center">
                  <YouTube key="1" videoId="9GrW1qSqCWk" />;
                </div>
              </Row>
            </CardPanel>
          </Col>
          <Col m={1} s={0} />
        </Row>
      </div>
    );
  }
}
export default Location;
