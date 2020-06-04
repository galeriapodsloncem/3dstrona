import React, { Component, useState, setState  } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import M from 'react-materlize';
import {NavItem, Navbar, Icon, Select} from 'react-materialize';

import 'materialize-css';

import Nawigacja from './components/Nawigacja';
import Apartamenty from './components/Apartamenty';
import About from './components/About';
import AboutEn from './components/AboutEn';
import ApartamentyEn from './components/ApartamentyEn';
import Home from './components/Home';
import HomeEn from './components/HomeEn';
import Location from './components/Location';
import LocationEn from './components/LocationEn';
import Offer from './components/Offer';
import OfferEn from './components/OfferEn';
import Contact from './components/Contact';
import ContactEn from './components/ContactEn';
import NawigacjaTelefon from './components/NawigacjaTelefon'
import Button from 'react-materialize/lib/Button';



function App() {


  
    



  const handleLang = e =>
  {
    
    
    if (lang == "en") {
      localStorage.setItem("lang","pl");
  
    } else {
      localStorage.setItem("lang","en");
    };
    
    window.location.reload();
  }
var lang = localStorage.getItem("lang")


        return (
        
        
         

          <div className="App">
          
<Navbar className="white hide-on-med-and-down"
  alignLinks="right"
  brand={<p1 className="brand-logo grey-text text-darken-2">Pod Słońcem Apartamenty</p1>}
  leftLogo
  menuIcon={<p1 className="black-text">MENU</p1>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>

  <NavItem className=" grey-text text-darken-2" href={lang=="pl" ? 'home' : 'homeen'}>
  {lang=="pl" ? 'Home' : 'Home'}
    </NavItem>
    
    <NavItem className=" grey-text text-darken-2" href={lang=="pl" ? 'apartamenty' : 'apartamentyen'}>
    {lang=="pl" ? 'Apartamenty' : 'Apartments'}
    </NavItem>
    <NavItem className=" grey-text text-darken-2" href={lang=="pl" ? 'location' : 'locationen'}>
     {lang=="pl" ? 'Lokalizacja' : 'Location'}
    </NavItem>
    
    <NavItem className=" grey-text text-darken-2" href= {lang=="pl" ? 'contact' : 'contacten'}>
    {lang=="pl" ? 'Kontakt' : 'Contact'}
    </NavItem>
    
    <Button className="red"  onClick={handleLang} >
        {lang=="pl" ? 'en' : 'pl'} 
      </Button>

  </Navbar>
          <div className="hide-on-large-only">
          <NawigacjaTelefon/>
            
            </div>
            
            <div className="row"/>
            <div className="row">
            <div className="col s12 m12 l12 xl12">


              <BrowserRouter>
            {lang=="pl" ?
            
            <Switch>
  
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/apartamenty" component={Apartamenty} />
            <Route path="/location" component={Location} />
            <Route path="/offer" component={Offer} />
            <Route path="/:any" component={Home} />
            <Route path="/" component={Home} />
            
            </Switch>
            :
            <Switch>
                
            <Route path="/abouten" component={AboutEn} />
            <Route path="/homeen" component={HomeEn} />
            <Route path="/contacten" component={ContactEn} />
            <Route path="/apartamentyen" component={ApartamentyEn} />
            <Route path="/locationen" component={LocationEn} />
            <Route path="/offeren" component={OfferEn} />
            <Route path="/:any" component={HomeEn} />
            <Route path="/" component={HomeEn} />
            
            </Switch> }
            </BrowserRouter>
           
          </div>
          </div>
          </div>
          
      );
    }
    
   

export default App;
