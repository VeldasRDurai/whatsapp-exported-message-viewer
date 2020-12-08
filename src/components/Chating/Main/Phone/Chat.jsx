import React from "react";
import SingleChat from "./Chat/SingleChat";
import NotificationDiv from "./Chat/NotificationDiv";
import DateDiv from "./Chat/DateDiv";

function Chat( { fullScreen , history , yourName } ) {

    const style = {
        display : "flex" ,
        flexDirection : "column" ,
        height  : "87%" ,
        width   : "100%" ,
        overflowY: "scroll" ,
        backgroundColor:"#e5ddd5" ,
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
                    { addDateDiv && <DateDiv date={currentDate}  />} 
                    {/* DateDiv added whenever current date changes */}  

                    { item.Notification === true ?
                        <NotificationDiv notification={item.Chat} /> :
                        <SingleChat key={index}
                            date={item.Date}
                            time={item.Time} 
                            name={item.Name} 
                            chat={item.Chat} 
                            yourName={yourName} 
                            fullScreen={fullScreen} /> 
                    }
                </> ;
            })} 
        </div>
    );
}

export default Chat;
