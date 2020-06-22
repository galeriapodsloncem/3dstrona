import React from 'react';
import './App.css';
import {Row, Col, Card} from 'react-materialize';
import 'materialize-css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import Scena from './Scena'
import NavLeft from './NavLeft.jsx'
import WithModel from './WithModel.jsx'
import Wystawy from './wystawy'
import Zbiory from './Zbiory'
import PlakatyFilmowe from './PlakatyFilmowe'
import PlakatyPolityczne from './PlakatyPolityczne'
import Lampy from './Lampy'
import Meble from './Meble'
import PlakatyTeatralne from './PlakatyTeatralne';
import ZarezerwojPowierzchnie from './ZarezerwojPowierzchnie'
import SztukaUzytkowa from './SztukaUzytkowa';
import PlakatySpolecznoReklamowe from './PlakatySpolecznoReklamowe';
import Aukcje from './Aukcje';
import Sprzedaz from './Sprzedaz';
import Home from './Home';

//import GUI from './WithGUI'
class App extends React.Component {
render(){
  return (
    <div  id="BgHome" className="App">
      
      <Row>
        <Col
         m={2}
         s={12}
         offset=""
         className="z=depth-4">
        
        <NavLeft/>
        </Col>
        <Col 
         m={10}
         s={12}
         offset="">
           
        <Row>
        <BrowserRouter>
            
            
            <Switch>
  
            <Route path="/wystawy" component={Wystawy} />
            <Route path="/recepcja" component={WithModel} />
            <Route path="/zbiory" component={Zbiory} />
            <Route path="/plakaty" component={PlakatyFilmowe} />
            <Route path="/plakatyfilmowe" component={PlakatyFilmowe} />
            <Route path="/plakatypolityczne" component={PlakatyPolityczne} />
            <Route path="/plakatyteatralne" component={PlakatyTeatralne} /> 
            <Route path="/plakatyspolecznoreklamowe" component={PlakatySpolecznoReklamowe} />  
            <Route path="/meble" component={Meble} />
            <Route path="/lampy" component={Lampy} /> 
            <Route path="/sztukauzytkowa" component={SztukaUzytkowa} />
            <Route path="/rezerwacje" component={ZarezerwojPowierzchnie} /> 
            <Route path="/aukcje" component={Aukcje} />
            <Route path="/sprzedaz" component={Sprzedaz}/>
            <Route path="/home" component={Home}/>
            </Switch>
            </BrowserRouter>
        </Row>
        <Row>
          
          
        </Row>
        </Col>
      </Row>

    </div>
  );
}
}
export default App;