import React, { useState } from 'react';
import "./styles.css"

const Item = ({itemId, task, onDelete}) => {

    const handleDelete = (id) => {
        onDelete(id)
    }
    const [isCheck, setCheck] = useState(false);

    const handleChange = () => {
        setCheck(!isCheck);
    }

  return(
      <form>
        <div className="item">
            <input type="checkbox" name="" id="item-check" onClick={handleChange} />
            <li className={ isCheck ? "checkList" : null} key={itemId}>{task}</li>
            <div className="delete-button" onClick={() => handleDelete(itemId)}>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="delete" />
            </div> 
        </div>
      </form>
    
  );
};

export default Item;
