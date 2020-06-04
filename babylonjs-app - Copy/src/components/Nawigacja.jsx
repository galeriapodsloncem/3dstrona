import React from 'react';
import {NavItem, Navbar, Icon, Divider} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import 'materialize-css';
import logo from './logo apartamenty.png'



const Nawigacja = () => {
return(
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
  <NavItem className=" grey-text text-darken-2" href="home">
      Home
    </NavItem>


    <NavItem className=" grey-text text-darken-2" href="about">
     O Nas
    </NavItem>
    <NavItem className=" grey-text text-darken-2" href="Apartamenty">
     Apartamenty
    </NavItem>
    <NavItem className=" grey-text text-darken-2" href="Location">
     Lokalizcja
    </NavItem>
    <NavItem className=" grey-text text-darken-2" href="Offer">
     Oferta dla Firm
    </NavItem>
    <NavItem className=" grey-text text-darken-2" href="contact">
     Kontakt
    </NavItem>

</Navbar>
)
}
export default Nawigacja;