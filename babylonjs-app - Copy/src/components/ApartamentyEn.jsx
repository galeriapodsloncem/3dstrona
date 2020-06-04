import React from 'react';
import {NavItem, Navbar, Icon, Button,  Col, CardTitle, Card, Row, CardPanel, MediaBox, Divider, Modal} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import 'materialize-css';
import ListaApartamentow from './ListaApartamentow'
import YouTube from 'react-youtube';


  const ListaApartamentowOfferEn = ({ listaApartamentow }) => {

    const cardsArray = ListaApartamentow.map(ListaApartamentow => (

     

      <Col
      m={5}
      s={12}
      push="m1"
      
    >
      <Card
          >
          
        <img
    alt=""
    src={require(`./${ListaApartamentow.img1}.jpg`)}
    width="100%"
  />
             <div className="table">
      <td>
     <MediaBox
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={require(`./${ListaApartamentow.img2}.jpg`)}
    width="100%"
  />
</MediaBox>
</td>
<td>
<MediaBox
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={require(`./${ListaApartamentow.img3}.jpg`)}
    width="100%"
  />
</MediaBox>
</td>
<td>
<MediaBox
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={require(`./${ListaApartamentow.img4}.jpg`)}
    width="100%"
  />
</MediaBox>
</td>
<td>
<MediaBox
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={require(`./${ListaApartamentow.img5}.jpg`)}
    width="100%"
  />
</MediaBox>
</td>
</div>

          <h4 className="center">{ListaApartamentow.enname}</h4>
          <Row></Row>
   
        <p3>{ListaApartamentow.endescription}</p3>
        

        <br></br>
        <Divider/>
        <div  style={{
    marginTop: '22px'
  }}
  >
        <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green" 
   
  >Close</Button>
  ]}
  
  bottomSheet={false}
  fixedFooter={false}
  header={ListaApartamentow.plname}
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}

  trigger={<Button className="red" node="button">YouTube</Button>}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </p>
<div className=" center"> 
  <YouTube key="1" videoId={ListaApartamentow.videoid}  />;
  </div>

</Modal>
<div className="right">

</div>

</div>
      </Card>
    </Col>
    ));
    








  
    return (
      
      <div>
        <Row>
          <Col
           m={10}
           s={12}
           push="m1"
           >
        <CardPanel className="white ">
      <span className="black-text">
        For a simpler card with less markup, try using a card panel which just has padding and a shadow effectFor a simpler card with less markup, try using a card panel which just has padding and a shadow effectFor a simpler card with less markup, try using a card panel which just has padding and a shadow effectFor a simpler card with less markup, try using a card panel which just has padding and a shadow effect
      </span>
     
    </CardPanel>
    </Col>
        </Row>
        <Row>
        {cardsArray}
        </Row>
      </div>
    );


}
export default ListaApartamentowOfferEn;