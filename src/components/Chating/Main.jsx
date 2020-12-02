import React , { useState } from "react";
import Inputter from "./Inputer";
import Chat from "./Chat";

function Main() {

    const [ yourName, setYourName] = useState("noname");
    const [ history , setHistory ] = useState([]);
    const style = {
        display:"flex" ,
        justifyContent :"center"
    }

    const changeHistory = (newHistory) => {
        console.log( newHistory.length );
        console.log( newHistory );
        let x = window.confirm("Shall I consider " + newHistory[0].Name + " as your name.");
        let you = "" ;
        if ( x === false){
            try{
                you = newHistory.find( (item) => {
                return item.Name !== newHistory[0].Name;
                }).Name;
            } catch(e){ you = "noname"}
        } else {
            you = newHistory[0].Name;
        }
        console.log("Your Name is : " + you);
        setYourName(you);
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
