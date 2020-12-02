import React from "react";

const SelectName = ({ names , displayChat }) => {

    const style = {
        display : "flex" ,
        flexDirection : "column" ,
        height  : "650px" ,
        width   : "375px" ,
        border  : "1px solid green",
        // overflowY: "scroll" ,
        backgroundColor:"#dcf8c6",
        // position : "relative" ,
    };

    return (
        <div style={style} >
            {"Select your name from the following : "}
            {names.map( (item) => {
                return <div style={{textAlign:"center",color:"black",fontWeight:"900",border:"1px #44d19e solid",cursor:"pointer"}} 
                    onClick={ () => { displayChat(item) } } >
                    {item}
                </div>
            })}
            <div style={{textAlign:"center",color:"black",fontWeight:"900",border:"1px #44d19e solid",cursor:"pointer"}} 
                onClick={ () => { displayChat("") } } >
                    None above them
            </div>
        </div>
    );
}

export default SelectName;