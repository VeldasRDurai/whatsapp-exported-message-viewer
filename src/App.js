import React from "react";
import styled from "styled-components" 

import MainHead from "./components/Chating/MainHead"
import Main from "./components/Chating/Main";

const Div = styled.div`
  height:100vh;
  width:100vw;  
`
function App() {
  return (
    <Div>
      <MainHead />
      <Main />
    </Div>
  );
}

export default App;
