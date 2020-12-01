import React from "react";

const SingleChat = ({ time , name , chat }) => {
    const style = {
        alignSelf:"flex-start",
        margin:"3px 10px 3px 10px ",
        height : "auto", 
        width : "auto", maxWidth : "250px" ,
        backgroundColor : "white",
        color:"black",
        boxShadow :"2px 2px 4px grey" ,
        borderRadius : "7px",
        padding : "0px 10px 0px 10px"
    };
    const nameStyle = {
        color:"rgb(33 123 236)",
        fontSize:"13px",
        fontWeight:"600"
    };
    if (name === "Veldas R Durai"){
        style.backgroundColor = "#dcf8c6";
        style.alignSelf = "flex-end";
        nameStyle.color = "#44d19e" ;
    }

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
        <div style={style} >
            <div style={nameStyle} >
                { name==="Veldas R Durai" ? "You": name } 
            </div>
            {chat.split("\n").map( (item) => {
                return <div>{item}</div>;
            })}
            <div style={{fontSize:"10px",textAlign:"end",color:"#8c8c8c"}}>
                {time} &#10004;&#10004;
            </div>
        </div>
    );
}

export default SingleChat;