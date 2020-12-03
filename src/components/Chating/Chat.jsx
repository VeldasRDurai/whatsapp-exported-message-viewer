import React , { useState } from "react";
import SingleChat from "./SingleChat";
import NotificationDiv from "./NotificationDiv";
import DateDiv from "./DateDiv";

function Chat( { history , yourName } ) {

    const [ scrollTop , setScrollTop  ] = useState(0);

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
        <div style={style}  onScroll={(e) => {setScrollTop(e.target.scrollTop)}} >

            {history.map( (item,index) => {
                let addDateDiv = false ;
                if (currentDate !== item.Date){
                    addDateDiv = true;
                    currentDate = item.Date;
                }
                return <>
                    { addDateDiv && <DateDiv date={currentDate} parentScrollTop={scrollTop} /> }  
                    {/* DateDiv added whenever current date changes */}  

                    { item.Notification === true ?
                        <NotificationDiv notification={item.Chat} /> :
                        <SingleChat key={index}
                            date={item.Date}
                            time={item.Time} 
                            name={item.Name} 
                            chat={item.Chat} 
                            yourName={yourName} /> 
                    }
                </> ;
            })} 
        </div>
    );
}

export default Chat;
