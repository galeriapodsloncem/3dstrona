import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, FeatureGroup, Circle, Control, setPosition } from 'react-leaflet';
import {Marker, Popup} from 'react-leaflet';







class MapIn extends React.Component {

    
    
    componentDidMount() {
        setTimeout(() => {
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
            center: [50.062421, 19.938311],
            zoom: 19,
            
            edit: false,
            
            layers: [
                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
                    
                ]
           
        });
    


      

         L.marker([50.062421, 19.938311])
  .addTo(map)
  .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')



        return this.setState({
            map: map
        });
        
      }, 100)
      
      

    }


    
    
    render() {
        
        return (
          
          
          
            
          <div id="map" style={{ height: 400 }}/>
            
        
        
        )
    }
  }
export default MapIn;



    