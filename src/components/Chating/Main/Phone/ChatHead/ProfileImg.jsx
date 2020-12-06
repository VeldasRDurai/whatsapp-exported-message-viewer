import React from "react";
import dp from "./NoDp.png";

const CircleClipedImg = () => {
    const style = {
        zIndex:"0",
        height:"35px",width:"35px",
        clipPath: "circle(50%)"
    };
    return (
        <img style={style} src={dp} alt={"imgNotAvailable"} />
    );
}

export default CircleClipedImg;