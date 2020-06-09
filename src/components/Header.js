import React from 'react'
import styled from 'styled-components';

const Heading = styled.div`
width:100vw;
background:black; 
fontSize:20px;
width:100vw;
height:100vh;
color:white;


.headerContainer{
   width:100vw;
    height:12vh;
background:black;
  position:fixed;
    display:flex;
    font-family: 'Harmattan', sans-serif;
    font-size:20px;
    
    box-sizing:border-box;
    z-index:2;

}
.left{
    flex:1;
    
    padding:5px;
    

}
.left h4{
   
    font-family: 'Kite One', sans-serif;
}
.firstname{
    width:150px;
    height:30px;
    margin-top:12px;
    text-align:center;
    border-style: inset;
    border-width:thick;
    text-transform:uppercase;
    margin-left:10px;
}

.right{
    flex:2;
    
    
}
ul{
    display:flex;
    list-style-type: none;
    justify-content: flex-end;
    margin-right:30px;
    
}
li{
    
    margin-left:20px;
}
.aboutInfo{
    
    text-align:center;
    
    padding-top:35vh;
    
}
.aboutInfo h1{
text-transform:uppercase;
font-size:3rem;
font-family: 'Capriola', sans-serif;
}
.aboutInfo p{
    font-size:18px;
}
.portfolio{
    margin-top:17vh;
    text-align:center;
    font-family: 'Harmattan', sans-serif;
}
.portfolio h3{
    margin:0;
    padding:0;
}
.portfolio i{
    font-size:36px;
}
.download{
    padding:8px;
    font-weight: bold;
    margin-left:20px;
    margin-right:30px;
}
.menuList{
    padding:8px;
    padding-left:40px;
    font-weight:bold;
}
.download i{
    font-size:18px;
    
}
`;



function Header() {
    return (
        
           <Heading>
               {/**Left Side */}
            <div className='headerContainer'>
            <div className='left'>
                <div className='firstname'>
             <h3>Martha</h3>
             </div>
             
            </div>
             {/**Right  Side */}
            <div className ='right'>
                <nav>
                    <ul>
                        <li className='menuList'>ABOUT</li>
                        <li className='menuList'>PORTFOLIO</li>
                        <li className='menuList'>CONTACT</li>
                        <li className='menuList'>DOWNLOAD CV 
</li>
                        </ul>
                    </nav>
            </div>
            </div>
            <div className='aboutInfo'>
                <h1>Front-end Developer</h1>
                <p>I help start-ups , small businesses and agencies achieve
                     high quality websites and exceptional user experience.<br/>I achieve it on time and on budget. </p>
            </div>
            
            <div className='portfolio'>
                <h3>VIEW PORTFOLIO</h3>
                <i class="fa fa-angle-down"></i>
            </div>
           </Heading>
       
    )
}

export default Header
