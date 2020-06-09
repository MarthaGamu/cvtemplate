import React from 'react'
import styled from 'styled-components'
import botique from '../images/botique.jpg';
import hotel from '../images/hotell.jpg';
import restaurant from '../images/restaurant.jpg';
import fruits from '../images/fruits.jpg';
import online from '../images/online.jpg';
import apple from '../images/online.jpg';


const Projects = styled.div`

height:550px;
width:100vw;
border:5px solid white;
text-align:center;
.grid{
    display:grid;
    grid-template-columns: 32.5vw 32.5vw 32.5vw;
    grid-template-rows:250px 250px;
    grid-gap:10px;
    background-color:white;
    z-index:1;
    cursor:pointer;
  transition: width 2s, height 4s;
}

.gridItems{
    background-color:black;
    position:relative;
    border: 0px solid black;
    .Innergrid{
        display:none;
    }
}
.gridItems:hover{
    background:gray;
    
    border:12px solid white;
    .Innergrid{
        display:block;
        color:black;
        font-size:30px;
        position:absolute;
        top:5%;
        left:5%;
        right:5%;
        bottom:5%;
        
        padding:50px 60px 50px 60px;
        border: 7px solid black;
        transition-property:border;
        transition-delay:100s;
        transition-duration:2s;

        
        color:black;
        
        .more{
            padding:8px;
            font-weight:500px;
            background:black;
            color:white;
            border:unset;
        }
        
    }
    
}
.gridItems  img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.gridItems img:hover{
    display:none;
    
}
`;
function Portfolio() {
    return (
        <Projects>
        <div className='grid'>
            <div className='gridItems'>
                <img src={botique} alt='botique'/>
                <div className='Innergrid'>
                    <h4>Boutique</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='gridItems'>
                <img src={hotel} alt='hotel'/>
                <div className='Innergrid'>
                    <h4>Hotel</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='gridItems'>
                <img src={restaurant} alt='restaurant'/>
                <div className='Innergrid'>
                    <h4>Restaurant</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='gridItems'>
                <img src={fruits} alt='fruits'/>
                <div className='Innergrid'>
                    <h4>Grocery</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='gridItems'>
                <img src={online} alt='online'/>
                <div className='Innergrid'>
                    <h4>Online</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
                <div className='gridItems'>
                <img src={apple} alt='apple'/>
                <div className='Innergrid'>
                    <h4>Technology</h4>
                    <button className='more'>Read More</button>
                    </div>
                </div>
        </div>
        </Projects>
    )
}

export default Portfolio
