import React from 'react';
import './App.css';
import {Row, Col, Card} from 'react-materialize';
import 'materialize-css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import Scena from './Scena'
import NavLeft from './NavLeft.jsx'
import WithModel from './components/3d/WithModel.jsx'
import Wystawy from './components/elemntyNawigacji/wystawy'
import Zbiory from './components/elemntyNawigacji/Zbiory'
import PlakatyFilmowe from './components/Ziory/PlakatyFilmowe'
import PlakatyPolityczne from './components/Ziory/PlakatyPolityczne'
import Lampy from './components/Ziory/Lampy'
import Meble from './components/Ziory/Meble'
import PlakatyTeatralne from './components/Ziory/PlakatyTeatralne';
import ZarezerwojPowierzchnie from './components/elemntyNawigacji/ZarezerwojPowierzchnie'
import SztukaUzytkowa from './components/Ziory/SztukaUzytkowa';
import PlakatySpolecznoReklamowe from './components/Ziory/PlakatySpolecznoReklamowe';
import Aukcje from './components/elemntyNawigacji/Aukcje';
import Sprzedaz from './components/elemntyNawigacji/Sprzedaz';
import Home from './components/elemntyNawigacji/Home';
import Artysci from './components/Ziory/Artysci';
import Settings from './components/elemntyNawigacji/Settings'
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
            <Route path="/artysci" component={Artysci}/>
            <Route path="/settings" component={Settings}/>
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