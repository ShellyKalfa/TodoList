import React, {useState} from 'react';

export default function Todos({add}) {
  const [text,setText]=useState("");
  const handlerChange = (e) => {
    setText(e.target.value)
  }
  const handelClick=(text)=>{
    if(text){
      const todo=({
        task: text,
        hasItBeenDone: false
      })
      add({todo})
      setText("")
    }
  }


  return (
    <div>
        <input placeholder="what do you have to do today?......" 
               className="inputInsertToDo"
               onChange={(e)=>{handlerChange(e)}}
               value={text}
        />
        <button className="buttonInsertToDo" onClick={()=>handelClick(text)} > go </button>
    </div>
  );
}

