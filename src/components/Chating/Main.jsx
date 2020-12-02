import React , { useState } from "react";
import Inputter from "./Inputer";
import SelectName from "./SelectName";
import Chat from "./Chat";

function Main() {

    const [ names   , setNames   ] = useState([]);
    // const [ gotName , setGotName ] = useState(false);
    const [ yourName, setYourName] = useState("");
    const [ history , setHistory ] = useState([]);
    const style = {
        display:"flex" ,
        justifyContent :"center"
    }

    const changeHistory = (newHistory) => {
                                                        
        // let firstName = newHistory.find( (item) => {  // findind weather there is any name
        //     return item.Notification === false ;
        // }).Name;

        // if (typeof firstName !== undefined){ 
        //     ( window.confirm("Shall I consider " + firstName + " as your name.") ) ?
        //         setYourName(firstName) :
        //         setYourName(newHistory.find( (item) => {
        //             return ( (item.Notification !== false) && (item.Name !== firstName)) ; 
        //         }).Name);
        // }

        // setHistory(newHistory);

        
        let listOfNames = newHistory.filter( (item) => {
            return item.Notification === false;
        }).map( (item2) => {
            return item2.Name;
        });

        // console.log(newHistory);

        setNames([...new Set(listOfNames) ]);
        setHistory(newHistory);
        // setGotName(false);
    }

    const displayChat = (name) => {
        setYourName(name);
        // setGotName(true);
    }

    return (
        <div style={style}>

            <Inputter changeHistory={changeHistory} />
            {/* {
                gotName ?
                <Chat history={history} yourName={yourName} /> :
                <SelectName names={names} displayChat={displayChat} /> 
            } */}
            <SelectName names={names} displayChat={displayChat} />
            <Chat history={history} yourName={yourName} /> 
            
        </div>
    );
}

export default Main;
