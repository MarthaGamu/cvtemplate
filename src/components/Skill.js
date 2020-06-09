import React from 'react'
import styled from 'styled-components';
import css from '../images/css.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';

const Skills =styled.div`
width:100vw;
height:400px;

color:black;

.skillContainer h1{
    text-align:center;
    padding:40px 0px 10px 0px;
    text-transform:uppercase;
    font-family: 'Capriola', sans-serif;
    }
    .skills{
        
        display:flex;
        justify-content:center;
        padding-top:40px;
    }
    .skillItem{
        width:150px;
        height:50px;
        padding:30px 30px 30px 30px;
        background:black;
        color:white;
        margin-left:10px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        
    }
    .skillItem h1{
        padding:0;
        margin:0;
    }
    
`; 
function Skill() {
    return (
        <Skills>
        <div className='skillContainer'>
            <h1>My Skill Set</h1>
            <div className='skills'>
                <div className='skillItem'>
                    <h2> CSS3</h2>
                    </div>
                    <div className='skillItem'>
                    <h2>HTML5</h2>
                    </div>
                    <div className='skillItem'>
                   <h2> JAVASCRIPT</h2>
                    </div>
                   <div className='skillItem'>
                  <h2> REACT</h2>
                    </div>
                </div>
        </div>
        </Skills>
    )
}

export default Skill
