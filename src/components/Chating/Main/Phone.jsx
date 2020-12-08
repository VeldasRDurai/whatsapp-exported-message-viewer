import React , { useState } from "react";
import styled, { css } from "styled-components";

import ChatHead from "./Phone/ChatHead";
import Chat from "./Phone/Chat";

const Div = styled.div`
    background-color:black;
    ${ ({fullScreen}) => {
        if(fullScreen){ 
            return css`
            margin:0px;
            height:100vh;
            width:100vw;
            position:fixed;
            top:0px;left:0px;` ;
        } else {
            return css`
            margin:10px;
            height:560px;
            width:280px;
            border:10px solid black;
            border-top:40px solid black;
            border-bottom:40px solid black;
            border-radius:35px;
            box-sizing:border-box;` ;
        }
    }};
`

const Phone = ({ history , yourName }) => {
    const [ fullScreen , setFullScreen ] = useState(false);
    return (
        <Div fullScreen={fullScreen} >
            <ChatHead  fullScreen={fullScreen}
                toggleFullScreen={()=>fullScreen?setFullScreen(false):setFullScreen(true)} />
            <Chat fullScreen={fullScreen} 
                history={history} 
                yourName={yourName} />
        </Div>
    );
}

export default Phone;