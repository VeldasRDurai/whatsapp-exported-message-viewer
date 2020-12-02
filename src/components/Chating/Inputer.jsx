import React from "react";

const Inputer = ( {changeHistory} ) => {
    let val = "";
    const style = {
        display : "flex" ,
        flexDirection: "column",
        height  : "650px" ,
        width   : "375px" ,
        border  : "1px solid green",
        backgroundColor:"white"
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

            if ( value[i] === "" ) {break;}

            let dateEnd    = value[i].indexOf(",",0        );
            let timeEnd    = value[i].indexOf("-",dateEnd+1);
            let nameEnd    = value[i].indexOf(":",timeEnd+1);
            
            const singleChatData = {};
            singleChatData.Date = value[i].slice(0,dateEnd).trim() ;
            singleChatData.Time = value[i].slice(dateEnd+1,timeEnd).trim() ;

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
        <textarea style={{border:"black solid 1px" , margin:"10px" , padding:"10px" , height:"610px" , overflow:"hidden" , resize:"none"}}
            onChange={ (e) => {val = (e.target.value)} } 
            onClick ={ (e) => {(e.target.value) = "" } } >
                {"COPY PASTE YOUR EXPORTED CHAT'S CONTENT HERE"}
        </textarea>
        <button style={{margin:"10px"}} onClick={clickedButton} >Submit</button>
    </div>;
}

export default Inputer;