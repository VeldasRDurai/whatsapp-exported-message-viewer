import React , { useState } from "react";
import Inputter from "./Main/Inputer";
import SelectName from "./Main/SelectName";
import Phone from "./Main/Phone";

function Main() {

    const [ showSelectName , setShowSelectName ] = useState(false);

    const [ names   , setNames   ] = useState([]);
    const [ yourName, setYourName] = useState("");
    const [ history , setHistory ] = useState([]);
    const style = {
        // display:"grid" ,
        // gridTemplateRows:"89vh",
        // gridTemplateColumns:"20vw 22vw 58vw",
        display:"flex",
        height:"89vh",
        justifyContent:"center",
        alignItems:"center",
        // background:"red",
    }

    const changeHistory = (newHistory) => {
        let listOfNames = newHistory.filter( (item) => {
            return item.Notification === false;
        }).map( (item2) => {
            return item2.Name;
        });
        newHistory.length===0 && alert("It is not a exported chat");
        setNames([...new Set(listOfNames) ]);
        setHistory(newHistory);
    }

    return (
        <div style={style}>

            <SelectName names={names} changeName={setYourName} 
            setShowSelectName={setShowSelectName} 
            display={ showSelectName ? "flex" : "none" } /> 

            <Inputter changeHistory={changeHistory} setShowSelectName={setShowSelectName}/>
            <Phone history={history} yourName={yourName} /> 
            
        </div>
    );
}

export default Main;
