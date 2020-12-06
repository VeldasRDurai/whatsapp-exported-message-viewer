import React from "react";
import ProfileImg from "./ChatHead/ProfileImg";

const ChatHead = () => {
    const style ={
        backgroundColor:"#075e54",
        height:"13%",
        display:"grid",
        gridTemplateColumns:"15px 45px 150px 25px 20px",
        justifyContent:"flex-start",
        alignItems:"center",
        color:"white",
        fontSize:"18px",
        borderRadius:"5px 5px 0px 0px"
    };

    return (
        <div style={style} >
            <div>&#8678;</div>
            <ProfileImg />
            <div> WhatsApp </div>
            <div>&#128269;</div> 
            <div>&#10247;</div>
        </div>
    );
}

export default ChatHead;