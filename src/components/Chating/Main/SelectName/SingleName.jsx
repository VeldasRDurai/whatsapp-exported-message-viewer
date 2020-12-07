import React from "react";
import styled , { css } from 'styled-components';

import ProfileImg from "../Phone/ChatHead/ProfileImg";

const Div = styled.div`
    display:flex;
    align-items:center;
    font-size:14px;
    font-family:system-ui;
    font-weight:500;
    padding:6px 6px 6px 30px;
    cursor:pointer;
    color: #075e54;
    border: 1px #06d75500 solid;
    border-radius:47px 7px;
    &:hover {    
        background-color: #f1f3f4;
        color:#06d755;
        border: 1px #06d755 solid;
    }
    ${ ({ name , selectedName }) => {
        return selectedName === name && css`
            background-color: #06d755;
            color:#f1f3f4;
            border-radius:7px 47px;
            font-weight:700;
        `
    }}
`

const SingleName = ({ name , selectedName , selectNewName , setShowSelectName }) => {
    return (
        <Div  name={name} selectedName={selectedName} 
            onClick={ () => {selectNewName(name);setShowSelectName(false)} } >
            <ProfileImg /> &nbsp;&nbsp;&nbsp;&nbsp;{name}
        </Div>
    );
}

export default SingleName