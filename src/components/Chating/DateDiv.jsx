import React from "react";

const DateDiv = ({ date , chat}) => {

    const dateDivStyle = {
        alignSelf:"center",
        margin:"10px 10px 10px 10px ",
        height : "auto", 
        width : "auto",
        backgroundColor : "#e1f3fb",
        color:"black",
        boxShadow :"2px 2px 4px grey" ,
        borderRadius : "7px",
        padding : "4px" ,
        fontSize : "12px"
    };

    const months = [
        "" , "JANUARY" , "FEBUARY" , "MARCH" , "APRIL" , "MAY" , "JUNE" , "JULY" , "AUGUST" , "SEPTEMBER" , "OCTOBER" , "NOVEMBER" , "DECEMBER"
    ];

    if ( chat === false ){
        return (
            <div style={dateDivStyle}>
                {console.log("THis is date")}
                {/* { date } */}
                { date.match(/\d{2}\//)[0].slice(0,2) + " " }                       {/* day */}
                { (  months[Number( date.match(/\/\d{2}\//)[0].slice(1,3) )] ) }    {/* month */}
                { " 20" + date.match(/\/\d{2}/g)[1].slice(1) }                      {/* year */}
            </div>
        );
    } else {
        return (
            <div style={dateDivStyle}>
                {console.log("THis is notification")}
                {chat}
            </div>
        );
    }
}

export default DateDiv;