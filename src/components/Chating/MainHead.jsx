import React from "react";
import styled from "styled-components";

import NavIcon from "./MainHead/NavIcon";

const Div = styled.div`
    height: 8vh;
    padding: 8px;
    background-color: white;
    /* display: flex; */
    display: none;
    align-items: center;
    justify-content: flex-start;
    font-size: 30px;
    border-bottom: 1px solid rgb(236, 239, 241);
    @media ( max-width: 650px){
        background-color: black;
        color:white;
        justify-content: center;
        >:nth-child(1){display:none;}
    }
`

const MainHead = () => {

    return (
        <Div>
            <NavIcon /> 
            <div> Veldas R Durai </div>
        </Div>
    );
}

export default MainHead;