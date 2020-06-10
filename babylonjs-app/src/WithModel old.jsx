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

import { Row, Col, Card } from "react-materialize";
// import './WithModel.css'
import { Control } from "@babylonjs/gui";
import "@babylonjs/inspector";

class WithModel extends Component {
 
  constructor(props) {
    super(props);
   

      

      

      
    
  };

  state = {
    countx: 69,
    county: 8,
    countz: 1,
    countalfa: 2,
    countbeta: 0,
    lightExpoX: 0,
    lightExpoZ: 0,
    lightExpoY: 0,
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
  handleClickekspozycja1 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 40,
      county: 6,
      countz: -4,
      lightExpoX: 40,
      lightExpoY: 6,
      lightExpoZ: -5,
      countalfa: 2,
      countbeta: 2,
      alfamin: 1.8,
      alfamax: 2.2,
    }));
  };
  handleClickekspozycja2 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 28,
      county: 6,
      countz: -5,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: 0,
      countalfa: 2,
      countbeta: 2,
      alfamin: 1.8,
      alfamax: 2.2,
    }));
  };
  handleClickekspozycja3 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 35,
      county: 6,
      countz: -5,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: 0,
      countalfa: 2,
      countbeta: 2,
      alfamin: 1.8,
      alfamax: 2.2,
    }));
  };
  handleClickekspozycja4 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 42,
      county: 7,
      countz: 34,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: 0,
      countalfa: -2,
      countbeta: 2,
      alfamin: -2.2,
      alfamax: -1.8,
    }));
  };
  handleClickekspozycja5 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 35,
      county: 7,
      countz: 34,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: 0,
      countalfa: -2,
      countbeta: 2,
      alfamin: -2.2,
      alfamax: -1.8,
    }));
  };

  handleClickekspozycja6 = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 50,
      county: 7,
      countz: 34,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: 0,
      countalfa: -2,
      countbeta: 2,
      alfamin: -2.2,
      alfamax: -1.8,
    }));
  };
  handleClickbar = () => {
    this.setState(({ countx, county, countz }) => ({
      countx: 70,
      county: 8,
      countz: -1,
      lightExpoX: 30,
      lightExpoY: 6,
      lightExpoZ: -1,
      countalfa: 2,
      countbeta: 2,
    }));
  };

  onButtonClicked = () => {
    console.log("dziala");
  };

  render() {
    let baseUrl =
      "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";
    let baseUrl2 =
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/";
    let x = this.state.countx;
    let y = this.state.county;
    let z = this.state.countz;
    let lightExpoX = this.state.lightExpoX;
    let lightExpoY = this.state.lightExpoY;
    let lightExpoZ = this.state.lightExpoZ;
    let alfa = this.state.countalfa;
    let beta = this.state.countbeta;
    let alfamin = this.state.alfamin;
    let alfamax = this.state.alfamax;
    return (
      <div>
        <Row>
          <Col m={10} s={12} offset="">
            <Engine
              antialias={true}
              adaptToDeviceRatio={true}
              canvasId="sample-canvas"
            >
              <Scene clearColor={new Color4(0.1, 0.5, 0.5, 0.1)}>
                <arcRotateCamera
                  name="arc"
                  target={new Vector3(x, y, z)}
                  alpha={Math.PI / alfa}
                  beta={Math.PI / beta}
                  radius={22}
                  minZ={0.0001}
                  wheelPrecision={50}
                  lowerRadiusLimit={4}
                  upperRadiusLimit={27}
                  upperBetaLimit={Math.PI / 1.87}
                  lowerBetaLimit={Math.PI / 2.2}
                  upperAlphaLimit={Math.PI / alfamin}
                  lowerAlphaLimit={Math.PI / alfamax}
                />
                <sphere
                  name="Sphere1"
                  ref="sphere1Ref"
                  segments={10}
                  diameter={1}
                  position={new Vector3(62, 7, 14)}
                >
                 
                  
                      <rectangle name="rect-1" height={3} width={2} thickness={12} cornerRadius={12} position={new Vector3(62, 5, 12)}>
                          
                              <babylon-button name="close-icon" background="green"  >
                              <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={200} color="white" />
                              </babylon-button>
                          
                      </rectangle>
                    
                
                  </sphere>
                
                
                
    
                <pointLight
                  name="swiatlobar"
                  intensity={0.3}
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
                  intensity={0.3}
                  position={new Vector3(62, 10, 22)}
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
                  name="4124"
                  intensity={0.0}
                  position={new Vector3(11, 16, 11)}
                  specularPower={12}
                  useBlurExponentialShadowMap={true}
                  useContactHardeningShadow={true}
                  shadowCasters={["apartament", ""]}
                >
                  <shadowGenerator
                    name="swiatlobar"
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
                  name="expositionLight"
                  intensity={0.9}
                  position={new Vector3(lightExpoX, lightExpoY, lightExpoZ)}
                  specularPower={12}
                  useBlurExponentialShadowMap={true}
                  useContactHardeningShadow={true}
                  shadowCasters={["apartament", ""]}
                >
                  <shadowGenerator
                    name="expositionLight1"
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

                <directionalLight
                  name="shadow-light"
                  setDirectionToTarget={[Vector3.Zero()]}
                  direction={Vector3.Zero()}
                  position={new Vector3(-40, 46, -40)}
                  intensity={0.6}
                  shadowMinZ={44}
                  shadowMaxZ={2500}
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
                  <pointLight
                    name="light2"
                    intensity={0.8}
                    position={new Vector3(0, 50, 0)}
                  />
                </directionalLight>

                <model
                  //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}
                  name="apartament"
                  rootUrl={`${baseUrl}assets/`}
                  sceneFilename="piwnicablend.babylon"
                  scaling={new Vector3(0.4, 0.4, 0.4)}
                  position={new Vector3(0, 2.5, 0)}
                  receiveShadows={false}
                ></model>
                <sphere name="1" position={new Vector3(11, 5, 9)}></sphere>
                <sphere name="2" position={new Vector3(66, 9, 8)}></sphere>
                <sphere name="3" position={new Vector3(68, 9, 9)}></sphere>
                <sphere name="4" position={new Vector3(72, 9, 10)}></sphere>

                <Model
                  //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}

                  rootUrl={`${baseUrl2}AntiqueCamera/glTF/`}
                  sceneFilename="AntiqueCamera.gltf"
                  scaling={new Vector3(0.5, 0.5, 0.5)}
                  position={new Vector3(66, 6, 12)}
                />
                <Model
                  rotation={new Vector3(0, 0, 0)}
                  position={new Vector3(0, 1, 1)}
                  rootUrl={`${baseUrl2}AntiqueCamera/glTF/`}
                  sceneFilename="AntiqueCamera.gltf"
                  scaling={new Vector3(0.5, 0.5, 0.5)}
                  position={new Vector3(40, 2, 8)}
                />
                <Model
                  name="ekspozycja2obiekt"
                  rotation={new Vector3(0, 0, 0)}
                  position={new Vector3(0, 1, 1)}
                  rootUrl={`${baseUrl2}BoomBox/glTF/`}
                  sceneFilename="BoomBox.gltf"
                  scaling={new Vector3(50, 50, 50)}
                  position={new Vector3(26.3, 4.5, 8)}
                />

                <vrExperienceHelper
                  webVROptions={{ createDeviceOrientationCamera: false }}
                  teleportEnvironmentGround
                  enableInteractions
                />
              </Scene>
            </Engine>
          </Col>
          <Col m={1} s={12} offset="">
            <button className="btn green" onClick={this.handleClickalfa}>
              plus 1 alfa-{this.state.countalfa}
            </button>
            <button className="btn pink" onClick={this.handleClickbeta}>
              plus 1 beta-{this.state.countybeta}
            </button>
            <button className="btn blue" onClick={this.handleClickx}>
              plus 1 X+{this.state.countx}
            </button>
            <button className="btn blue" onClick={this.handleClicky}>
              plus 1 Y+{this.state.county}
            </button>
            <button className="btn blue" onClick={this.handleClickz}>
              plus 1 Z+{this.state.countz}
            </button>
            <button className="btn red" onClick={this.handleClickxminus}>
              minus 1 X-{this.state.countx}
            </button>
            <button className="btn red" onClick={this.handleClickyminus}>
              minus 1 Y-{this.state.county}
            </button>
            <button className="btn red" onClick={this.handleClickzminus}>
              minus 1 Z-{this.state.countz}
            </button>
            <button className="btn black" onClick={this.handleClickbar}>
              bar
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja1}>
              ekspozycja 1
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja2}>
              ekspozycja 2
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja3}>
              ekspozycja 3
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja4}>
              ekspozycja 4
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja5}>
              ekspozycja 5
            </button>
            <button className="btn black" onClick={this.handleClickekspozycja6}>
              ekspozycja 6
            </button>
          </Col>
          <Col m={5} s={12} offset="">
            <Card>adasdasd</Card>
          </Col>
          <Col m={5} s={12} offset="">
            <Card>adasdasd</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withBabylonJS(WithModel);
