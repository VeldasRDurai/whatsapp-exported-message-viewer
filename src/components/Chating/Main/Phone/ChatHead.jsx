import React from "react";
import styled from "styled-components";

import ProfileImg from "./ChatHead/ProfileImg";

const Div = styled.div`    
    background-color: rgb(7, 94, 84);
    height: 13%;
    display: grid;
    grid-template-columns: ${ ({fullScreen}) => {
        if(fullScreen){
            return "7vw 17vw 60vw 10vw 6vw";
        } else {
            return "15px 45px 150px 25px 20px";
        }
    }};
    justify-content: flex-start;
    align-items: center;
    color: white;
    font-size: 18px;
    border-radius: 5px 5px 0px 0px;
    >:nth-child(4){
        display:none;
    }

    @media ( max-width: 650px){
        >:nth-child(4){display:block;}
        >:nth-child(5){display:none; } 
    }
`

const ChatHead = ({ fullScreen , toggleFullScreen }) => {

    return (
        <Div fullScreen={fullScreen} >
            <div>{/*&#8678;*/}</div>
            <ProfileImg />
            <div> WhatsApp </div>
            <div onClick={toggleFullScreen} >⛶</div>
            <div>&#128269;</div> 
            <div>&#10247;</div>
        </Div>
    );
}

export default ChatHead;