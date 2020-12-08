import React from "react";
import styled, { css } from "styled-components";

const Div = styled.div`
    margin: 3px 10px;
    height: auto;
    width: auto;
    max-width: ${ ({fullScreen}) => fullScreen?"60vw":"165px" };
    color: black;
    box-shadow: grey 2px 2px 4px;
    border-radius: 7px;
    padding: 0px 10px;
    font-size: ${ ({fullScreen}) => fullScreen?"16px":"14px" };
    overflow-wrap: break-word;
    >:nth-child(1){
        font-size: 13px;
        font-weight: 600;
    }
    ${ ({name,yourName}) => {
        return (name===yourName) ? css`
            align-self:flex-end;
            background-color:#dcf8c6;
            >:nth-child(1){color:#44d19e;}
        `:css`
            align-self:flex-start;
            background-color:white;
            >:nth-child(1){color:rgb(33, 123, 236);}
        `;
    }};
`

const SingleChat = ({ date , time , name , chat , yourName , fullScreen}) => {
    // const style = {
    //     alignSelf:"flex-start",
    //     margin:"3px 10px 3px 10px ",
    //     height : "auto", 
    //     width : "auto", maxWidth : "165px" ,
    //     backgroundColor : "white",
    //     color:"black",
    //     boxShadow :"2px 2px 4px grey" ,
    //     borderRadius : "7px",
    //     padding : "0px 10px 0px 10px",
    //     fontSize:"14px",
    //     wordWrap:"break-word"
    // };
    // const nameStyle = {
    //     color:"rgb(33 123 236)",
    //     fontSize:"13px",
    //     fontWeight:"600"
    // };

    // if (name === yourName){
    //     style.backgroundColor = "#dcf8c6";
    //     style.alignSelf = "flex-end";
    //     nameStyle.color = "#44d19e" ;
    // }

    while( chat.indexOf("&1001;")!==-1 ){                 // Changing all \n to &1001;
        chat = chat.replace("&1001;","\n");
    }
    while( chat.indexOf("&1002;")!==-1 ){                 // Changing all ' to &1002;
        chat = chat.replace("&1002;","'");
    }
    while( chat.indexOf('&1003;')!==-1 ){                 // Changing all " to &1003;
        chat = chat.replace('&1003;','"');
    }

    return (
        <Div name={name} yourName={yourName} fullScreen={fullScreen}>
            <div>
                { name === yourName ? "You": name } 
            </div>
            {chat.split("\n").map( (item) => {
                return <div>{item}</div>;
            })}
            <div style={{fontSize:"10px",textAlign:"end",color:"#8c8c8c"}}>
                {date + "--"}{time} <span style={{color:"#57c6f4"}}>&#10004;&#10004;</span>
            </div>
        </Div>
    );
}

export default SingleChat;