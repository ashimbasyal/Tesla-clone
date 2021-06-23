import React from 'react'
import styled from "styled-components"

function Section(props){
    return (
        
        <Wrap bgImage={props.backgroundImg}> 
            
            <Itemtext>
            <h1>
            {props.title}
            </h1>
            <p>{props.description}</p>
                </Itemtext>
                <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {props.LeftButton}
                </LeftButton>
                { props.RightButton    &&
                <RightButton>
                {props.RightButton}
            </RightButton>

                }
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div
`width:100vw;
height:100vh;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props=> `url("/images/${props.bgImage}")`}
`

const Itemtext =styled.div
`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div
`   
    display:flex;
    margin-bottom:30px;
    @media (max-width : 768px) {
        flex-direction : column;
    }
`

const LeftButton = styled.div
`
    Background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    border-radius:100px;
    opacity:0.85;
    text-transform: upercase;
    font-sizes:12px;
    cursor:pointer;
    margin:8px;
    padding:10px;

    
`
const RightButton =styled(LeftButton)
`
background-color:white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img
    `
    height:40px;
    animation:animateDown infinite 1.5s;
`
const Buttons =styled.div
    `
    `
