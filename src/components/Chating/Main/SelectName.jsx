import React , { useState } from "react";

import SelectNameHead from "./SelectName/SelectNameHead"
import SingleName from "./SelectName/SingleName";

const SelectName = ({ names , changeName , setShowSelectName , display }) => {

    const [ selectedName , setSelectName ] = useState("None Of These");
    const style = {
        height  : "100%" ,
        width   : "100%" ,
        top:"0px",left:"0px",
        position:"fixed",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000000b3",
        zIndex:"100",
        display:display,
    };
    const style2 = {
        position:"relative",
        backgroundColor:"white",
        height:"400px",
        width:"300px",
    }

    const selectNewName = (Newname) => {
        setSelectName(Newname);
        changeName(Newname);
    }

    return (
        <div style={style}>
            <div style={style2}>
                <SelectNameHead />
                <div style={{ height:"325px",overflowY:'scroll'}} >
                    <SingleName name={"None Of These"} 
                        selectedName={selectedName} 
                        selectNewName={selectNewName} 
                        setShowSelectName={setShowSelectName} />
                    {names.map( (item) => {
                        return <SingleName key={item} name={item} 
                        selectedName={selectedName} 
                        selectNewName={selectNewName} 
                        setShowSelectName={setShowSelectName} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default SelectName;