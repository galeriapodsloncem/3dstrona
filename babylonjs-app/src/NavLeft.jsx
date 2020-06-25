import React from "react";
import {
  Icon,
  Button,
  SideNav,
  SideNavItem,
  Dropdown,
  Divider, Row, Col
} from "react-materialize";
import "materialize-css";

class NavLeft extends React.Component {
  render() {
    return (
      <div>
        
        <Row>
        <div className="show-on-med-and-down"></div>
        
        <div className="hide-on-med-and-down">
        <SideNav
         
          id="SideNav"
          options={{
            draggable: true,
            inDuration: 222,
            
          }}
          //trigger={<Button node="button">SIDE NAV DEMO</Button>}
        >
          <SideNavItem
            user={{
              //background:
                //"https://pune365.com/wp-content/uploads/2017/05/painting.jpg",
              //email: "John Doe",
              image: 'https://images-platform.99static.com/h4rMGnm4qsdEqJssWRzQDcXyv7c=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/104/104152/attachment_104152339',
              name: <p1  className="black-text">Witaj, Gościu</p1>,
            }}
            userView
          />
          <Row></Row>
          <SideNavItem className="BtnNav z-depth-3"  href="home">Home</SideNavItem>
 
          <SideNavItem className="BtnNav z-depth-3" href="wystawy">Aktualne Wystawy</SideNavItem>
     
          <SideNavItem className="BtnNav z-depth-3" href="recepcja">
                                       Zwiedzanie 3D {" "}
          </SideNavItem> 
           
          <SideNavItem className="BtnNav z-depth-3" href="wystawy">Cyber Wystawy</SideNavItem>
         
          <SideNavItem className="BtnNav z-depth-3">
          <Dropdown 
            id="Dropdown_8"
            options={{
              alignment: "center",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: true,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={<p > Nasze zbiory</p>}
          >
            <a href="plakatyfilmowe">Plakaty Filmowe</a>
            <Divider />
            <a href="plakatypolityczne">Plakaty Polityczne </a>
            <Divider />
            <a href="plakatyteatralne">Plakaty Teatralne </a>
            <Divider />
            <a href="plakatyspolecznoreklamowe">Plakaty Społeczno-reklamowe </a>
            <Divider />
            <a href="meble">Meble</a>
            <Divider />
            <a href="lampy">Oświetlenie </a>
            <Divider />
            <a href="sztukauzytkowa">Sztuka Użytkowa </a>
            <Divider />
            <a href="wystawyczasowe">Wystawy Czasowe </a>
          </Dropdown>
          </SideNavItem>
          
          <SideNavItem className="z-depth-3 BtnNav" href="sprzedaz">Sprzedaz</SideNavItem>
     
          <SideNavItem className="z-depth-3 BtnNav" href="aukcje">Aukcje</SideNavItem>
          
          
          <SideNavItem className="z-depth-3 BtnNav" href="artysci">Artysci</SideNavItem>
          
          <SideNavItem className="z-depth-3 BtnNav" href="settings">Twoje Konto</SideNavItem>
          <SideNavItem className="z-depth-3 BtnNav" href="wystawy">Jak Wystawic</SideNavItem>
         
          <SideNavItem className="z-depth-3 BtnNav" href="wystawy">Kontakt</SideNavItem>
          <SideNavItem className="z-depth-3 BtnNav" href="rezerwacje">Zarezerwuj Powierzchnie</SideNavItem>
          
        </SideNav>
        
        </div>
        </Row>
        
      </div>
    );
  }
}
export default NavLeft;
