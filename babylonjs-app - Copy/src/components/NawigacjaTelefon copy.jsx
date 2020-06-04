import React from 'react';
import {NavItem, Navbar, Icon, Button, Row, Card, SideNav, SideNavItem} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import 'materialize-css';
import Col from 'react-materialize/lib/Col';
import Divider from 'react-materialize/lib/Divider';



const Nawigacja = () => {
return(
  
  <Row>
      <div className="center margin-bottom:50">
      <Button
    large
    node="a"
    className="white black-text"
    href="home"
  >
Apartamenty Pod Słońcem  
  </Button>
  <Row></Row>
  </div>
    <div className=" left ">
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav 
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button className="  white black-text  " node="button">Menu</Button>}
  >
    <SideNavItem
      href="Home"
    >
      Home
    </SideNavItem>
    <Divider/>
    <SideNavItem
      href="About"
    >
      About
    </SideNavItem>
    <Divider/>
    <SideNavItem
      href="Apartamenty"
    >
      Apartamenty
    </SideNavItem>
    <Divider/>
    <SideNavItem
      href="Location"
    >
      Location
    </SideNavItem>
    <Divider/>
    <SideNavItem
      href="Contact"
    >
      Contact
    </SideNavItem>
  </SideNav>


</div>










  <Col 
  m={10}
  s={11}
  offset="m1"
  >
    

    
<Navbar className="white z-depth-4 hide-on-med-and-down"
  alignLinks="right"
  brand={<a className="brand-logo black-text " href="home">prof. Tadeusz Tatara  </a>}
  leftLogo
  menuIcon={<Icon className="blue">menu</Icon>}
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



  <Button
    medium
    node="a"
    className="blue darken-3"
    href="Apartamenty"
  >
    Apartamenty
    <Icon right>
      cloud
    </Icon>
  </Button>
  <Button
    medium
    node="a"
    className="blue darken-3"
    href="location"
  >
    Lokalizacja
    <Icon right>
      error
    </Icon>
  </Button>
  <Button
    medium
    node="a"
    className="blue darken-3"
    href="contact"
  >
    Home
    <Icon right>
      description
    </Icon>
  </Button>

  <Button
    medium
    node="a"
    className="blue darken-3"
    href="Offer"
  >
    O nas
    <Icon right>
      list
    </Icon>
  </Button>

 
</Navbar>

</Col>
</Row>
)
}
export default Nawigacja;