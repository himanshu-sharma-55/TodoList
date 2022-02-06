import React, { useState } from 'react';
import InputForm from './InputForm';
import Item from './Item';
import "./styles.css"

function Input() {

  const [array, setArray] = useState([{
      id : 1,
      task : "Demo"
  }])

  const AddElement = (event, input) => {
    event.preventDefault();

    console.log(event.target.task.value)
    setArray([
      {
      id: array.length+1,
      task: input  
      }, ...array])
    
  }

  const DeleteItem = (id) => {

    setArray((prevList) => {
        return prevList.filter( (item, index) => {
            return item.id !== id;
        })
    })
  }

  return(
    <div className="input-container">

      <InputForm addNewElement={AddElement} />
        
      <div id="taskList">
        {array.map( item => <Item itemId={item.id} task={item.task} onDelete={DeleteItem} /> )}
      </div>
    </div>
  );
}

export default Input;
