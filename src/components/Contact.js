import React from 'react'
import styled from 'styled-components'

const ContactSection =styled.div`
width:100vw;
height:400px;
text-align:center;
background:black;
color:white;

.contactContainer h1{
padding-top:100px;
text-transform: uppercase;
font-family: 'Capriola', sans-serif;
}

.call{
    font-weight:bold;
}
.email{
    font-weight:bold;
    font-size:20px;
    margin-top:30px; 
    padding:5px 25px 5px 25px; 
}
.email i{
    font-size:26px;
}

`;

function Contact() {
    return (
        <ContactSection>
        <div className='contactContainer'>
            <h1>Interested in hiring me.</h1>
           <p> <span className='call'>Call :</span> +447751099803</p>
            <button className='email'>Email Me </button>
        </div>
        </ContactSection>
    )
}

export default Contact
