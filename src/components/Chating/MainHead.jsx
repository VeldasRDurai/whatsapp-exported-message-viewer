import React from "react";
import NavIcon from "./MainHead/NavIcon";

const MainHead = () => {
    const style = {
        height : "8vh" ,
        padding:"8px",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        fontSize:"30px",
        borderBottom:"1px solid #eceff1",
        // boxSizing:"border-box",
    };
    return (
        <div style={style}>
            <NavIcon /> 
            <div>Ramesh Exploid</div>
        </div>
    );
}

export default MainHead;