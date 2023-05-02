import React from "react"

const SubmitButton = ({label, onSubmit}) =>{

    console.log("SUBMIT BUTTON RENDERED")
  
    return(
      <button onClick={onSubmit}>{label}</button>
    )
  }

  export default React.memo(SubmitButton);

