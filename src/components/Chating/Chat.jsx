import React, { useState } from "react";
import SingleChat from "./SingleChat";
import Inputer from "./Inputer";

// import history from "./after";

function Chat() {

    const [ history , setHistory ] = useState([]);

    let preDate = "";
    const style = {
        display : "flex" ,
        flexDirection : "column" ,
        height  : "650px" ,
        width   : "375px" ,
        border  : "1px solid green",
        overflowY: "scroll" ,
        backgroundColor:"#e5ddd5"
    };
    const dateDivStyle = {
        alignSelf:"center",
        margin:"10px 10px 10px 10px ",
        height : "auto", 
        width : "auto",
        backgroundColor : "#e1f3fb",
        color:"black",
        boxShadow :"2px 2px 4px grey" ,
        borderRadius : "7px",
        padding : "4px"
    };

    const changeHistory = (newHistory) => {
        console.log("Reached Change history...");
        console.log(newHistory);
        setHistory(newHistory);
    }

    return (
        <div style={{display:"flex" , justifyContent :"center"}}>
            <Inputer changeHistory={changeHistory} />
            <div style={style} >
                {history.map( (item,index) => {
                    let dateDiv = <></>;
                    if (preDate !== item.Date){
                        dateDiv = <div style={dateDivStyle}> {item.Date} </div> ;
                        preDate = item.Date;
                    }
                    return <>
                        {dateDiv}
                        <SingleChat key={index} 
                            date={item.Date} 
                            time={item.Time} 
                            name={item.Name} 
                            chat={item.Chat} />
                    </> ;
                })} 
            </div>
        </div>
    );
}

export default Chat;
