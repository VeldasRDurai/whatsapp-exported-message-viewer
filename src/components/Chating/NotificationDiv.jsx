import React from "react";

const NotificationDiv = ({ notification }) => {

    const style = {
        alignSelf:"center",
        margin:"10px 10px 10px 10px ",
        height : "auto", 
        width : "auto",
        backgroundColor : "#e1f3fb",
        color:"black",
        boxShadow :"2px 2px 4px grey" ,
        borderRadius : "7px",
        padding : "4px" ,
        fontSize : "12px"
    };

    return (
        <div style={style} >
            {notification}
        </div>
    );
}

export default NotificationDiv;