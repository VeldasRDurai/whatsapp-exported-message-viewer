import React from "react";

const SelectNameHead = () => {

    const style ={
        backgroundColor:"#075e54",
        height:"75px",
        width:"100%",
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#e8ffe8",
        fontSize:"20px"
    };
    return (
        <>
            <div style={style} >
                {"Select Your Name"}
            </div>
        </>
    );
}

export default SelectNameHead;