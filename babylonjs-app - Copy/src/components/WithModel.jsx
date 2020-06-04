import React, { Component } from "react";
import { Engine, Scene, withBabylonJS, Model } from "react-babylonjs";
import {
  Color4,
  Vector3,
  Color3,
  FresnelParameters,
  ActionManager,
  SetValueAction,
} from "@babylonjs/core";


// import './WithModel.css'

class WithModel extends Component {
  render() {
    let baseUrl =
      "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/";

    return (
      <div>
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Engine
              antialias={true}
              adaptToDeviceRatio={false}
              canvasId="sample-canvas"
            >
              <Scene clearColor={new Color4(0.1, 0.5, 0.5, 0.1)}>
                <pointLight
                  name="light22"
                  intensity={0.8}
                  position={new Vector3(11, 0, 30)}
                  specularPower={12}
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


                <hemisphericLight
                  name="hemi-light"
                  intensity={0.2}
                  direction={Vector3.Up()}
                  diffuseColor={Color3.Black()}
                  emissiveColor={new Color3(1, 0.5, 0.5)}
                  
                  position={new Vector3(-4, 46, -40)}
                  
                />

                <arcRotateCamera
                  name="arc"
                  target={new Vector3(2, 0, 2)}
                  alpha={Math.PI / 4}
                  beta={0.5 + Math.PI / 16}
                  radius={15}
                  minZ={0.0001}
                  wheelPrecision={50}
                  lowerRadiusLimit={8}
                  upperRadiusLimit={20}
                  upperBetaLimit={Math.PI / 2}
                />

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
                  sceneFilename="APARTAMENT5.stl"
                  scaling={new Vector3(0.4, 0.4, 0.4)}
                  position={new Vector3(0, 2.5, 0)}
                  receiveShadows={false}
                >
                  <standardMaterial
                    name=""
                    diffuseColor={Color3.Black()}
                    specularColor={Color3.Black()}
                  />
                              <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />

                </model>

                
              </Scene>
            </Engine>
          </div>
        </div>
      </div>
    );
  }
}

export default withBabylonJS(WithModel);