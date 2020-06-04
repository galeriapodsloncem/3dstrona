import React from 'react';
import {NavItem, Navbar, Icon, Button,  Col, CardTitle, Card, Row, CardPanel, MediaBox, Divider, Modal, DatePicker, Form} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import 'materialize-css';
import ListaApartamentow from './ListaApartamentow'
import YouTube from 'react-youtube';
import Booking from './Booking'


  const ListaApartamentowOffer = ({ listaApartamentow }) => {
    

    const cardsArray = ListaApartamentow.map(ListaApartamentow => (

     

      <Col
      m={5}
      s={12}
      push="m1"
      
    >
      <Card className="z-depth-5"
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

          
          <Row></Row>
   
        <p3>{ListaApartamentow.pldescription}</p3>
        

        <br></br>
        <Row></Row>
        <Divider/>
        <div  style={{
    marginTop: '22px'
  }}
  >
        
  <Row>
  <Col>
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

  trigger={<Button className="red" node="button">Wideo lokalu</Button>}
>
  <p>
    
  </p>
<div className=" center"> 
  <YouTube key="1" videoId={ListaApartamentow.videoid}  />;
  </div>

</Modal>
</Col>
<Col>

<a className="btn red "  target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"> zarezerwój na Airbnb</a>
</Col>
<Col>
<a className="btn red"  target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"> zarezerwój na Booking.com</a>

</Col>
</Row>


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
       
 
    </Col>
        </Row>
        <Row>
        {cardsArray}
        </Row>
      </div>
    );


}
export default ListaApartamentowOffer;