import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    background-color: rgb(6, 215, 85);
    color: white;
    cursor: pointer;
    margin: 0px 0px 0px 5px;
    padding: 5px;
    border-radius: 15px;
    box-sizing:border-box;
    &:hover{
        background-color: white;
        color: rgb(6, 215, 85);
    }
`

const Click = ({ value , onClick }) => {
    return (
        <Div onClick={onClick} > 
            {value} 
        </Div>
    );
}

export default Click;