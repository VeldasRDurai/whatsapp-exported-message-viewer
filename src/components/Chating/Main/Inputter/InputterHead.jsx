import React from "react";
import styled from "styled-components";

const Div = styled.div`
    font-size:30px;
    >:nth-child(3){
        font-size:12px;
        font-family:cursive;
    }
    @media ( max-width: 650px){
        text-align:center;
    }
`

const InputterHead = () => {
    return (
        <Div>
            <div> {"Exported Chat"} </div>
            <div> {"Viewer For WhatsApp"} </div>
            <div> {"COPY PASTE YOUR EXPORTED CHAT'S CONTENT HERE... 👇"}</div>
        </Div>
    );
}

export default InputterHead;