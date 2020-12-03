import React , { useState } from "react";
import Inputter from "./Inputer";
import SelectName from "./SelectName";
import Chat from "./Chat";

function Main() {

    const [ names   , setNames   ] = useState([]);
    const [ yourName, setYourName] = useState("");
    const [ history , setHistory ] = useState([]);
    const style = {
        display:"flex" ,
        justifyContent :"center"
    }

    const changeHistory = (newHistory) => {
        let listOfNames = newHistory.filter( (item) => {
            return item.Notification === false;
        }).map( (item2) => {
            return item2.Name;
        });
        setNames([...new Set(listOfNames) ]);
        setHistory(newHistory);
    }

    const displayChat = (name) => {
        setYourName(name);
    }

    return (
        <div style={style}>

            <Inputter changeHistory={changeHistory} />
            <SelectName names={names} displayChat={displayChat} />
            <Chat history={history} yourName={yourName} /> 
            
        </div>
    );
}

export default Main;
