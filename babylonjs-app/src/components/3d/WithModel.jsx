import React, { Component, useCallback, useRef } from "react";
import { Engine, Scene, withBabylonJS, Model } from "react-babylonjs";
import {
  Color4,
  Vector3,
  Color3,
  FresnelParameters,
  ActionManager,
  SetValueAction,
} from "@babylonjs/core";
import ListaEkspozycji from "../../jsony/ListaEkspozycji";
import {
  Row,
  Col,
  Card,
  CardTitle,
  Icon,
  Button,
  Modal,
} from "react-materialize";
// import './WithModel.css'
import { Control } from "@babylonjs/gui";
import "@babylonjs/inspector";

class WithModel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    expokey: 0,
    //camera position
    countx: 70,
    county: 8,
    countz: 20,
    //camera target == primodel position
    counttargetx: 70,
    counttargety: 8,
    counttargetz: 18,
    // camera rotation
    countalfa: 2,
    countbeta: 0,
    // light position
    lightExpoX: 0,
    lightExpoZ: 0,
    lightExpoY: 0,
    lightradius: 0,
    primodel: "AntiqueCamera.gltf",
    secmodel: "AntiqueCamera.gltf",
    trimodel: "AntiqueCamera.gltf",
    //sec model coord
    secmodelX: 0,
    secmodelZ: 0,
    secmodelY: 0,
    //tri model coord
    trimodelX: 0,
    trimodelZ: 0,
    trimodelY: 0,
    //
    clickedModel: "p1",
    objectName: "",
    objectDescription: "",
    objectImg: "",
  };

  handleClickx = () => {
    this.setState(({ countx }) => ({
      countx: countx + 1,
    }));
  };
  handleClicky = () => {
    this.setState(({ county }) => ({
      county: county + 1,
    }));
  };
  handleClickz = () => {
    this.setState(({ countz }) => ({
      countz: countz + 1,
    }));
  };
  //minus
  handleClickxminus = () => {
    this.setState(({ countx }) => ({
      countx: countx - 1,
    }));
  };
  handleClickyminus = () => {
    this.setState(({ county }) => ({
      county: county - 1,
    }));
  };
  handleClickzminus = () => {
    this.setState(({ countz }) => ({
      countz: countz - 1,
    }));
  };
  handleClickalfa = () => {
    this.setState(({ countalfa }) => ({
      countalfa: countalfa + 1,
    }));
  };
  handleClickbeta = () => {
    this.setState(({ countbeta }) => ({
      countbeta: countbeta + 1,
    }));
  };
  //same position of models as in position 11
  handleClickekspozycja1 = () => {
    this.setState(({ expokey }) => ({
      expokey: 1,
      countx: 60,
      county: 7,
      countz: 15,
      counttargetx: 52,
      counttargety: 7,
      counttargetz: 15,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "dsf.stl",
      secmodel: "dsfsd",
      trimodel: "fsd",
      secmodelX: 52,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 51,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja11 = () => {
    this.setState(({ expokey }) => ({
      expokey: 11,
      countx: 49,
      county: 7,
      countz: 16,
      counttargetx: 49,
      counttargety: 7,
      counttargetz: 12,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 50,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 48,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja12 = () => {
    this.setState(({ expokey }) => ({
      expokey: 12,
      countx: 40,
      county: 7,
      countz: 16,
      counttargetx: 40,
      counttargety: 7,
      counttargetz: 12,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja13 = () => {
    this.setState(({ expokey }) => ({
      expokey: 13,
      countx: 34,
      county: 8,
      countz: 18,
      counttargetx: 34,
      counttargety: 8,
      counttargetz: 10,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja13a = () => {
    this.setState(({ clickedModel }) => ({
      clickedModel: this.props.id,
      objectName: this.props.id.Name,
      objectDescription: this.props.id.Description,
      objectImg: this.props.id.Img,
    }));
  };
  handleClickekspozycja13b = () => {
    this.setState(({ clickedModel }) => ({
      clickedModel: this.props.id,
      objectName: this.props.id.Name,
      objectDescription: this.props.id.Description,
      objectImg: this.props.id.Img,
    }));
  };
  handleClickekspozycja13c = () => {
    this.setState(({ clickedModel }) => ({
      clickedModel: this.props.id,
      objectName: this.props.id.Name,
      objectDescription: this.props.id.Description,
      objectImg: this.props.id.Img,
    }));
  };
  handleClickekspozycja14 = () => {
    this.setState(({ expokey }) => ({
      expokey: 14,
      countx: 28,
      county: 7,
      countz: 16,
      counttargetx: 28,
      counttargety: 7,
      counttargetz: 12,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja15 = () => {
    this.setState(({ expokey }) => ({
      expokey: 15,
      countx: 35,
      county: 7,
      countz: 12,
      counttargetx: 35,
      counttargety: 7,
      counttargetz: 20,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja16 = () => {
    this.setState(({ expokey }) => ({
      expokey: 16,
      countx: 42,
      county: 8,
      countz: 12,
      counttargetx: 42,
      counttargety: 6,
      counttargetz: 20,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  handleClickekspozycja17 = () => {
    this.setState(({ expokey }) => ({
      expokey: 17,
      countx: 50,
      county: 8,
      countz: 12,
      counttargetx: 50,
      counttargety: 8,
      counttargetz: 20,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 12,
    }));
  };
  //2pokoj
  handleClickekspozycja2 = () => {
    this.setState(({ expokey }) => ({
      expokey: 20,
      countx: 25,
      county: 8,
      countz: 16,
      counttargetx: 18,
      counttargety: 8,
      counttargetz: 16,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickekspozycja21 = () => {
    this.setState(({ expokey }) => ({
      expokey: 21,
      countx: 16,
      county: 8,
      countz: 18,
      counttargetx: 18,
      counttargety: 8,
      counttargetz: 8,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickekspozycja22 = () => {
    this.setState(({ expokey }) => ({
      expokey: 22,
      countx: 14,
      county: 8,
      countz: 18,
      counttargetx: 11,
      counttargety: 8,
      counttargetz: 8,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickekspozycja23 = () => {
    this.setState(({ expokey }) => ({
      expokey: 23,
      countx: 14,
      county: 8,
      countz: 26,
      counttargetx: 11,
      counttargety: 8,
      counttargetz: 26,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickekspozycja24 = () => {
    this.setState(({ expokey }) => ({
      expokey: 24,
      countx: 8,
      county: 8,
      countz: 28,
      counttargetx: 14,
      counttargety: 8,
      counttargetz: 28,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickekspozycja25 = () => {
    this.setState(({ expokey }) => ({
      expokey: 25,
      countx: 12,
      county: 8,
      countz: 28,
      counttargetx: 13,
      counttargety: 8,
      counttargetz: 40,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
      lightradius: 22,
    }));
  };
  handleClickbar = () => {
    this.setState(({ countx, county, countz }) => ({
      expokey: 0,
      countx: 70,
      county: 8,
      countz: 20,
      counttargetx: 70,
      counttargety: 8,
      counttargetz: 18,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
      primodel: "AntiqueCamera.gltf",
      secmodel: "AntiqueCamera.gltf",
      trimodel: "AntiqueCamera.gltf",
      secmodelX: 55,
      secmodelZ: 4,
      secmodelY: 12,
      trimodelX: 55,
      trimodelZ: 4,
      trimodelY: 12,
    }));
  };
  onButtonClicked = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 48,
      county: 7,
      countz: 21,
      counttargetx: 48,
      counttargety: 7,
      counttargetz: 18,
      lightExpoX: 40,
      lightExpoY: 6,
      lightExpoZ: -5,
      countalfa: 2,
      countbeta: 2,
      alfamin: 1.8,
      alfamax: 2.2,
    }));
  };
  handleClickekspozycja13a = () => {
    this.setState(({ clickedModel }) => ({
      clickedModel: this.props.id,
      objectName: this.props.id.Name,
      objectDescription: this.props.id.Description,
      objectImg: this.props.id.Img,
    }));
  };
  render() {
    let baseUrl =
      "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";
    let baseUrl2 =
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/";
    //zmienne : x,targetx, - kamera    lightExpoX - swiatla do scen
    let expokey = this.state.expokey;
    let x = this.state.countx;
    let y = this.state.county;
    let z = this.state.countz;
    let targetx = this.state.counttargetx;
    let targety = this.state.counttargety;
    let targetz = this.state.counttargetz;
    let lightExpoX = this.state.counttargetx;
    let lightExpoY = this.state.counttargety;
    let lightExpoZ = this.state.counttargetz;
    let lightradius = this.state.lightradius;
    let primodel = this.state.primodel;
    let secmodel = this.state.secmodel;
    let trimodel = this.state.trimodel;
    let secmodelX = this.state.secmodelX;
    let secmodelY = this.state.secmodelY;
    let secmodelZ = this.state.secmodelZ;
    let trimodelX = this.state.trimodelX;
    let trimodelY = this.state.trimodelY;
    let trimodelZ = this.state.trimodelZ;
    let objectName = this.state.objectName;
    let objectDescription = this.state.objectDescription;
    let objectImg = this.state.objectImg;
    //let alfa = this.state.countalfa;
    //let beta = this.state.countbeta;
    //let alfamin = this.state.alfamin;
    //let alfamax = this.state.alfamax;
    return (
      <div>
        <Row>
          <Col>
            
              <Col m={9} s={12} offset="">
                <Card>
                  <Engine
                    antialias={true}
                    adaptToDeviceRatio={false}
                    canvasId="sample-canvas"
                  >
                    <Scene clearColor={new Color4(0.1, 0.5, 0.5, 0.1)}>
                      <universalCamera
                        name="camera1"
                        position={new Vector3(x, y, z)}
                        setTarget={[new Vector3(targetx, targety, targetz)]}

                        //name="arc"
                        //setTarget={new Vector3(x, y, z)}
                        //position={new Vector3(x-1, y-3, z-3)}
                        //alpha={Math.PI / alfa}
                        //beta={Math.PI / beta}
                        //radius={12}
                        //minZ={0.0001}
                        //wheelPrecision={50}
                        //lowerRadiusLimit={4}
                        //upperRadiusLimit={27}
                        //upperBetaLimit={Math.PI / 1.87}
                        //lowerBetaLimit={Math.PI / 2.2}
                        //upperAlphaLimit={Math.PI / alfamin}
                        //lowerAlphaLimit={Math.PI / alfamax}
                      />
                      <sphere
                        name="Sphere1"
                        ref="sphere1Ref"
                        segments={10}
                        diameter={0.1}
                        position={new Vector3(62, 7, 14)}
                      ></sphere>
                      <gui3DManager name="gui3d">
                        <plane
                          position={new Vector3(31, 7, 14)}
                          rotation={new Vector3(0, 1.1, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height="60%"
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="red"
                                onPointerDownObservable={
                                  this.handleClickekspozycja1
                                }
                              >
                                <textBlock
                                  text={" click me"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={200}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(37, 4, 12)}
                          rotation={new Vector3(0, Math.PI / 1.5, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height="60%"
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="black"
                                onPointerDownObservable={
                                  this.handleClickekspozycja13a
                                }
                              >
                                <textBlock
                                  text={"info"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={200}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(34.5, 4, 12)}
                          rotation={new Vector3(0, -Math.PI / 1, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height="60%"
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="black"
                                onPointerDownObservable={
                                  this.handleClickekspozycja13b
                                }
                              >
                                <textBlock
                                  text={" info"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={200}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(32.5, 4, 12)}
                          rotation={new Vector3(0, -Math.PI / 1.5, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height="60%"
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="black"
                                onPointerDownObservable={
                                  this.handleClickekspozycja13c
                                }
                              >
                                <textBlock
                                  text={" info"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={200}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(69, 7, 13)}
                          rotation={new Vector3(0, Math.PI, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height={0.5}
                              width={1.5}
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="red"
                                onPointerDownObservable={
                                  this.handleClickekspozycja1
                                }
                              >
                                <textBlock
                                  text={"\uf00d Przejdz do ekspozycji 1"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={120}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(55, 7, 14)}
                          rotation={new Vector3(0, -Math.PI / 2, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height={0.5}
                              width={1.9}
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="red"
                                onPointerDownObservable={
                                  this.handleClickekspozycja11
                                }
                              >
                                <textBlock
                                  text={"\uf00d Przejdz do ekspozycji 11"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={120}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(44, 7, 13)}
                          rotation={new Vector3(0, -Math.PI / 2, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height={0.5}
                              width={1.9}
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="red"
                                onPointerDownObservable={
                                  this.handleClickekspozycja12
                                }
                              >
                                <textBlock
                                  text={"\uf00d Przejdz do ekspozycji 12"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={120}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <plane
                          position={new Vector3(72, 7, 13)}
                          rotation={new Vector3(0, Math.PI, 0)}
                        >
                          <advancedDynamicTexture createForParentMesh={true}>
                            <rectangle
                              height={0.5}
                              width={1.5}
                              thickness={2}
                              color="#EEEEEE"
                            >
                              <babylon-button
                                name="close-icon"
                                background="red"
                                onPointerDownObservable={
                                  this.handleClickekspozycja13
                                }
                              >
                                <textBlock
                                  text={"\uf00d Przejdz do ekspozycji 2"}
                                  fontFamily="FontAwesome"
                                  fontStyle="bold"
                                  fontSize={120}
                                  color="white"
                                />
                              </babylon-button>
                            </rectangle>
                          </advancedDynamicTexture>
                        </plane>
                        <box
                          name="box"
                          width={1}
                          height={0.1}
                          depth={1}
                          position={new Vector3(67, 5, 16)}
                          //onPointerDownObservable={this.handleButtonClicked}
                          //onClick={this.handleButtonClicked}
                        >
                          <holographicButton
                            key={`btn`}
                            name={"btn-name"}
                            text={`btn-text`}
                            onPointerDownObservable={this.handleButtonClicked14}
                          />

                          <standardMaterial
                            name="material5"
                            specularPower={64}
                            diffuseColor={Color3.Black()}
                            emissiveColor={new Color3(0.2, 0.4, 0.2)}
                            emissiveFresnelParameters={FresnelParameters.Parse({
                              isEnabled: true,
                              leftColor: [0.1, 0.1, 0.1],
                              rightColor: [0, 0, 0],
                              bias: 0.4,
                              power: 6,
                            })}
                          ></standardMaterial>
                        </box>
                      </gui3DManager>

                      <cylinder
                        name="cyl"
                        diameter={2}
                        height={0.1}
                        position={new Vector3(58, 3, 16)}
                      >
                        <standardMaterial
                          name="cylmat"
                          alpha={0.6}
                          diffuseColor={new Color3(0.4, 0.4, 0.4)}
                          specularColor={new Color3(0.4, 0.4, 0.4)}
                          emissiveColor={Color3.Red()}
                        />
                      </cylinder>

                      <pointLight
                        name="swiatlobar"
                        intensity={0.9}
                        range={5}
                        position={new Vector3(62, 10, 12)}
                        specularPower={0}
                        useBlurExponentialShadowMap={true}
                        useContactHardeningShadow={true}
                        shadowCasters={["apartament", ""]}
                      >
                        <shadowGenerator
                          mapSize={1024}
                          useBlurExponentialShadowMap={true}
                          blurKernel={32}
                          darkness={0.8}
                          shadowCasters={["apartament", ""]}
                          forceBackFacesOnly={true}
                          depthScale={5}
                          useBlurCloseExponentialShadowMap={true}
                        />
                      </pointLight>
                      <pointLight
                        name="swiatlobar2"
                        intensity={0.9}
                        range={15}
                        position={new Vector3(targetx, targety, targetz)}
                        specularPower={0}
                        useBlurExponentialShadowMap={true}
                        useContactHardeningShadow={true}
                        shadowCasters={["apartament", ""]}
                      ></pointLight>

                      <pointLight
                        name="expositionLight1"
                        intensity={0.9}
                        range={lightradius}
                        position={new Vector3(x, y, z)}
                        specularPower={1}
                        useBlurExponentialShadowMap={true}
                        useContactHardeningShadow={true}
                        shadowCasters={["apartament", ""]}
                      >
                        <shadowGenerator
                          mapSize={1024}
                          useBlurExponentialShadowMap={true}
                          blurKernel={32}
                          darkness={0.8}
                          shadowCasters={["apartament", ""]}
                          forceBackFacesOnly={true}
                          depthScale={5}
                          useBlurCloseExponentialShadowMap={true}
                        />
                      </pointLight>

                      <pointLight
                        name="expositionLight2"
                        intensity={0.9}
                        range={lightradius}
                        position={new Vector3(x - 1, y + 4, z)}
                        specularPower={1}
                        useBlurExponentialShadowMap={true}
                        useContactHardeningShadow={true}
                        shadowCasters={["apartament", ""]}
                      >
                        <shadowGenerator
                          mapSize={1024}
                          useBlurExponentialShadowMap={true}
                          blurKernel={32}
                          darkness={0.8}
                          shadowCasters={["apartament", ""]}
                          forceBackFacesOnly={true}
                          depthScale={5}
                          useBlurCloseExponentialShadowMap={true}
                        />
                      </pointLight>

                      <model
                        //model sceny starej piwnicablend.babylon
                        //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}
                        name="apartament"
                        rootUrl={`${baseUrl}assets/`}
                        sceneFilename="scene.babylon"
                        scaling={new Vector3(0.4, 0.4, 0.4)}
                        position={new Vector3(0, 2.5, 0)}
                        receiveShadows={false}
                      ></model>

                      <Model
                        //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}
                        id=""
                        name="ekspozycjaobiekt1"
                        rootUrl={`${baseUrl2}AntiqueCamera/glTF/`}
                        sceneFilename={primodel}
                        scaling={new Vector3(0.5, 0.5, 0.5)}
                        position={new Vector3(targetx, 3, targetz)}
                      />

                      <Model
                        name="ekspozycjaobiekt2"
                        //rotation={new Vector3(0, 0, 0)}
                        rootUrl={`${baseUrl2}AntiqueCamera/glTF/`}
                        sceneFilename={secmodel}
                        scaling={new Vector3(0.5, 0.5, 0.5)}
                        position={new Vector3(secmodelX, 3, secmodelZ)}
                      />
                      <Model
                        name="ekspozycjaobiekt3"
                        //rotation={new Vector3(0, 0, 0)}
                        position={new Vector3(trimodelX, 3, trimodelZ)}
                        rootUrl={`${baseUrl2}AntiqueCamera/glTF/`}
                        sceneFilename={trimodel}
                        scaling={new Vector3(0.3, 0.3, 0.3)}
                      />

                      <vrExperienceHelper
                        webVROptions={{ createDeviceOrientationCamera: false }}
                        teleportEnvironmentGround
                        enableInteractions
                      />
                    </Scene>
                  </Engine>
                  <Modal
                    actions={[
                      <Button flat modal="close" node="button" waves="green">
                        Close
                      </Button>,
                    ]}
                    bottomSheet={false}
                    fixedFooter
                    header="Modal Header"
                    id="Modal1"
                    className="Modal"
                    open={false}
                    options={{
                      dismissible: true,
                      endingTop: "10%",
                      inDuration: 250,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      opacity: 0.5,
                      outDuration: 250,
                      preventScrolling: true,
                      startingTop: "4%",
                    }}
                    //root={[object HTMLBodyElement]}
                    trigger={
                      <Button className="red" node="button">
                        Mapa
                      </Button>
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </Modal>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja1}
                  >
                    Wejście
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja11}
                  >
                    Punkt A
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja12}
                  >
                    Punkt B
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja13}
                  >
                    Punkt C
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja14}
                  >
                    Punkt D
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja15}
                  >
                    Punkt E
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja16}
                  >
                    Punkt F
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja17}
                  >
                    Punkt G
                  </button>
                  <button
                    className="btn black"
                    onClick={this.handleClickekspozycja17}
                  >
                    Punkt H
                  </button>
                </Card>
              </Col>
              <Col m={3} s={12} offset="">
                <Row>
                  <Card>
                    <h5>Instrukcja:</h5>
                    <Modal
                      actions={[
                        <Button flat modal="close" node="button" waves="green">
                          Close
                        </Button>,
                      ]}
                      bottomSheet={false}
                      fixedFooter
                      header="Modal Header"
                      id="Modal-0"
                      open={false}
                      options={{
                        dismissible: true,
                        endingTop: "10%",
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: "4%",
                      }}
                      //root={[object HTMLBodyElement]}
                      trigger={<Button node="button">Poruszanie się</Button>}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Modal>
                    <Row></Row>
                    <Modal
                      actions={[
                        <Button flat modal="close" node="button" waves="green">
                          Close
                        </Button>,
                      ]}
                      bottomSheet={false}
                      fixedFooter
                      header="Modal Header"
                      id="Modal-3"
                      open={false}
                      options={{
                        dismissible: true,
                        endingTop: "10%",
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.2,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: "4%",
                        background: "red",
                      }}
                      //root={[object HTMLBodyElement]}
                      trigger={
                        <Button node="button">Infromacje o Obiektach</Button>
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </Modal>
                  </Card>
                </Row>

                <Row>
                  <Card
                    closeIcon={<Icon>close</Icon>}
                    header={
                      <CardTitle
                        image="https://i.pinimg.com/originals/db/00/ab/db00abcf6c5909bf4763f8c30fbe1701.jpg"
                        reveal
                        waves="light"
                      />
                    }
                    reveal={
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    }
                    revealIcon={<Icon>more_vert</Icon>}
                    title="Laska Z Parasolem"
                  >
                    <p>
                      <a href="#">This is a link</a>
                    </p>
                  </Card>
                </Row>
              </Col>
            
          </Col>
        </Row>

      
      </div>
    );
  }
}

export default withBabylonJS(WithModel);
