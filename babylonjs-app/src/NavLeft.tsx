import React, {  } from 'react';
import { Icon, Button, SideNav, SideNavItem} from 'react-materialize';
import 'materialize-css';
import { className } from '@babylonjs/core';

class NavLeft extends React.Component {
    render(){
      return (
<div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav
    className=""
    id="SideNav-10"
    options={{
      draggable: true
      
    }}
   
  >
    <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'jdandturk@gmail.com',
        image: 'static/media/react-materialize-logo.824c6ea3.svg',
        name: 'John Doe'
      }}
      userView
    />
    <SideNavItem
      href="#!icon"
      
    >
      First Link 
    </SideNavItem>
    <SideNavItem href="#!second">
      Second Link
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>
      Subheader
    </SideNavItem>
    <SideNavItem
    
      href="#!third"
      
      
    >
      Third Link With Waves
    </SideNavItem>
  </SideNav>
</div>
  );
}
}
export default NavLeft;