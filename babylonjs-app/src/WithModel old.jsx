import React, { Component } from "react";

import { Engine, Scene, withBabylonJS, Model } from "react-babylonjs";
import {
  Vector3,
  Color3,
  FresnelParameters,
  ActionManager,
  SetValueAction
} from "@babylonjs/core";
import { PrismCode } from "react-prism";

// import './WithModel.css'

class WithModel extends Component {
  render() {
    let baseUrl =
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/";

    return (
      <div>
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Engine
              antialias={true}
              adaptToDeviceRatio={true}
              canvasId="sample-canvas"
            >
              <Scene>
                <arcRotateCamera
                  name="arc"
                  target={new Vector3(0, 5, 0)}
                  alpha={Math.PI / 2}
                  beta={0.5 + Math.PI / 7}
                  radius={25}
                  minZ={0.001}
                  wheelPrecision={50}
                  lowerRadiusLimit={8}
                  upperRadiusLimit={20}
                  upperBetaLimit={Math.PI / 2}
                />
                
                <Model
                  //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}

                  rootUrl={`${baseUrl}BoomBox/glTF/`}
                  sceneFilename="BoomBox.gltf"
                  scaling={new Vector3(200, 200, 200)}
                  position={new Vector3(0, 2.5, 0)}
                />
                <Model
                  //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}

                  rootUrl={`${baseUrl}AntiqueCamera/glTF/`}
                  sceneFilename="AntiqueCamera.gltf"
                  scaling={new Vector3(1, 1, 1)}
                  position={new Vector3(0, 1, -6)}
                />
                <sphere
                  name="sphere1"
                  diameter={2}
                  segments={16}
                  position={new Vector3(5, 2.5, 3)}
                />
                <sphere
                  name="sphere2"
                  diameter={2}
                  segments={16}
                  position={new Vector3(-5, 2.5, -2)}
                  
                >
                <standardMaterial name='material1' specularPower={16}
                diffuseColor={Color3.Black()}
                emissiveColor={new Color3(54, 0.5, 0.5)}
                reflectionFresnelParameters={FresnelParameters.Parse({
                    isEnabled: true,
                    leftColor: [1, 1, 1],
                    rightColor: [0, 0, 0],
                    bias: 0.1,
                    power: 1
                })}
              />
              </sphere>
                <ground
                  name="ground1"
                  width={100}
                  height={100}
                  subdivisions={2}
                  receiveShadows={true}
                ></ground>
                <directionalLight
                  name="shadow-light"
                  setDirectionToTarget={[Vector3.Zero()]}
                  direction={Vector3.Zero()}
                  position={new Vector3(-40, 30, -40)}
                  intensity={0.4}
                  shadowMinZ={1}
                  shadowMaxZ={2500}
                >
                  <shadowGenerator
                    mapSize={1024}
                    useBlurExponentialShadowMap={true}
                    blurKernel={32}
                    darkness={0.8}
                    shadowCasters={["sphere1", "sphere2"]}
                    forceBackFacesOnly={true}
                    depthScale={5}
                  />
                  <hemisphericLight
                  name="light1"
                  intensity={0.7}
                  direction={Vector3.Up()}
                />
                </directionalLight>
              </Scene>
            </Engine>
          </div>
        </div>
      </div>
    );
  }
}

export default withBabylonJS(WithModel);
