import React, { useState } from "react";

function App() {

  const[head,sethead] = useState("Hello")
  const[Hue,setHue] = useState(false)


  function changeHeading(){
    sethead("submitted")
  }
 function isMouseOver(){
   setHue(true)
 }
 function isMouseOut(){
  setHue(false)
 }
  return (
    <div className="container">
      <h1>{head}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor: Hue ? "black":"white"}}
      onClick={changeHeading}
      onMouseOver={isMouseOver}
      onMouseOut={isMouseOut}
      
      >Submit</button>
    </div>
  );
}

export default App;
