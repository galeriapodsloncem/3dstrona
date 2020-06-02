import React, { Component } from 'react'

import { Engine, Scene, withBabylonJS, Model, Sphere } from 'react-babylonjs'
import { Vector3, Color3, ActionManager, SetValueAction,  } from '@babylonjs/core';
import { PrismCode } from 'react-prism';
import ass from "C:/Users/kjuba/OneDrive/Dokumenty/GitHub/3dstrona/babylonjs-app/src/sdf/elewacja.gltf"

// import './WithModel.css'

class WithModel extends Component 
{
  

  render() {
    //let baseUrl = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/";
    let baseUrl = ass;
    return (
      <div>
        <div className="row">
          
          
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
              <Scene>
                <arcRotateCamera name="camera1" alpha={Math.PI / 2} beta={Math.PI / 2} radius={9.0} target={Vector3.Zero()} minZ={0.001} />
                <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
                <Model
        //rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}
        rootUrl={`${baseUrl}`}
        scaling={new Vector3(200, 200, 200)}
      />
      <Sphere>

      </Sphere>
               
              </Scene>
            </Engine>
          </div>
         
        </div>
      </div>
    )
  }
}

export default withBabylonJS(WithModel)