import React , { useState } from "react";
import SingleName from "./SelectName/SingleName";

const SelectName = ({ names , changeName , setShowSelectName }) => {

    const [ selectedName , setSelectName ] = useState("None Of These");
    const style = {
        height  : "100%" ,
        width   : "100%" ,
        top:"0px",left:"0px",
        position:"fixed",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000000b3",
        zIndex:"100"
    };

    const selectNewName = (Newname) => {
        setSelectName(Newname);
        changeName(Newname);
    }

    return (
        <div style={style} >
            <div style={{backgroundColor:"white",height:"300px",width:"400px",overflowY:"scroll"}} >
                <div style={{
                    display:"flex",margin:"16px 0px 16px 10px",padding:"10px",alignItems:"center",
                    border:"1px solid #eceff1" , borderRadius:"24px", justifyContent:"center",alignSelf:"flex-start",
                    boxShadow:" 0 1px 2px 0 rgba(60,64,67,0.302)"
                    }}>
                    {"Select your name : "}
                </div>
                <SingleName name={"None Of These"} 
                    selectedName={selectedName} 
                    selectNewName={selectNewName} 
                    setShowSelectName={setShowSelectName} />
                {names.map( (item,index) => {
                    return <SingleName key={item} name={item} 
                    selectedName={selectedName} 
                    selectNewName={selectNewName} 
                    setShowSelectName={setShowSelectName} />
                })}
            </div>
        </div>
    );
}

export default SelectName;