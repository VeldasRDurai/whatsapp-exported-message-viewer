import React , { useState } from "react";
import styled from "styled-components";

import Inputter from "./Main/Inputer";
import SelectName from "./Main/SelectName";
import Phone from "./Main/Phone";

const Div = styled.div`
    display:flex;
    height:89vh;
    justify-content:center;
    align-items:center;
    
    @media ( max-width: 650px){
        flex-direction:column;
        height:auto;
        align-items:center;
    }
`

function Main() {

    const [ showSelectName , setShowSelectName ] = useState(false);

    const [ names   , setNames   ] = useState([]);
    const [ yourName, setYourName] = useState("");
    const [ history , setHistory ] = useState([]);

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
        <Div>

            <SelectName names={names} changeName={setYourName} 
            setShowSelectName={setShowSelectName} 
            display={ showSelectName ? "flex" : "none" } /> 

            <Inputter changeHistory={changeHistory} setShowSelectName={setShowSelectName}/>
            <Phone history={history} yourName={yourName} /> 
            
        </Div>
    );
}

export default Main;
