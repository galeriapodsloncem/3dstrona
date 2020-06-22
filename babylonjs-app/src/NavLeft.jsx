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
        <div className="show-on-med-and-down">
        <SideNav
          className="SideNav "
          id="SideNav"
          options={{
            draggable: true,
            inDuration: 222,
            
          }}
          trigger={<Button node="button">Menu</Button>}
        >
          <SideNavItem
            user={{
              //background:
                //"https://pune365.com/wp-content/uploads/2017/05/painting.jpg",
              //email: "John Doe",
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Galeria_Karstadt_Kaufhof_Logo.svg/1200px-Galeria_Karstadt_Kaufhof_Logo.svg.png',
              name: <p1  className="black-text">Witaj, Gościu</p1>,
            }}
            userView
          />
          <Row></Row>
          <SideNavItem id="BtnNav"  href="home">Home</SideNavItem>

          <SideNavItem id="BtnNav" href="wystawy">Aktualne Wystawy</SideNavItem>
    
          <SideNavItem id="BtnNav" href="recepcja">
             Zwiedzanie 3D {" "}
          </SideNavItem>
          
          <SideNavItem id="BtnNav" href="wystawy">Cyber Wystawy</SideNavItem>
        
          <SideNavItem id="BtnNav">
          <Dropdown 
            id="Dropdown_6"
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
          
          <SideNavItem id="BtnNav" href="sprzedaz">Sprzedaz</SideNavItem>
     
          <SideNavItem id="BtnNav" href="aukcje">Aukcje</SideNavItem>
          
          
         
          
          <SideNavItem id="BtnNav" href="wystawy">Twoje Konto</SideNavItem>
          <SideNavItem id="BtnNav" href="wystawy">Jak Wystawic</SideNavItem>
         
          <SideNavItem id="BtnNav" href="wystawy">Kontakt</SideNavItem>
          <SideNavItem id="BtnNav" href="rezerwacje">Zarezerwuj Powierzchnie</SideNavItem>
          
        </SideNav>
        
        </div>
        <div className="hide-on-med-and-down">
        <SideNav
          className="SideNav "
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
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Galeria_Karstadt_Kaufhof_Logo.svg/1200px-Galeria_Karstadt_Kaufhof_Logo.svg.png',
              name: <p1  className="black-text">Witaj, Gościu</p1>,
            }}
            userView
          />
          <Row></Row>
          <SideNavItem id="BtnNav"  href="home">Home</SideNavItem>

          <SideNavItem id="BtnNav" href="wystawy">Aktualne Wystawy</SideNavItem>
    
          <SideNavItem id="BtnNav" href="recepcja">
             Zwiedzanie 3D {" "}
          </SideNavItem>
          
          <SideNavItem id="BtnNav" href="wystawy">Cyber Wystawy</SideNavItem>
        
          <SideNavItem id="BtnNav">
          <Dropdown 
            id="Dropdown_6"
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
          
          <SideNavItem id="BtnNav" href="sprzedaz">Sprzedaz</SideNavItem>
     
          <SideNavItem id="BtnNav" href="aukcje">Aukcje</SideNavItem>
          
          
         
          
          <SideNavItem id="BtnNav" href="wystawy">Twoje Konto</SideNavItem>
          <SideNavItem id="BtnNav" href="wystawy">Jak Wystawic</SideNavItem>
         
          <SideNavItem id="BtnNav" href="wystawy">Kontakt</SideNavItem>
          <SideNavItem id="BtnNav" href="rezerwacje">Zarezerwuj Powierzchnie</SideNavItem>
          
        </SideNav>
        
        </div>
        </Row>
        
      </div>
    );
  }
}
export default NavLeft;
