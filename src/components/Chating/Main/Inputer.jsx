import React, { useState } from "react";
import styled from "styled-components";

import InputterHead from "./Inputter/InputterHead";
import Write from "./Inputter/Write";
import Click from "./Inputter/Click";

const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    height:350px;
    width:450px;
    >:nth-child(3){        
        width: 100%;
        display: flex;
        justify-content: start;
        margin-top: 5px;
    }

    @media ( max-width: 650px){
        align-items:center;
        height:auto;
        width:auto;
        >:nth-child(3){
            justify-content: center;
            margin: 5px 5px;
        }
    }
`

const Inputer = ( {changeHistory , setShowSelectName } ) => {
    const [ val , setVal ] = useState("");
    const clickedButton = () => {

        let lines = val.split("\n") ;
        let back = "" ;
        for ( let i=0; i<lines.length-1 ; i++){
            if ( (/\n?(\d)?\d\/(\d)?\d\/\d{2},.(\d)?\d:\d{2}.(a|p|A|P)(m|M)./).test(lines[i+1]) ){
                back = back.concat(lines[i] +"\n");
            } else {
                back = back.concat(lines[i] + "&1001;");               // Changing chat \n to &1001;
            }
        }
        back = back.concat(lines[lines.length-1]);

        let history = [];
        let value = back.split("\n");
        for ( let i=0;i<value.length; i++){ 

            if ( !(/\n?(\d)?\d\/(\d)?\d\/\d{2},.(\d)?\d:\d{2}.(a|p|A|P)(m|M).-./).test(value[i]) ) {break;}

            let dateEnd    = value[i].indexOf(",",0        );
            let timeEnd    = value[i].indexOf("-",dateEnd+1);
            let nameEnd    = value[i].indexOf(":",timeEnd+1);
            
            const singleChatData = {};
            // singleChatData.Date = value[i].slice(0,dateEnd).trim() ;
            // singleChatData.Time = value[i].slice(dateEnd+1,timeEnd).trim() ;
            singleChatData.Date = value[i].match(/(\d)?\d\/(\d)?\d\/\d{2}/)[0];
            singleChatData.Time = value[i].match(/(\d)?\d:\d{2}.(a|p|A|P)(m|M)/)[0];

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

    return ( 
    <Div >
        <InputterHead />
        <Write setVal={setVal} val={val} />
        <div>
            <Click value={"Reset"} onClick={ () => setVal("") } />
            <Click value={"Submit"} onClick={ () => {/*setShowSelectName(true);*/clickedButton();} } />
            <Click value={"Change You"} onClick={ () => setShowSelectName(true)} />
        </div>
    </Div>); 
}

export default Inputer;
