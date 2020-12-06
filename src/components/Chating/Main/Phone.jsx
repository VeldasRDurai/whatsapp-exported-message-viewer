import React from "react";
import styled from "styled-components";

import ChatHead from "./Phone/ChatHead";
import Chat from "./Phone/Chat";

const Div = styled.div`
    margin:10px;
    height:560px;
    width:280px;
    border:10px solid black;
    border-top:40px solid black;
    border-bottom:40px solid black;
    border-radius:35px;
    box-sizing:border-box;
    background-color:black;
`

const Phone = ({ history , yourName }) => {
    return (
        <Div>
            <ChatHead />
            <Chat history={history} yourName={yourName} />
        </Div>
    );
}

export default Phone;