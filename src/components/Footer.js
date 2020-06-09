import React from 'react'
import styled from 'styled-components';

const FooterArea =styled.div`
width:100vw;
height:100px;
background:black;
text-align:center;
color:white;
border-top:1px solid white;
padding-top:30px;
font-family: 'Harmattan', sans-serif;
font-size:18px;

.footerContainer{
  display:flex;
}
.copyright{
  flex:1;
}
.upwardArrow{
  flex:2;
  
  display:flex;
  justify-content:flex-end;
  margin-right:50px;
  cursor:pointer;
 
}
.arrow{
  display:flex;
  justify-content:center;
  align-items:center;
  
  width:50px;
  height:50px;
  border-radius:50%;
  color:black;
  background:white;
  
}

`;

function Footer() {
    return (
      <FooterArea>
        <div className ='footerContainer'>
        <div className='copyright'>
          Designed and Developed by Martha G Mandizvidza 2020.
        </div>

        <div className='upwardArrow'>
          <div className='arrow'><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
          </div>
        </div>
        </FooterArea>
    )
}

export default Footer
