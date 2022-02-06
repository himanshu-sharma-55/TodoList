import React, { useState } from 'react';

const InputForm = (props) => {

  const[input, setInput] = useState("");

  const handleSubmit = (event) => {
    input !== "" && props.addNewElement(event, input)
    setInput("")
  }
    
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input-section">
                <input type="text" name="task" onChange={e => setInput(e.target.value)}  value={input} placeholder="Enter Item" autoComplete='off'/>
                <button type="submit"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828753.png" alt="addIcon" /></button>
            </div>
        </form>
    </div>
  );
};

export default InputForm;
