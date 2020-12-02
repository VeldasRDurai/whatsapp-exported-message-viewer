import React , { useState } from "react";
import Inputter from "./Inputer";
import Chat from "./Chat";

function Main() {

    const [ yourName, setYourName] = useState("");
    const [ history , setHistory ] = useState([]);
    const style = {
        display:"flex" ,
        justifyContent :"center"
    }

    const changeHistory = (newHistory) => {
                                                        
        let firstName = newHistory.find( (item) => {  // findind weather there is any name
            return item.Notification === false ;
        }).Name;

        if (typeof firstName !== undefined){ 
            ( window.confirm("Shall I consider " + firstName + " as your name.") ) ?
                setYourName(firstName) :
                setYourName(newHistory.find( (item) => {
                    return ( (item.Notification !== false) && (item.Name !== firstName)) ; 
                }).Name);
        }

        setHistory(newHistory);
    }

    return (
        <div style={style}>

            <Inputter changeHistory={changeHistory} />
            <Chat history={history} yourName={yourName} />

        </div>
    );
}

export default Main;
