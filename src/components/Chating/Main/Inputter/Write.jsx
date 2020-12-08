import React , { useRef , useEffect } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
    font-size:12px;
    font-family:cursive;
    height:100%;
    width:100%;
    border:none;
    overflow:hidden; 
    resize:none;
    &:focus {
        outline:none;
    }

    @media ( max-width: 650px){
        font-size: 14px;
        height: 320px;
        width: 85%;
        padding:21px;
        margin:10px 0;
        box-sizing:border-box;
        border: 1px solid black;
        border-radius:20px;
        overflow-y: scroll;
    }
`

const Write = ({ setVal , val }) => {

    const refTextArea = useRef();
    useEffect( () => {
        if ( val === "" ) { refTextArea.current.value = "" ; }
    } , [ val ] );

    return (
        <TextArea ref={refTextArea} spellCheck={false}
            onChange={ (e) => { let copy = (e.target.value) ; setVal(copy); (e.target.value)=copy} }  >
                {""}
        </TextArea>
    );
}

export default Write;