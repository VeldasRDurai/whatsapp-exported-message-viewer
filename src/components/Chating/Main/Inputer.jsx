import React, { useState } from "react";

import Write from "./Inputter/Write";
import Click from "./Inputter/Click";

const Inputer = ( {changeHistory , setShowSelectName } ) => {
    const [ val , setVal ] = useState("");
    const style = {
        display : "flex" ,
        flexDirection:"column",
        alignItems:"flex-start",
        // height:"60%",
        // width:"35%",
        height:"350px",
        width:"450px"

        // border:"1px green solid"
    };
    const clickedButton = () => {

        let lines = val.split("\n") ;
        let back = "" ;
        for ( let i=0; i<lines.length-1 ; i++){
            if ( (/\n?\d{2}\/\d{2}\/\d{2},.(\d)?\d:\d{2}.(a|p)m.-./).test(lines[i+1]) ){
                back = back.concat(lines[i] +"\n");
            } else {
                back = back.concat(lines[i] + "&1001;");               // Changing chat \n to &1001;
            }
        }
        back = back.concat(lines[lines.length-1]);

        let history = [];
        let value = back.split("\n");
        for ( let i=0;i<value.length; i++){ 

            if ( !(/\n?\d{2}\/\d{2}\/\d{2},.(\d)?\d:\d{2}.(a|p)m.-./).test(value[i]) ) {break;}

            let dateEnd    = value[i].indexOf(",",0        );
            let timeEnd    = value[i].indexOf("-",dateEnd+1);
            let nameEnd    = value[i].indexOf(":",timeEnd+1);
            
            const singleChatData = {};
            // singleChatData.Date = value[i].slice(0,dateEnd).trim() ;
            // singleChatData.Time = value[i].slice(dateEnd+1,timeEnd).trim() ;
            singleChatData.Date = value[i].match(/\d{2}\/\d{2}\/\d{2}/)[0];
            singleChatData.Time = value[i].match(/(\d)?\d:\d{2}.(a|p)m/)[0];

            if ( nameEnd !== -1){                                      // There is no nameEnd in notifications
                let unFormatedChat = value[i].slice(nameEnd+1) ;
                while( unFormatedChat.indexOf("'")!==-1 ){                 // Changing all ' to &1002;
                    unFormatedChat = unFormatedChat.replace("'","&1002;");
                }
                while( unFormatedChat.indexOf('"')!==-1 ){                 // Changing all " to &1003;
                    unFormatedChat = unFormatedChat.replace('"','&1003;');
                }
                singleChatData.Name = value[i].slice(timeEnd+1,nameEnd).trim() ;
                singleChatData.Chat = unFormatedChat.trim();
                singleChatData.Notification = false;
            } else {
                singleChatData.Name = "" ;
                singleChatData.Chat = value[i].slice(timeEnd+1).trim() ;   // This will be the notification message
                singleChatData.Notification = true ; 
            }
            
            history.push(singleChatData);
        }
        changeHistory(history);
    }

    return <div style={style} >
        <div style={{
            fontSize:"30px",
        }} >
            <div> {"Exported Chat"} </div>
            <div> {"Viewer For WhatsApp"} </div>
            <div style={{fontSize:"12px",fontFamily:"cursive"}}> {"COPY PASTE YOUR EXPORTED CHAT'S CONTENT HERE... 👇"}</div>
        </div>
        <Write setVal={setVal} val={val} />
        {/* <button style={{margin:"10px 10px 10px 0px"}} onClick={ () => setVal("") } >Reset </button>
        <button style={{margin:"10px 10px 10px 0px"}} onClick={clickedButton} >Submit</button> */}
        <div style={{width:"100%",display:"flex",justifyContent:"start", marginTop:"5px"}}>
            <Click value={"Reset"} onClick={ () => setVal("") } />
            <Click value={"Submit"} onClick={ () => {setShowSelectName(true);clickedButton();} } />
            <Click value={"ChangeName"} onClick={ () => setShowSelectName(true)} />
        </div>
    </div>; 
}

export default Inputer;