import React , { useState , useEffect , useRef } from "react";

const DateDiv = ({ date , parentScrollTop }) => {
    const refDateDiv = useRef();
    const [ style , setStyle ] = useState({
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
    });

    const months = [    
        "" , "JANUARY" , "FEBUARY" , "MARCH" , "APRIL" , "MAY" , "JUNE" , "JULY" , "AUGUST" , "SEPTEMBER" , "OCTOBER" , "NOVEMBER" , "DECEMBER"
    ];

    useEffect(() => {
        if ( parentScrollTop+10 > refDateDiv.current.offsetTop ){
            setStyle( (pre) => {
                return { ...pre , position : "fixed" }
            });
        }
    },[parentScrollTop]);

    return ( 
        <div ref={refDateDiv} style={style} >
            { date.match(/\d{2}\//)[0].slice(0,2) + " " }                       {/* day */}
            { (  months[Number( date.match(/\/\d{2}\//)[0].slice(1,3) )] ) }    {/* month */}
            { " 20" + date.match(/\/\d{2}/g)[1].slice(1) }                      {/* year */}
        </div>
    );
}

export default DateDiv;