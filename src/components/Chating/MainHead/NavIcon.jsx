import React  from "react"; 
import styled from 'styled-components';

const Div = styled.div`
    font-size: 23px;
    border-radius: 20px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(95 99 104);
    &:hover {
        background-color:rgb(240 240 240);
    } 
`

const NavIcon = () => {
    return (
        <Div >
            &#9776;
        </Div>
    );
}

export default NavIcon; 