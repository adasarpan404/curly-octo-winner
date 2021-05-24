import React from 'react'
import styled from "styled-components"
function Section({ title, description, leftButton, rightButton, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                    {rightButton &&
                        <RightButton>
                            {rightButton}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImage}")`};
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ItemText = styled.div`
padding-top: 10vh;
 text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
margin-button: 30px;
@media (max-width: 768px){
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
`

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black; 
`
const DownArrow = styled.img`
 margin-top: 20px;
 height: 40px;
 overflow-x: hidden;
 animation: animateDown infinite 1.5s; 
`
const Buttons = styled.div`
`