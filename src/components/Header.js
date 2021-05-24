import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=" " />
            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="#">shop</a>
                <a href="#">Tesla Account</a>

            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top:0; 
left: 0;
right: 0;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
p{
    font-weight: 600; 
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
`
const RightMenu = styled.div`
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin-right: 10px; 
}
`