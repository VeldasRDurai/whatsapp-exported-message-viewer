import React from "react";
import SingleChat from "./SingleChat";
import DateDiv from "./DateDiv";

function Chat( { history , yourName } ) {

    const style = {
        display : "flex" ,
        flexDirection : "column" ,
        height  : "650px" ,
        width   : "375px" ,
        border  : "1px solid green",
        overflowY: "scroll" ,
        backgroundColor:"#e5ddd5" ,
        // position : "relative" ,
    };

    let currentDate = "";
    return (
        <div style={style} >

            {history.map( (item,index) => {
                let addDateDiv = false ;
                if (currentDate !== item.Date){
                    addDateDiv = true;
                    currentDate = item.Date;
                }
                return <>
                    { addDateDiv && <DateDiv date={currentDate} /> }  {/* DateDiv added whenever current date changes */}  
                    <SingleChat key={index}
                        date={item.Date}
                        time={item.Time} 
                        name={item.Name} 
                        chat={item.Chat} 
                        yourName={yourName} />
                </> ;
            })} 
        </div>
    );
}

export default Chat;
