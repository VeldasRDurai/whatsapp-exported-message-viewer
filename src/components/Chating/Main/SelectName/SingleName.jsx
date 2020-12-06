import React from "react";
import styled , { css } from 'styled-components';

const Div = styled.div`
    font-size:14px;
    font-family:system-ui;
    font-weight:500;
    letter-spacing:0.2px;
    color     : #767676 ;
    padding:6px 6px 6px 50px;
    cursor:pointer;
    border-radius: 15px 15px 15px 15px;
    /*  background-color: #e8e8ff ;  BLUE
        color: #1a73e8; */
    &:hover {    
        /*  background-color: #e8ffe8; GREEN
            color:#188038;  */
        background-color: #f1f3f4;
    }
    ${ ({ name , selectedName }) => {
        return selectedName === name && css`
            background-color:#ffe8e8;
            color: #dd372d;
            font-weight:700;
        `
    }}
`

const SingleName = ({ name , selectedName , selectNewName , setShowSelectName }) => {
    return (
        <Div  name={name} selectedName={selectedName} 
            onClick={ () => {selectNewName(name);setShowSelectName(false)} } >
            &#9775; &nbsp;&nbsp;&nbsp;&nbsp;{name}
        </Div>
    );
}

export default SingleName