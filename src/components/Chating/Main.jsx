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
        setNames([...new Set(listOfNames) ]);
        setHistory(newHistory);
    }

    return (
        <div style={style}>

            { showSelectName && <SelectName names={names} changeName={setYourName} setShowSelectName={setShowSelectName} /> }
            <Inputter changeHistory={changeHistory} setShowSelectName={setShowSelectName}/>
            <Phone history={history} yourName={yourName} /> 
            
        </div>
    );
}

export default Main;
