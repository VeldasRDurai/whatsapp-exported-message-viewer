import React , { useState } from "react";
import Inputter from "./Inputer";
import Chat from "./Chat";

function Main() {

    const [ history , setHistory ] = useState([]);
    // let you = "";
    // let names = [];
    // useEffect( () => {
    //     names = [];
    //     for ( let i=0 ; i<history.length ; i++){
    //         if ( !(names.some( (item) => { return item === history[i].Name })) ){  /* finding weather name in history is in names array */
    //             names.push( history[i].Name );
    //             if (names.length === 2){ 
    //                 let x = Window.confirm("Your name is : " + names[0]);
    //                 if ( x ) {
    //                     you = names[0];
    //                 } else {
    //                     you = names[1];
    //                 }
    //                 break; 
    //             }
    //         }
    //     }
    // } , [history]);
    
    const style = {
        display:"flex" ,
        justifyContent :"center"
    }

    const changeHistory = (newHistory) => {
        setHistory(newHistory);
    }

    return (
        <div style={style}>
            <Inputter changeHistory={changeHistory} />
            <Chat history={history} />
        </div>
    );
}

export default Main;
